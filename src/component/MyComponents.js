import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MyComponents.css';

class MyComponents extends Component {
    //state(상태) 객체
    state = {
        value: 0,
        message: '',
        messages: ['Angular','React','Vue','Ember'],
        username: '',
        isValid: false,
    }

    //Event Handler 함수선언
    handleDecrease = () => {
        const { value } = this.state
        this.setState({
            value: value - 1
        })
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleEnter = (e) => {
        const {message, messages} = this.state

        if(e.keyCode === 13) {
            this.setState({
                isValid: true,
                messages: [...messages, message],
                message: ''
            }) //setState
            this.myUsername.focus()
        }
    }
    handleDClick = (idx) => {
        this.setState({
            messages: this.state.messages.filter((msg, index) => idx !== index)
        });
    };

    render() {
        const { name, age } = this.props
        const { value, message, username, isValid, messages } = this.state
        const { handleDecrease, handleChange, handleEnter, handleDClick } = this

        const messageList = messages.map(
            (msg,idx) => 
                (<li key={idx} onDoubleClick={() => handleDClick(idx)}>{msg}</li>))

        return (
            <div>
                <h2>클래스 타입 컴포넌트</h2>
                <p>Props : Hello! {name} / {age}</p>
                <p>State : {value}</p>
                <button onClick={() => this.setState({
                    value: value + 1
                })}>증가</button>
                <button onClick={handleDecrease}>감소</button><br/>
                <div>
                    Message = {message} <br/>
                    <input type="text" name="message" value={message} onChange={handleChange}
                        onKeyDown={handleEnter}
                     />
                </div>
                <ul>
                    {messageList}
                </ul>
                <div>
                    Username = {username} <br/>
                    <input type="text" name="username" value={username} onChange={handleChange} 
                        className={isValid ? 'success':'failure'}
                        ref={(ref) => this.myUsername = ref}
                    />
                </div>
            </div>
        );
    }
}
MyComponents.defaultProps = {
    name: "리액트JS"    
};
MyComponents.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired
};
export default MyComponents;