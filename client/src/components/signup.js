import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useHistory } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {signup} from "../actions/userAction";

const SignUp = () =>  {

    const error_signup = useSelector(state => state.userReducer.error_signup);
    const dispatch = useDispatch();
    const history = useHistory();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value)
    }
    
    const handleLastNameChange = (e) => {
        setLastName(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatch(signup({firstName, lastName, email, password})).then(() => {
            if(error_signup){
                console.log('mouch fesfes')

            }else{
                history.push('/sign-in')
            }
        })
    } 
        return (
            <div className="outer">
                <div className="inner">
                    <Form>
                        <h1>Register</h1>
                        <Form.Group className="mb-3">
                            <Form.Label>First name</Form.Label>
                            <Form.Control type="text" placeholder="Enter First Name" onChange={handleFirstNameChange}/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Last Name" onChange={handleLastNameChange}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={handleEmailChange}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange}/>
                        </Form.Group>

                        <Button variant="primary" type="submit" onClick={handleOnSubmit}>
                            Register
                        </Button>
                        <p className="forgot-password text-right">
                            Already registered <Link to={"/sign-in"}>Register?</Link>
                        </p>
                    </Form>
                </div>
            </div>
        );
}

export default SignUp;