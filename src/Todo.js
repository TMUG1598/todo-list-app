import React from 'react';
import './Todo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Todo = (props) => {
    return (
        <div className="todo">
            <h3>{props.title}</h3>
            <div>
                <button className="timerBtn"
                    value={props.value}
                    onClick={props.timer}
                >
                    <FontAwesomeIcon icon='clock' />
                </button>
                <button className="deleteBtn"
                    value={props.value}
                    onClick={props.delete}
                >
                    <FontAwesomeIcon icon='trash-alt' />
                </button>
            </div>
        </div>
    );
};

export default Todo;