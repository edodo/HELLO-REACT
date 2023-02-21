import React, { Component } from 'react';
import './App.css'
import MyComponents from './component/MyComponents';
import MyComponentsFunc from './component/MyComponentsFunc';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <MyComponents name="ReactJS" age={10}/>
        <hr/>
        <MyComponentsFunc name="React함수형">
          <div>함수형 하위 엘리먼트</div>
        </MyComponentsFunc>

      </div>
    );
  }
}

export default App;