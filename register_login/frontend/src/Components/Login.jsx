import React, { useState } from "react";
import api from "../api";
 
const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/api/login", form);
      alert("Login Successful");
    } catch (err) {
      alert(err?.response?.data?.msg || "Login failed");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1 className="auth-title">Welcome Back</h1>
        <p className="auth-subtitle">Sign in to continue</p>
        <form className="auth-form" onSubmit={handleSubmit}>
          <label className="field-label" htmlFor="email">Email</label>
          <input
            id="email"
            placeholder="you@example.com"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <label className="field-label" htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <button className="primary-btn" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};
 
export default Login;
 