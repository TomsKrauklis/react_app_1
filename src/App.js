import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons:[
      {name:'Max', age:28},
      {name:'TK', age:25},
      {name:'Moncia', age:54},
    ]
  }
switchNameHandler = () => {
  // console.log('Clicked')
  // DO NOT: this.state.persons[0].name = 'Maaaaaaax'
  this.setState({persons:[
    {name:'Maaaaaaax', age:28},
    {name:'TK', age:25},
    {name:'Moncia', age:101},
  ]
})
}

  render() {
    return (
      <div className="App">
        <h1> I am a react developer! </h1>
        <button onClick={this.switchNameHandler}>Switch</button>
        <Person name= {this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name= {this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name= {this.state.persons[2].name} age={this.state.persons[2].age}/>

      </div>
    );
    // return React.createElement('div', null, React.createElement('h1',{className:'App'},'Doees this work now?'));
  }
}

export default App;
