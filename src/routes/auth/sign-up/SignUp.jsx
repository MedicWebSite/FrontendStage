import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div class="signin"> 

    <div class="content"> 

     <Link className='login__title' to={"/"}>Sign Up</Link> 

     <div class="form"> 

      <div class="inputBox"> 
        <input type="text" required /> <i>First Name</i> 
      </div> 
      <div class="inputBox"> 
        <input type="text" required /> <i>Last Name</i> 
      </div> 
      <div class="inputBox"> 
        <input type="text" required /> <i>Phone number</i> 
      </div> 

      <div class="inputBox"> 
        <input type="password" required /> <i>Password</i> 
      </div> 

      <div class="links"> <Link to="/category">Forgot Password</Link> <Link to="/auth/login">Signup</Link> 

      </div> 

      <div class="inputBox"> 
        <input type="submit" value={"Sign up"} />
      </div> 

     </div> 

    </div> 

   </div> 
  )
}

export default SignUp