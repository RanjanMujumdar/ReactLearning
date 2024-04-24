import React, { useState } from 'react';
import './App.css';
import AppendTodoItems from './AppendTodoItems';

function App() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);
  const [showTodo, setShowTodo] = useState(false);
  const [todoList, setTodoList] = useState([]);

  function onTitleChange(event) {
    setTitle(event.target.value);
  }

  function onDescChange(event) {
    setDescription(event.target.value);
  }

  function onIsCompletedChange(event) {
    setIsCompleted(event.target.checked);
  }

  function onButtonClick() {
    const newTodo = {
      title: title,
      description: description,
      completed: isCompleted
    };

    setTodoList([...todoList, newTodo]);
    clearInputFields();
    setShowTodo(true);
  }

  function clearInputFields() {
    setTitle('');
    setDescription('');
    setIsCompleted(false);
  }

  return (
    <div>
      <input type="text" id="title" name="title" placeholder="Title" onChange={onTitleChange} value={title} />
      <br />
      <input type="text" id="description" name="description" placeholder="Description" onChange={onDescChange} value={description} />
      <br />
      <input type="checkbox" id="completed" name="completed" onChange={onIsCompletedChange} checked={isCompleted} />
      <br />
      <button id="addValues" onClick={onButtonClick}>Add</button>
      <br />
      {showTodo && <AppendTodoItems todoList={todoList} />}
    </div>
  );
}

export default App;
