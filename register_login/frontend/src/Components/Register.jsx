import api from '../api'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
 
const Register = () => {
 
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "",
        phone: ""
    })
    const navigate = useNavigate()
 
    const handleRegisterData = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
 
    const registerUser = async (e) => {
        e.preventDefault()
        if (data.password !== data.confirmPassword) {
            alert("Passwords do not match")
            return
        }
        try {
            const { confirmPassword, ...sendData } = data
 
            await api.post('/api/register', sendData)
            alert("Registration Successful")
            navigate('/login')
        } catch (err) {
            alert(err?.response?.data?.message || "Registration failed")
        }
    }
 
    return (
        <div className="auth-page">
            <div className="auth-card">
                <h1 className="auth-title">Create Account</h1>
                <p className="auth-subtitle">Join the portal in seconds</p>
                <form className="auth-form" onSubmit={registerUser}>
                    <label className="field-label" htmlFor="name">Name</label>
                    <input
                        id="name"
                        type="text"
                        placeholder='Full name'
                        name='name'
                        value={data.name}
                        onChange={handleRegisterData}
                        required
                    />

                    <label className="field-label" htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder='you@example.com'
                        name='email'
                        value={data.email}
                        onChange={handleRegisterData}
                        required
                    />

                    <label className="field-label" htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder='Create a password'
                        name='password'
                        value={data.password}
                        onChange={handleRegisterData}
                        required
                    />

                    <label className="field-label" htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        id="confirmPassword"
                        type="password"
                        placeholder='Re-enter password'
                        name='confirmPassword'
                        value={data.confirmPassword}
                        onChange={handleRegisterData}
                        required
                    />

                    <label className="field-label" htmlFor="phone">Phone Number</label>
                    <input
                        id="phone"
                        type="text"
                        placeholder='Contact number'
                        name='phone'
                        value={data.phone}
                        onChange={handleRegisterData}
                        required
                    />

                    <label className="field-label" htmlFor="role">Role</label>
                    <select id="role" name="role" value={data.role} onChange={handleRegisterData} required>
                        <option value="">Select Role</option>
                        <option value="doctor">Doctor</option>
                        <option value="staff">Staff</option>
                    </select>

                    <button className="primary-btn" type='submit'>Register</button>
                </form>
            </div>
        </div>
    )
}
 
export default Register