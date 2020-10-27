import React, { Component } from 'react';
import StartPage from './components/StartPage';
import GamePage from './components/GamePage';
import ScorePage from './components/ScorePage';
import { SudokuCreate } from './scripts/SudokuAlgorithm';
import { duplicateMatrix, filterDifficulty } from './scripts/SudokuFunctions';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      wallpaper: 'left',
      mountStartPage: true,
      mountGamePage: false,
      mountScorePage: false,
      classStartPage: 'show',
      classGamePage: 'hide',
      classScorePage: 'hide',
      name: '',
      difficulty: 'normal',
      timer: '',
      hints: '',
      matrixOrigin: '',
      matrixFilter: '',
      matrixPlayed: '',
    };
  }

  render() {
    const MATRIX = {
      matrixOrigin: this.state.matrixOrigin,
      matrixFilter: this.state.matrixFilter,
      matrixPlayed: this.state.matrixPlayed,
      setMatrixFilter: (matrix) => {
        this.setState({ matrixFilter: matrix });
      },
      setMatrixPlayed: (matrix) => {
        this.setState({ matrixPlayed: matrix });
      },
    };

    return (
      <main style={{ backgroundPosition: this.state.wallpaper }}>
        {this.state.mountStartPage ? (
          <StartPage
            hideShow={this.state.classStartPage}
            name={this.state.name}
            setName={(e) => {
              this.setState({ name: e.target.value });
            }}
            difficulty={this.state.difficulty}
            setDifficulty={(e) => {
              this.setState({ difficulty: e.target.value });
            }}
            clickStart={this.clickStart}
          />
        ) : null}
        {this.state.mountGamePage ? (
          <GamePage
            hideShow={this.state.classGamePage}
            MATRIX={MATRIX}
            timer={this.state.timer}
            setTimer={(timer) => {
              this.setState({ timer: timer });
            }}
            hints={this.state.hints}
            setHints={(hints) => {
              this.setState({ hints: hints });
            }}
            clickQuit={this.clickQuit}
            clickReset={this.clickReset}
            clickFinish={this.clickFinish}
          />
        ) : null}
        {this.state.mountScorePage ? <ScorePage /> : null}
      </main>
    );
  }

  clickStart = () => {
    this.setState(
      {
        timer: '00:00',
        hints:
          this.state.difficulty === 'easy'
            ? 3
            : this.state.difficulty === 'normal'
            ? 2
            : this.state.difficulty === 'hard'
            ? 1
            : 0,
        matrixOrigin: SudokuCreate(9),
      },
      () => {
        this.setState(
          {
            matrixFilter: filterDifficulty(
              duplicateMatrix(this.state.matrixOrigin),
              this.state.difficulty
            ),
          },
          () => {
            this.setState({ matrixPlayed: duplicateMatrix(this.state.matrixFilter) });
          }
        );
      }
    );
    this.setState({ classStartPage: 'hide' }, () => {
      setTimeout(() => {
        this.setState({ mountStartPage: false, mountGamePage: true, wallpaper: 'center' }, () => {
          setTimeout(() => {
            this.setState({ classGamePage: 'show' });
          }, 500);
        });
      }, 500);
    });
  };

  clickQuit = () => {
    this.setState({ classGamePage: 'hide' }, () => {
      setTimeout(() => {
        this.setState({ mountGamePage: false, mountStartPage: true, wallpaper: 'left' }, () => {
          setTimeout(() => {
            this.setState({ classStartPage: 'show' });
          }, 500);
        });
      }, 500);
    });
  };

  clickReset = () => {
    this.setState({
      matrixPlayed: duplicateMatrix(this.state.matrixFilter),
      timer: '00:00',
      hints:
        this.state.difficulty === 'easy'
          ? 3
          : this.state.difficulty === 'normal'
          ? 2
          : this.state.difficulty === 'hard'
          ? 1
          : 0,
    });
  };

  clickFinish = () => {};
}

export default App;
