import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {

    }
  return (
    <div>
         <div className="auth-wrapper">
      <h2>Login</h2>
      <form onSubmit={handleLogin} className='auth-form'>
        <input  value={email} onChange={(e) => setEmail(e.target.value)} className='register-input' type="email" placeholder='Email' />
        <input  value={password} onChange={(e) => setPassword(e.target.value)} className='register-input' type="password" placeholder='Password' />
        <div className="field btn">
          <div class="btn-layer"></div>
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
    </div>
  )
}

export default Login
