import React, { useEffect, useState } from 'react';
import styles from './ListTasks.module.css';
import toast from 'react-hot-toast';
import { useDrag, useDrop } from 'react-dnd';


export default function ListTasks({ tasks, setTasks }) {
  const [todos, setTodos] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [closed, setClosed] = useState([]);

  useEffect(() => {
    const fTodos = tasks.filter((task) => task.status === 'todo');
    setTodos(fTodos);


    const fInProgress = tasks.filter((task) => task.status === 'inprogress');
    console.log('In Progress Tasks:', fInProgress);
    setInProgress(fInProgress);


    const fClosed = tasks.filter((task) => task.status === 'closed');
    setClosed(fClosed);
  }, [tasks]);





  useEffect(() => {
    console.log("Updated todos:", todos);
  }, [tasks]);


  const statuses = ["todo", "inprogress", "closed"]





  return (
    <div className='flex gap-16'>
      {statuses.map((status, index) => (
        <Section
          key={index}
          status={status}
          tasks={tasks}
          setTasks={setTasks}
          todos={todos}
          inProgress={inProgress}
          closed={closed} />))}
    </div>

  );
}



export function Section({ status, tasks, setTasks, todos, inProgress, closed }) {


  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item) => {
      console.log("Item dropped:", item);
      addItemToSection(item.id, status);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    }),
  }));



  let text = "Todo";
  let bg = "bg-slate-500";
  let tasksToMap = todos;

  if (status === "inprogress") {
    text = "In progress";
    bg = "bg-purple-500";
    tasksToMap = inProgress; // <-- Here
  }


  if (status === "closed") {
    text = "Closed";
    bg = "bg-green-500";
    tasksToMap = closed
  }



  const addItemToSection = (id, newStatus) => {
    setTasks((prev) => {
      const mTasks = prev.map((t) => {
        if (t.id === id) {
          console.log("Updating task:", t);
          return { ...t, status: newStatus };
        }
        return t;
      });
      console.log("Updated tasks:", mTasks);
      return mTasks;
    });
  };



  return (
    <div ref={drop} className={` w-64 rounded-md p-2 ${isOver ? " bg-slate-200 " : ""}`}>
      <Header text={text} bg={bg} count={tasksToMap.length} />
      {tasksToMap.length > 0 && tasksToMap.map(task => <Task key={task.id}
        task={task} tasks={tasks} setTasks={setTasks} />)}
    </div>
  )
}


export function Header({ text, bg, count }) {
  return (
    <div className={`${bg} flex item-center h-12 pl-4 rounded-md uppercase text-sm text-white pt-3`}>
      {text}<div className='ml-2 bg-white w-5 h-5 text-black rounded-full flex items-center justify-center'>{count}</div></div>
  )
}

export const Task = ({ task, tasks, setTasks }) => {

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }));


  console.log(isDragging)


  const handelRemove = (id) => {
    const fTasks = tasks.filter(t => t.id !== id)
    localStorage.setItem("tasks", JSON.stringify(fTasks))
    setTasks(fTasks)
    toast("Task removed", { icon: "💀" })
  }
  return (
    <div ref={drag} className={`relative p-4 mt-8 shadow-md rounded-md ${isDragging ? "opacity-25" : "opacity-100"} cursor-grab`}>      <p>{task.name}</p>
      <button className='absolute bottom-1 right-1 top-1 text-slate-400'
        onClick={() => handelRemove(task.id)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      </button>
    </div>
  )
}