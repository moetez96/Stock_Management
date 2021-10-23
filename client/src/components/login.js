import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useHistory } from "react-router-dom";
import {login} from "../actions/userAction";
import {useDispatch} from "react-redux";

const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatch(login({email, password})).then( () =>{
            if(localStorage.getItem('token')){
                history.push('/home')
            }else{
                console.log('mouch fesfes')
            }}
        );
    } 
    return (
        <div className="outer">
            <div className="inner">
            <Form>
                <h1>Login</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={handleEmailChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleOnSubmit}>
                    Login
                </Button>
                <p className="forgot-password text-right">
                    Don't have an account <Link to={"/sign-up"}>Register?</Link>
                </p>
            </Form>
            </div>
      </div>
    );
}
export default Login;