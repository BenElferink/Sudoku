import React, { Component } from 'react';
import StartPage from './components/StartPage';
import GamePage from './components/GamePage';
import ScorePage from './components/ScorePage';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startPage: true,
      name: '',
      difficulty: 'normal',
      gamePage: false,
      timer: '00:00',
      hints: 3,
      scorePage: false,
    };
  }

  handleStartGame = () => {
    if (this.state.name !== '') {
      this.setState({ startPage: false, gamePage: true }, this.startTimer);
    }
  };

  handleHintClick = () => {
    if (this.state.hints > 0) {
      this.setState({ hints: this.state.hints - 1 });
    }
  };

  render() {
    return (
      <>
        {this.state.startPage ? (
          <StartPage
            name={this.state.name}
            nameChange={(e) => {
              this.setState({ name: e.target.value });
            }}
            diff={this.state.difficulty}
            diffChange={(e) => {
              this.setState({ difficulty: e.target.value });
            }}
            startGame={this.handleStartGame}
          />
        ) : null}
        {this.state.gamePage ? (
          <GamePage
            timer={this.state.timer}
            hints={this.state.hints}
            hintClick={this.handleHintClick}
            resetClick={null}
            abortClick={null}
          />
        ) : null}
        {this.state.scorePage ? <ScorePage /> : null}
      </>
    );
  }

  // ---------- //
  // TIMER FUNCTIONS //
  // ---------- //

  timerInterval;

  // START TIMER
  startTimer = () => {
    let minutes = '00';
    let seconds = '00';
    this.timerInterval = setInterval(() => {
      if (seconds < 60) {
        seconds++;
        if (seconds < 10) {
          seconds = '0' + seconds;
        }
        if (seconds === 60) {
          minutes++;
          if (minutes < 10) {
            minutes = '0' + minutes;
          }
          seconds = '00';
        }
      }
      this.setState({ timer: `${minutes}:${seconds}` });
    }, 1000);
  };

  stopTimer = () => {
    clearInterval(this.timerInterval);
  };
}

export default App;
