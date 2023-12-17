import "./App.css";
import Home from "pages/home/Home";
import {  RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "pages/forms/Login";
import About from "pages/about/About";
import Register from "pages/forms/Register";
import SingleTour from "pages/tour/SingleTour";
import HomeIndex from "pages/home/HomeIndex";

function App() {
  const router = createBrowserRouter([{
    path : "/" ,
    element : <Home/>,
    children :[
      {index : true , element : <HomeIndex/>},
      {path : "/tour/:id" , element : <SingleTour/>},
      {path : "/about" , element : <About/>},
      {path : "/login" , element : <Login/>},
      {path : "/register" , element : <Register/>},
    ]
  }])

  return (
<RouterProvider router={router}/>



  );
}

export default App;


