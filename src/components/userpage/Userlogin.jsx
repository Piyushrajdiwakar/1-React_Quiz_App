import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import style from "./userlogin.module.css";


const hashPassword = (password) => {
    return btoa(password); 
}

const Userlogin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        const hashedPassword = hashPassword(password);

        try {
            const response = await axios.get(`http://localhost:3001/users?email=${email}`);
            const user = response.data[0]; 

            if (user && user.password === hashedPassword) {
                navigate("/quiz"); 
            } else {
                setError("Invalid email or password. Please try again.");
            }
        } catch (error) {
            console.error('Error:', error);
            setError("There was an error during login. Please try again.");
        }
    };

    return (
        <div className={style.userlogin_box}>
            <div className={style.heading_box}><h1>User login:</h1></div>
            <form onSubmit={handleLogin} className={style.user_form_box}>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email' required autoComplete='off' style={{ textTransform: 'lowercase' }} />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' required autoComplete='off' />
                {error && <p style={{ color: 'red' }}>{error}</p>} 

                <div className={style.user_save_btn_box}>
                    <button type="submit" id={style.user_save_btn}>Login</button>
                    <div className={style.account_box}>
                        <p>Don't have an account?</p>
                        <Link to="/" id={style.link}>Register!</Link>
                    </div>
                </div>
            </form>
            
        </div>
    );
}

export default Userlogin;
