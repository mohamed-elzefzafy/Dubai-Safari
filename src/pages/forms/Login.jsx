import { useState } from "react";
import "./forms.css";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log("form submited");
    if(email.trim() === "")
    {
      return toast.info("Email Required");
    }

    if(password.trim() === "")
    {
      return toast.error("Password Required");
    }
  }
  return (
  <div className="form-wrabber">
    <ToastContainer theme="colored"/>
    <form onSubmit={formSubmitHandler}  className="form">
<input value={email} type="email" placeholder="Email" onChange={(e)=> setemail(e.target.value)}/>
<input value={password} type="password" placeholder="Password" onChange={(e)=> setpassword(e.target.value)}/>
<button className="form-btn">Login</button>
    </form>
  </div>
  ) 
}

export default Login;