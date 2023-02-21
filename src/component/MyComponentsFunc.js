import React, { useState, useRef } from 'react';

const MyComponentsFunc = ({ name, children }) => {
    //상태변수와 Setter함수선언
    const [value, setValue] = useState(0)
    const [inputs, setInputs] = useState({
        message: '', username: ''
    })
    const {message, username} = inputs
    const [isValid, setIsValid] = useState(false)
    const [messages, setMessages] = useState(['Angular','React','Vue','Ember'])

    const messageList = messages.map(
        (msg,idx) => 
            (<li key={idx} onDoubleClick={() => handleDClick(idx)}>{msg}</li>))

    const myUsername = useRef(null)

    const handleChange = (event) => {
        setInputs({
            ...inputs,
            [event.target.name]: event.target.value
        })
    }

    const handleEnter = (e) => {
    if(e.keyCode === 13) {
            setIsValid(true)
            setMessages([...messages, message])
            setInputs({...inputs, message:''})
            myUsername.current.focus()
        }
    }

    const handleDClick = (idx) => {
        setMessages(messages.filter((msg, index) => idx !== index))
    }

    return (
        <div>
            <h2>함수형 타입 컴포넌트</h2>
            <p>Props : Hello! {name} </p>
            {children}
            <p>State : {value}</p>
            <button onClick={() => setValue(value + 1)}>증가</button>
            <button onClick={() => setValue(value - 1)}>감소</button>
            <div>
                Message = {message} <br />
                <input type="text" name="message" value={message} 
                onChange={handleChange} 
                onKeyDown={handleEnter}/>
            </div>
            <ul>
                {messageList}
            </ul>
            <div>
                Username = {username} <br />
                <input type="text" name="username" value={username} onChange={handleChange} 
                className={isValid?'success':'failure'} 
                ref={myUsername}
                />
            </div>

        </div>
    );
};

export default MyComponentsFunc;