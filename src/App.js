import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
import Welcome from'./Components/Welcome';
import Message from'./Components/Message'
import Counter from'./Components/Counter'
import EventBind from'./Components/EventBind'
import ParentComponent from './Components/ParentComponent';
import Condition from'./Components/Condition'
import NameList from './Components/NameList';
import Person from'./Components/Person'
import Form from'./Components/Form'
import Trial from './Components/Trial';



function App() {
  return (
  <div className="App">
    <Trial/>
   {/* <Form />*}
    {/*<NameList/>*}
    
    {/*<Condition />*}
    {/*<ParentComponent />*}
    {/*<EventBind />*/}
   {/* <Greet name='Amrit' heroName="Spiderman"/>*/}
   {/* <Counter />*}
   {/* <Message />*}
   {/*<Greet name='Amrit'  heroName="Spiderman"> I can fly like Spider </Greet>
    <Greet name='Ankit'  heroName="Batman"><button> Click Me</button></Greet>
    <Greet name='Dipesh'  heroName="Hulk"> I can Perform Like Hulk </Greet>
    <Welcome name='Amrit' heroName="Spiderman" />
    <Welcome  name='Ankit' heroName="Batman"/>
  <Welcome name='Dipesh' heroName="Hulk"/>*/}
    </div>
  );
}

export default App;
