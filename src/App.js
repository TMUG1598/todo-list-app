import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck, faPlay, faPause, faRedoAlt } from '@fortawesome/free-solid-svg-icons'
import Todo from './Todo';
import './App.css';
import db from './firebase';
import TimerCont from './TimerCont';
import More from './More';

library.add(faCheck, faPlay, faPause, faRedoAlt)

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

  useEffect(() => {

    db.collection('todos').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map((doc) => doc.data().title))
    })
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    setTodos([input, ...todos]);

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
            type='submit' 
            className="addBtn"
            disabled={!input} 
            onClick={handleSubmit}
          >
            add
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
        <More />
      </div>
      <TimerCont name={name}/>
    </div>
  );
}

export default App;
