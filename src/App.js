import logo from './logo.svg';
import React from 'react';
import './App.css';

const Header = () => {
  return <h2 className = 'header1'> Hello world</h2>
}

const Field = () => {
  const holder = 'Enter here';
  const styledFiel = {
    width:'300px'

  }
  return <input placeholder={holder} type="text" style = {styledFiel}/>
}

class Field1 extends React.Component{
  render(){
    const holder = 'Enter here';
  return <input placeholder={holder}/> 
  }
 
}

function Btn(){
  const text = "log in"
  const res = () => {
    return 'log in'
  }

  const p = <p> Log in </p>;
  return <button>{p}</button>

  
}

function Btn1(){
  const text = "log in"
  const res = () => {
    return 'log in'
  }

  const logged = 1;

  return <button>{logged ? 'enter' : text}</button>

  
}

function WhoAmI(props){
  return (
    <div>
      <h1>My name is {props.name}, surname -{props.surname} </h1>
      <a href={props.link}>My profile</a>
    </div>
  )
}

function WhoAmI2({name, surname, link}){
  return (
    <div>
      <h1>My name is {name()}, surname -{surname} </h1>
      <a href={link}>My profile</a>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <p className='gazoz'>12314354</p>
      <Header/>
      <Field/>
      <Btn/>
      <Field1/>  
      <Btn1/>
      <WhoAmI name="john" surname="smith" link="facebook.com" />
     
      <WhoAmI2 name={() => {return 'John'}} surname="Smith" link="facebook.com" />
      <WhoAmI2 name={() => {return 'John'}} surname="Smith" link="facebook.com" />
      

    </div>
  );
}

export {Header};
export default App;
