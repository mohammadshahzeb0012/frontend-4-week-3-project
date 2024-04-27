import {Button, Form, Input } from "antd";
import "./form.scss";
import {Link, json, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../App";

const Login = () => {
   const [loginStatus, setLoginStatus] = useState('init')
   const {isLoogedIn} = useContext(AuthContext)

   const navgate = useNavigate()

   const handelLogin = ()=>{
    navgate('/user')
   }

    return (
        <div className="form-container">
            <Form className="form" layout="vertical" onFinish={handelLogin}>
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
                        {required: true, message: 'Password is required'},
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Button
                   
                    htmlType="submit"
                    style={{margin: '20px 0'}}
                >Login</Button>
        <p>Don't have an account ? <Link to="/signup">Sign Up</Link></p>

            </Form>
        </div>
    )
}

export default Login
