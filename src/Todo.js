import React from 'react';
import './Todo.css';


const Todo = (props) => {
    return (
        <div className="todo">
            <h3 className="todoName">{props.title}</h3>
            <div className='todoBtn'>
                <button value={props.value}
                    onClick={props.timer}
                >
                    timer
                </button>
                <button value={props.value}
                    onClick={props.delete}
                >
                    delete
                </button>
            </div>
        </div>
    );
};

export default Todo;