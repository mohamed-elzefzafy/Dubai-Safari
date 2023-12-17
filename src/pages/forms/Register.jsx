import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";


const Register = () => {

    const [email, setemail] = useState("");
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [confirmpassword, setconfirmpassword] = useState("");
  
    const formSubmitHandler = (e) => {
      e.preventDefault();
      console.log("form submited");
      if(email.trim() === "")
      {
        return toast.info("Email Required");
      }

      if(username.trim() === "")
      {
        return toast.info("Username Required");
      }
  
  
      if(password.trim() === "")
      {
        return toast.error("Password Required");
      }


      if(confirmpassword !== password)
      {
        return toast.error("Password is not match");
      }

      
    }
    return (
    <div className="form-wrabber">
      <ToastContainer theme="colored"/>
      <form onSubmit={formSubmitHandler}  className="form">
  <input value={email} type="email" placeholder="Email" onChange={(e)=> setemail(e.target.value)}/>
  <input value={username} type="text" placeholder="UserName" onChange={(e)=> setusername(e.target.value)}/>
  <input value={password} type="password" placeholder="Password" onChange={(e)=> setpassword(e.target.value)}/>
  <input value={confirmpassword} type="password" placeholder="Confirm Password" onChange={(e)=> setconfirmpassword(e.target.value)}/>
  <button className="form-btn">Register</button>
      </form>
    </div>
    ) 

}

export default Register