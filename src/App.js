import React, { Component } from 'react';
import Wallpaper from './components/Wallpaper/Wallpaper';
import Header from './components/Header/Header';
import NameInput from './components/NameInput/NameInput';
import DifficultySelector from './components/DifficultySelector/DifficultySelector';
import Button from './components/Button/Button';
import Timer from './components/Timer/Timer';
import Hints from './components/Hints/Hints';
import SudokuChart from './components/SudokuChart/SudokuChart';
import './style/style.css';
import { SudokuCreate } from './scripts/SudokuAlgorithm';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startGame: false,
      finishGame: false,
      hideshow: 'show',
      name: '',
      difficulty: '',
      time: '',
      originalMatrix: '',
    };
  }

  clickStart = () => {
    this.setState({ hideShow: 'hide', originalMatrix: SudokuCreate(9) }, () => {
      setTimeout(() => {
        this.setState({ startGame: true }, () => {
          setTimeout(() => {
            this.setState({ hideShow: 'show' });
          }, 500);
        });
      }, 500);
    });
  };

  clickQuit = () => {
    this.setState({ hideShow: 'hide' }, () => {
      setTimeout(() => {
        this.setState({ startGame: false }, () => {
          setTimeout(() => {
            this.setState({ hideShow: 'show' });
          }, 500);
        });
      }, 500);
    });
  };

  clickReset = () => {};

  clickFinish = () => {};

  render() {
    return (
      <Wallpaper startGame={this.state.startGame} finishGame={this.state.finishGame}>
        {this.state.startGame ? (
          <>
            {/* sudoku/game page ----- [STATE: startGame: true, finishGame: false] */}
            <Timer
              pullData={(time) => {
                this.setState({ time: time });
              }}
              hideShow={this.state.hideShow}
            />
            <Hints difficulty={this.state.difficulty} hideShow={this.state.hideShow} />
            <SudokuChart
              originalMatrix={this.state.originalMatrix}
              difficulty={this.state.difficulty}
              hideShow={this.state.hideShow}
            />
            <div className={`${this.state.hideShow}`}>
              <Button text='Quit' onClick={this.clickQuit} />
              <Button text='Reset' onClick={this.clickReset} />
              <Button text='Finish' onClick={this.clickFinish} />
            </div>
          </>
        ) : this.state.finishGame ? (
          <>
            {/* scoreboard/leaderboard page ----- [STATE: startGame: false, finishGame: true] */}
          </>
        ) : (
          <>
            {/* start/welcome page ----- [STATE: startGame: false, finishGame: false] */}
            <Header hideShow={this.state.hideShow} />
            <NameInput
              pullData={(name) => {
                this.setState({ name: name });
              }}
              hideShow={this.state.hideShow}
            />
            <DifficultySelector
              pullData={(difficulty) => {
                this.setState({ difficulty: difficulty });
              }}
              hideShow={this.state.hideShow}
            />
            <Button
              text='Start Game!'
              onClick={this.clickStart}
              hideShow={this.state.hideShow}
            />
          </>
        )}
      </Wallpaper>
    );
  }
}
