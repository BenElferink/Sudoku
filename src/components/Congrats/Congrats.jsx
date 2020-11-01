import React, { Component } from 'react';
import { connect } from 'react-redux';
import { scoresUpdate } from './../../redux/actions/scoresUpdate';
import './style/style.css';

class Congrats extends Component {
  componentDidMount() {
    this.props.scoresUpdate(
      this.props.username,
      this.props.difficulty,
      this.props.time,
      this.props.hints,
      this.props.resets
    );
  }

  render() {
    return (
      <div className='congrats'>
        <h4>Well done {this.props.username}!</h4>
        <p>
          You finished in {this.props.time.minutes} minutes, {this.props.time.seconds}{' '}
          seconds
        </p>
        <p>
          You used {this.props.hints.used} hint(s), and reset {this.props.resets} time(s)
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.username,
    difficulty: state.difficulty,
    time: state.time,
    hints: state.hints,
    resets: state.resets,
  };
};

const mapDispatchToProps = () => {
  return { scoresUpdate };
};

export default connect(mapStateToProps, mapDispatchToProps())(Congrats);
