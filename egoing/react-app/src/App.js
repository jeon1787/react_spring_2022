import { Component } from 'react';
import './App.css'; // MyReactApp의 디자인을 결정

//class 방식
class MyReactApp extends Component{
  render(){
    return(
      <div className="App">
        Hello, React!!
      </div>
    )
  }
}

export default MyReactApp;