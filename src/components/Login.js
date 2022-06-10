import React from "react";

const Login = ({ setEmail, setPassword, loginHandler, formHandler }) => {
  return (
    <div className='login'>
      <div className='heading'>
        <h2>Welcome Back</h2>
        <p className='subheading'>Sub-title text goes here</p>
      </div>
      <form action='' className='form' onSubmit={formHandler}>
        <input
          className='form_control'
          type='email'
          placeholder='Email Address *'
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className='form_control'
          type='password'
          placeholder='Password *'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='btn' onClick={loginHandler}>
          Login
        </button>
      </form>
      <div className='footer'>
        <div className='left'>
          <input type='checkbox' />
          <span>Remember password</span>
        </div>
        <div className='right'>
          <button className='forget'>Forget password?</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
