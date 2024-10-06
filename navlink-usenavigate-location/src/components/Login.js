import React, { useRef } from 'react'
import {Link, useNavigate} from 'react-router-dom';

function Login() {
  let emailInputRef=useRef();
  let passwordInputRef=useRef();
  let messageInputRef=useRef();

  let navigate=useNavigate();
  return (
    <div>
        <form>
           <h2
           style={{
            backgroundColor:"blue",
            color:"white",
            borderRadius:"50px",
            boxShadow:"20px 20px 20px grey"


           }}
           >Login</h2>
           <div>
                <label>Email</label>
                <input ref={emailInputRef}></input>
            </div>
            <div>
                <label>Password</label>
                <input ref={passwordInputRef}></input>
            </div>
            <div>
                <label>Message</label>
                <input ref={messageInputRef}></input>
            </div>
            <div>
                <button type='button' onClick={()=>{
                  let email=emailInputRef.current.value;
                  let password=passwordInputRef.current.value;
                  let message=messageInputRef.current.value;
                  if(email==="madhavi@gmail.com"&&password ==="madhu123"){
                    navigate("/homeboard",{state:{msg:message}});}
                    else{
                      alert("Invalid Credentials");
                    }
    }}>Login</button>
                
                
            </div>
        </form>
        <br></br>
        <br></br>
    <Link to='signup' >Signup</Link>
      
    </div>
  )
}

export default Login
