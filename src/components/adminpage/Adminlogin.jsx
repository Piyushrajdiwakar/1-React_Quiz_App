import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import style from './adminlogin.module.css'

const Adminlogin = () => {
    let navigate = useNavigate();
    let [first_name, setFirstname] = useState("");
    let [Identity_number, setIdentitycode] = useState("");

    let FirstName = (e) => {
        setFirstname(e.target.value.toUpperCase());
    };

    let IdentityCode = (e) => {
        setIdentitycode(e.target.value);
    };

    let handleSubmit = (e) => {
        e.preventDefault();

        if (!first_name || !Identity_number) {
            alert("Please enter both First Name and Identity Number.");
            return;
        }

        axios.get(`http://localhost:3001/admin?first_name=${first_name}&Identity_number=${Identity_number}`)
            .then(response => {
                if (response.data.length > 0) {
                    
                    navigate("/adminmanage");
                } else {
                    
                    alert("Invalid credentials! Please try again.");
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert("An error occurred. Please try again.");
            });
    };

    return (
        <div className={style.adminlogin_box}>
            <div className={style.heading_box}><h1>Admin login:</h1></div>
            <form onSubmit={handleSubmit} className={style.admin_form_box}>
                <label htmlFor="first_name">First Name:</label>
                <input type="text" id="first_name" placeholder='First name' onChange={FirstName} />
                <label htmlFor="identity_number">Identity Number:</label>
                <input type="text" id="identity_number" placeholder='Identity code' onChange={IdentityCode} />
                <div className={style.admin_save_btn_box}>
                    <button type="submit" id={style.admin_save_btn}>Login</button>
                    <div className={style.admin_login_box}>
                        <p>Don't have an account?</p>
                        <Link to="/admin" id={style.link}>Register!</Link>
                    </div>
                    
                </div>
            </form>
            
        </div>
    );
};

export default Adminlogin;
