import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div class="signin"> 

    <div class="content"> 

     <Link className='login__title' to={"/"}>Sign In</Link> 

     <div class="form"> 

      <div class="inputBox"> 
        <input type="text" required /> <i>Phone number</i> 
      </div> 

      <div class="inputBox"> 
        <input type="password" required /> <i>Password</i> 
      </div> 

      <div class="links"> <Link to="/">Forgot Password</Link> <Link to="/auth/sign-up">Signup</Link> 

      </div> 

      <div class="inputBox"> 
        <input type="submit" value={"Login"} />
      </div> 

     </div> 

    </div> 

   </div> 
  )
}

export default Login