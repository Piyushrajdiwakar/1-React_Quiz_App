import React, { useState } from 'react';
import axios from 'axios';
import style from './adminmanage.module.css'
import { useNavigate, Link } from 'react-router-dom';

const Adminmanage = () => {
    let navigate = useNavigate();
    const [question, setQuestion] = useState("");
    const [optionA, setOptionA] = useState("");
    const [optionB, setOptionB] = useState("");
    const [optionC, setOptionC] = useState("");
    const [optionD, setOptionD] = useState("");
    const [answer, setAnswer] = useState("");

    const handleSave = () => {
        if (!question || !optionA || !optionB || !optionC || !optionD || !answer) {
            alert("Please fill in all fields.");
            return;
        }

       
        const newQuestion = {
            question,
            option: {
                A: optionA,
                B: optionB,
                C: optionC,
                D: optionD
            },
            answer
        };
        axios.post('http://localhost:3001/questions', newQuestion)
            .then(() => {
                alert("Question saved successfully!");
                setQuestion("");
                setOptionA("");
                setOptionB("");
                setOptionC("");
                setOptionD("");
                setAnswer("");
            })
            .catch(error => console.error('Error:', error));
    };

    return (
        <div className={style.adminlogin_box}>
            <div className={style.heading_box}><h1>Question Paper:</h1></div>
            <div className={style.admin_text_box}>
                <label htmlFor="question">Question:</label>
                <input type="text" id="question" placeholder="Write question" value={question} onChange={(e) => setQuestion(e.target.value)} />
                <label htmlFor="optionA">Option A:</label>
                <input type="text" id="optionA" placeholder="Enter answer for option-A" value={optionA} onChange={(e) => setOptionA(e.target.value)} />
                <label htmlFor="optionB">Option B:</label>
                <input type="text" id="optionB" placeholder="Enter answer for option-B" value={optionB} onChange={(e) => setOptionB(e.target.value)} />
                <label htmlFor="optionC">Option C:</label>
                <input type="text" id="optionC" placeholder="Enter answer for option-C" value={optionC} onChange={(e) => setOptionC(e.target.value)} />
                <label htmlFor="optionD">Option D:</label>
                <input type="text" id="optionD" placeholder="Enter answer for option-D" value={optionD} onChange={(e) => setOptionD(e.target.value)} />
                <label htmlFor="answer">Answer:</label>
                <select id="answer" value={answer} onChange={(e) => setAnswer(e.target.value)} >
                    <option value="">Select Answer</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                </select>
                <div className={style.admin_save_btn_box}>
                    <button onClick={handleSave} id={style.admin_save_btn}>Save</button>
                    <Link to="/admin" id={style.link}>Logout!</Link>
                </div>
            </div>
        </div>
    );
};

export default Adminmanage;
