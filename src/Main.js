import React, { useState } from 'react';
import Welcome from './Welcome';
import './App.css';

const Main = () => {

    const [fullName, setFullName] = useState({
        firstName: "my first name",
        lastName: "my last name"
    });

    const [isloggedIn, setIsloggedIn] = useState(false);

    const inputHandler = (event) =>{
        setFullName({...fullName,[event.target.name]: event.target.value})
    }

    const loginHandler = () =>{
        setIsloggedIn(true);
    }
    return (
        <div className='container'>
            <div className='login'>
            <label> Login Section </label>
                <input 
                    name="firstName"
                    value={fullName.firstName}
                    onChange={inputHandler}
                />
                <input 
                    name="lastName"
                    value={fullName.lastName}
                    onChange={inputHandler}
                />
                <button onClick={loginHandler}>login</button>
            </div>
            
            <Welcome isReallyLogged={isloggedIn} fullnameinfo={fullName}/>
        </div>
    )
}

export default Main;
