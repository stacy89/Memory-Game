import React, { Component } from 'react';
import './App.css';
import characters from "./characters.json";
import Wrapper from "./components/Wrapper"
import NavBar from "./components/NavBar";
import Title from "./components/Title";
import CharCard from "./components/CharCard";

class App extends Component {
  state = {
    msg: "Click image to start!",
    topScore: 0,
    currentScore: 0,
    characters: characters,
    unselectedChar: characters 
  };

  shuffleChar = char => {
    for (let i = char.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [char[i], char[j]] = [char[j], char[i]];
    }  
  };

  guesses = id => {
    const findChar = this.state.unselectedChar.find(char => char.id === id);
    // my if condition is hitting but if I hit the same one again it does not go into my else. 
    // The random method is working once clicked and the message "You have guesses incorrectly" works
    if (findChar === undefined) {
      this.setState({
        msg: "You have guessed incorrectly!",
        topScore: (this.state.currentScore > this.state.topScore) ? this.state.currentScore : this.state.topScore,
        curScore: 0,
        characters: characters,
        unselectedChar: characters
      });
    } else {
      const newGuess = this.state.unselectedChar.filter(char => char.id !== id);
      this.setState({
        msg: "You have guessed correctly!",
        curScore: this.state.currentScore + 1,
        characters: characters,
        unselectedChar: newGuess
      });  
    }
    this.shuffleChar(characters);
  };

  render() {
    return (
      <Wrapper>
        <NavBar
          msg={this.state.msg}
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
        />
        <Title />
        {
          this.state.characters.map(char => (
            <CharCard 
              key={char.id}
              name={char.name}
              image={char.image}
              guesses={this.guesses}
              currentScore={this.state.currentScore}
            />  
          ))
        }  
      </Wrapper>
    );
  };
};  

export default App;















