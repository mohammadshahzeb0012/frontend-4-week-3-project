import './form.scss'
import { Button, Form, Input, message } from "antd";
import { useContext, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../App';
import tokenGenerator from '../tokenGenerator'

const SignUp = () => {

  const navigate = useNavigate();
  const [signUpMessage, setSignUpMessage] = useState({ status: 'init', message: '' })
  const { setIsLoggedIn } = useContext(AuthContext)

  const handelSignUp = (form) => {
    setSignUpMessage({ status: ("pending") })
    if (form.password === form.conferm_password) {
      form.token_id = tokenGenerator()
      localStorage.setItem('token', JSON.stringify(form))
      setSignUpMessage({ status: 'success', message: 'Succesfully Signed Up!  You will be redirected to profile page' })
      setTimeout(() => {
        setIsLoggedIn(true)
        navigate('/profile')
      }, 2000);
    } else {
      setSignUpMessage({ status: 'error', message: 'Conferm Password Not Matched' })
    }
  }

  return (
    <div className="form-container">
      <Form className="form" layout="vertical" onFinish={handelSignUp}>
        <h2 style={{color:'white'}}>Sign Up</h2>
        <Form.Item
          label="Name"
          name="name"
          className="input-class"
          rules={[
            { required: true, message: "Full Name is reqired" },
          ]}
        >
          <Input placeholder="Enter your Full Name" name="name"
          />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          className="input-class"
          rules={[
            { required: true, message: "Email is required" },
            { type: "email", message: "Please enter a valid email" }
          ]}
        >
          <Input placeholder="Enter your email" name="email" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          className="input-class"
          rules={[
            { required: true, message: 'Password is required' },
          ]}
        >
          <Input.Password
            placeholder='Password' />
        </Form.Item>
        <Form.Item
          label="Conferm Password"
          name="conferm_password"
          className="input-class"
          rules={[
            { required: true, message: 'Conferm Password is required' },
          ]}
        >
          <Input.Password
            placeholder='Conferm Password' />
        </Form.Item>

        {
          signUpMessage.status === 'success' ?
            <p style={{ color: "green" }}>{signUpMessage.message}
            </p>
            : <p style={{ color: "red" }}>{signUpMessage.message}</p>
        }

        <Button
          htmlType="submit"
          loading={signUpMessage.status === "pending"}
          style={{ margin: '20px 0' }}
        >Sign Up</Button>
      </Form>
    </div>
  )
}

export default SignUp
