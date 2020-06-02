import React from 'react';
import './TimerCont.css';
import Timer from './Timer';

function TimerCont({ name }) {
    return(
        <div className="timerCont">
            <div className="taskNow">{name}</div>
            <Timer/>
        </div>
    )
}

export default TimerCont;