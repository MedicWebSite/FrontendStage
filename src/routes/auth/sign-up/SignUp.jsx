import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ApiInstance from '../../../api';

const SignUp = () => {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const navigate = useNavigate()


  const handleRegisterUser = async (e) => {
    e.preventDefault()
    const NewUser = {
      firstname: firstname,
      lastname, lastname,
      email: email,
      password: password,
      dateOfBirth: dateOfBirth
    }
    try {
      const response = await ApiInstance.post('/auth/register', NewUser)
      if (response.status === 200) {
        setTimeout(() => { navigate('/auth/email-validate') }, 2500)
      }
    }
    catch (error) {
      console.log(error);
    }
  }




  return (
    <div className="auth-wrapper">
      <h2>Sign Up</h2>
      <form onSubmit={handleRegisterUser} className='auth-form'>
        <div className="fullname-container">
          <input value={firstname} onChange={(e) => setFirstname(e.target.value)} className='register-input' type="text" placeholder='Firstname' />
          <input value={lastname} onChange={(e) => setLastname(e.target.value)} className='register-input' type="text" placeholder='Lastname' />
        </div>
        <input value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} className='register-input' type="date" placeholder='Date of birth' />
        <input value={email} onChange={(e) => setEmail(e.target.value)} className='register-input' type="email" placeholder='Email' />
        <input value={password} onChange={(e) => setPassword(e.target.value)} className='register-input' type="password" placeholder='Password' />
        <div className="field btn">
          <div class="btn-layer"></div>
          <input type="submit" value="Signup" />
        </div>
      </form>
    </div>
  )
}

export default SignUp