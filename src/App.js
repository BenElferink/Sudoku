import React, { Component } from 'react';
import StartPage from './components/StartPage';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      difficulty: 'normal',
    };
  }

  render() {
    return (
      <>
        <StartPage
          name={this.name}
          nameChange={(e) => {
            this.setState({ name: e.target.value });
          }}
          diff={this.difficulty}
          diffChange={(e) => {
            this.setState({ difficulty: e.target.value });
          }}
          startGame={() => {
            console.log('worksssss');
          }}
        />
      </>
    );
  }
}

export default App;
