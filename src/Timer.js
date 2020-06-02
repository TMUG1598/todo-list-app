import React, { Component } from 'react';
import './Timer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Timer extends Component {
    state = {
        timerOn: false,
        minutes: 25,
        seconds: 0,
    }

    startTimer = () => {
        this.setState({timerOn: true});

        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state;

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.myInterval)
                } else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            } 
        }, 1000)
    };

    stopTimer = () => {
        this.setState({ timerOn: false });
        clearInterval(this.myInterval);
    };
    
    resetTimer = () => {
        this.setState({
            timerOn: false,
            minutes: 25,
            seconds: 0
        });
    };
        

    render() {
        const { minutes, seconds } = this.state;
        return (
            <div className="timer">
                <div>
                    { minutes === 0 && seconds === 0
                        ? <h1>Take a break!</h1>
                        : <h3>Time Remaining: <span>{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</span></h3>
                    }
                </div>
                <div>
                    {this.state.timerOn === false && this.state.minutes === 25 && (
                        <button onClick={this.startTimer}>
                            <FontAwesomeIcon icon='play' />
                        </button>
                    )}
                    {this.state.timerOn === true && (this.state.minutes !== 0 || this.state.seconds !== 0) && (
                        <button onClick={this.stopTimer}>
                            <FontAwesomeIcon icon='pause' />
                        </button>
                    )}
                    {this.state.timerOn === false && (this.state.minutes >= 0 && this.state.minutes !== 25) && (
                        <button onClick={this.startTimer}>
                            <FontAwesomeIcon icon='play' />
                        </button>
                    )}
                    {this.state.timerOn === false && this.state.minutes !== 25 && (
                        <button onClick={this.resetTimer}>
                            <FontAwesomeIcon icon='redo-alt' />
                        </button>
                    )}
                    {this.state.timerOn === true && (this.state.minutes === 0 && this.state.seconds === 0) && (
                        <button onClick={this.resetTimer}>
                            <FontAwesomeIcon icon='redo-alt' />
                        </button>
                    )}
                </div>
            </div>
        )
    }
}