import React, { useState } from 'react';
import Todo from './Todo';
import Timer from './Timer';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck, faPlus, faTrashAlt, faClock, faPlay, faPause, faRedoAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faCheck, faPlus, faTrashAlt, faClock, faPlay, faPause, faRedoAlt)

function App() {
  const deleteTodo = (e) => {
    e.preventDefault();

    let index = e.target.value;
    
    if (name === todos[index]){
      setTask('Working on a task?');
    } else {
      setTask(name);
    }
    
    todos.splice(index, 1);
    setTodos([...todos]);
  }

  const [name, setTask] = useState('Working on a task?');
  
  const showTimer = (e) => {
    e.preventDefault();

    let index = e.target.value;
    setTask(todos[index]);
  }

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setTodos([...todos, input]);
    setInput("");
  }

  return (
    <div className="app">
      <div className="leftSide">
        <h1 className="title">
          <FontAwesomeIcon icon={faCheck} />
          <span>TO-DO LIST</span>
        </h1>
        <form>
          <input type="text" 
          placeholder="What's your next task?"
          value={input} 
          onChange={e => setInput(e.target.value)} 
          />
          <button 
            className="addBtn"
            disabled={!input} 
            onClick={handleSubmit}
          >
            <FontAwesomeIcon icon={faPlus} 
            onClick={handleSubmit}/>
          </button>
        </form>
        <div className='list'>
          {
            todos.map((todo, index) => (
              <Todo 
                key={index}
                value={index}
                title={todo}
                delete={deleteTodo}
                timer={showTimer}
              />
            ))
          }
        </div>
      </div>
      <div className="rightSide">
        <div className="taskNow">{name}</div>
        <Timer/>
      </div>
    </div>
  );
}

export default App;
