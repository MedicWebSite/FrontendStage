import React, { useState } from 'react'
import ApiInstance from '../../../api'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async (e) => {
        e.preventDefault()

        const UserData = { email: email, password: password }
        
        try {
            const response = await ApiInstance.post('/auth/login', UserData)
            console.log(response);
        }
        catch (error) {
            console.log(error);
        }

    }
    return (
        <div>
            <div className="auth-wrapper">
                <h2>Login</h2>
                <form onSubmit={handleLogin} className='auth-form'>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} className='register-input' type="email" placeholder='Email' />
                    <input value={password} onChange={(e) => setPassword(e.target.value)} className='register-input' type="password" placeholder='Password' />
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
