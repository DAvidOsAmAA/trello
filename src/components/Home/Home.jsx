import React, { useEffect, useState } from 'react'
import styles from './Home.module.css'
import Createtask from '../createtask/createtask'
import ListTasks from '../ListTasks/ListTasks'
import { Toaster } from 'react-hot-toast';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

export default function Home() {
  const [tasks, setTasks] = useState([])
  console.log("tasks", tasks)
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));  
    setTasks(storedTasks || []);  
  }, [])

  return (
    <DndProvider backend={HTML5Backend}>
      <Toaster />
      <div className='bg-slate-100 w-full ml-8 h-screen flex flex-col items-center m-0 p-3 gap-16 pt-32'>
        <Createtask tasks={tasks} setTasks={setTasks} />
        <ListTasks tasks={tasks} setTasks={setTasks}/>
      </div>
      </DndProvider>
  )
}
