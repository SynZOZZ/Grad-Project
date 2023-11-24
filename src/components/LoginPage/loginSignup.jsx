import React from "react";
import Back from "../common/back/Back";
import "./loginSignup.css"
import "../common/header/Header"

const LoginForm = () => {
    return (
        <>
        <Back title='Login page' />
    <div class="container--login" >
        <form class="form" id="login" method="POST"  >

            <h1 class="form__title">Login</h1>
            <div class="form__message form__message--error"></div>

            <div class="form__input-group">
                <input type="text" name="username" class="form__input" id="username" autofocus placeholder="Username or email"></input>
                <div class="form__input-error-message"></div>
            </div>

            <div class="form__input-group">
                <input type="password" name="password" class="form__input" id="password" autofocus placeholder="Password"></input>
                <div class="form__input-error-message"></div>
            </div>
            <div class="checkBox">
            <input type="checkbox" id="student" name="student" value="student"></input>
            <label for="student"> Student &#8287;&#8287;&#8287;</label>
            <input type="checkbox" id="teacher" name="teacher" value="teacher"></input>
            <label for="teacher"> Teacher</label>
            </div>
            <button class="form__button" type="submit">Continue</button>
        </form>
    </div>
        </>
    );
}

export default LoginForm















/*//import React from 'react'
import './loginSignup.css'
import React, { UseState } from "react"
// import user_icon from '..Assets/person_icon.png'
// import email_icon from '..Assets/email_icon.png'
// import password_icon from '..Assets/password_icon.png'

function loginSignup(props) {
    const [username, setUsername] = UseState('')
    const [password, setPassword] = UseState('')

    // function handleLogin(e) {
    //     e.preventDefault()
    //     // Code to handle login goes here
    //     props.toggle()
    // }
    async function handleLogin(e) {
        e.preventDefault();

        // Placeholder for authentication logic - replace with actual authentication code
        const isAuthenticated = await authenticateUser(username, password);

        if (isAuthenticated) {
            // If authentication is successful, you can perform further actions
            // For example, redirect to another page or update the application state
            console.log('Login successful');
            props.toggle();
        } else {
            // If authentication fails, you can show an error message or take other actions
            console.log('Login failed. Invalid credentials.');
        }
    }

    async function authenticateUser(username, password) {
        // Placeholder for actual authentication logic
        // This is where you would typically make an API call to your server for authentication
        // For example, you can use the fetch function to send a POST request to your server
        // and check if the provided username and password are valid

        // Replace the following with your actual authentication logic
        // For simplicity, this example assumes authentication is successful if the username and password are not empty
        return username.trim() !== '' && password.trim() !== '';
    }

    return (
        <div className="popup">
            <div className="popup-inner">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <label>
                        Username:
                        <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                    </label>
                    <label>
                        Password:
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    </label>
                    <button type="submit">Login</button>
                </form>
                <button onClick={props.toggle}>Close</button>
            </div>
        </div>
    )
}

export default loginSignup
*/