import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from "./quiz.module.css";
import { useNavigate, Link } from 'react-router-dom';

const Quiz = () => {
    const [count, setCount] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await axios.get('http://localhost:3001/questions');
                setCount(response.data.length); // Set count based on the number of questions
            } catch (error) {
                console.error('Error fetching questions:', error);
            }
        };

        fetchQuestions();
    }, []);

    return (
        <div className={style.home_box}>
            <div className={style.head_box}><h1>Quiz Instructions:</h1></div>
            <div className={style.instruction_box}>
                <li>Total questions: {count}</li>
                <li>Every question is worth 1 mark.</li>
                <li>There is no negative marking.</li>
                <li>Once you select an option and confirm, you cannot change it.</li>
                <li>Total marks: {count}</li>
            </div>
            <div className={style.quiz_link_start_back_box}>
                <Link to="/" id={style.link}>Logout!</Link>
                <Link to="/questionspaper" id={style.link}>Start quiz!</Link>
            </div>
        </div>
    );
}

export default Quiz;
