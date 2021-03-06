import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const app = props => {
  const [ personsState, setPersonsState ] = useState({persons:[
    {name:'Maaaaaaax', age:28},
    {name:'TK', age:25},
    {name:'Moncia', age:101},
  ]});

  const switchNameHandler = () => {
    // console.log('Clicked')
    // DO NOT: this.state.persons[0].name = 'Maaaaaaax'
    setPersonsState({persons:[
      {name:'Maaaaaaax', age:28},
      {name:'TK', age:25},
      {name:'Moncia', age:101},
    ]
    })
    }
  
    return (
      <div className="App">
        <h1> I am a react developer! </h1>
        <button onClick={switchNameHandler}>Switch</button>
        <Person name= {personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person name= {personsState.persons[1].name} age={personsState.persons[1].age}/>
        <Person name= {personsState.persons[2].name} age={personsState.persons[2].age}/>

      </div>
    );
    // return React.createElement('div', null, React.createElement('h1',{className:'App'},'Doees this work now?'));
  }


export default app;

