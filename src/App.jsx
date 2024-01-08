import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Notfound from './components/Notfound/Notfound';
import Home from './components/Home/Home';




const routes = createBrowserRouter([{
  path: "", element: <Layout />, 
  children: [
    { path: '', element: <Register /> },
    { path: "register", element: <Register /> },
    { path: "login", element: <Login /> },
    { path: "Home", element: <Home /> },
    { path: "*", element: <Notfound /> }
  ]
}])
function App() {


  return (
    <RouterProvider  router={routes}></RouterProvider>
  );
}

export default App;
