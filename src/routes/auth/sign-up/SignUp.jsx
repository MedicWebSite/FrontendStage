import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const navigate = useNavigate()


  const handleRegisterUser = (e) => {
    e.preventDefault()
    console.log(firstname, lastname, email, password, dateOfBirth);
    fetch('http://147.45.103.204:4040/api/auth/register', {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        firstname: firstname,
        lastname, lastname,
        email: email,
        password: password,
        dateOfBirth: dateOfBirth
      })
    })
      .then(response => response.json())
      .then(data => {
        if (data.statusCode) {
          console.log(data);
          setTimeout(() => { navigate('/auth/email-validate') }, 3000)
        }
        else {
          alert('Something went wrong !!!')
        }
      })

  }




  return (
    <div className="auth-wrapper">
      <h2>Sign Up</h2>
      <form onSubmit={handleRegisterUser} className='auth-form'>
        <div className="fullname-container">
          <input value={firstname} onChange={(e) => setFirstname(e.target.value)}  className='register-input' type="text" placeholder='Firstname' />
          <input  value={lastname} onChange={(e) => setLastname(e.target.value)} className='register-input' type="text" placeholder='Lastname' />
        </div>
        <input  value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} className='register-input' type="date" placeholder='Date of birth' />
        <input  value={email} onChange={(e) => setEmail(e.target.value)} className='register-input' type="email" placeholder='Email' />
        <input  value={password} onChange={(e) => setPassword(e.target.value)} className='register-input' type="password" placeholder='Password' />
        <div className="field btn">
          <div class="btn-layer"></div>
          <input type="submit" value="Signup" />
        </div>
      </form>
    </div>
  )
}

export default SignUp