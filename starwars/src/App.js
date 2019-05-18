import React, { Component } from 'react';
import './App.css';
import './components/StarWars.css';

// import StarWars from "./components/StarWars"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starwarsChars: []
      
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };
  
  // const Luke = props => {
  //   return (
  //     <div>
  //       <h1>Luke: {props.name}</h1>
  //     </div>
  //   )
  // }
  
  render() {
    console.log(this.state)
    return (
      
      <div className="App">
        <h1 className="Header">React Wars</h1>
       
          <ul>
            {this.state.starwarsChars.map((obj, index) => 
              <li className="listNames" key={index}>{obj.name} <br></br>Birth Year: {obj.birth_year}</li>)}
          </ul>
        

      </div>
    );
  }
}

export default App;
