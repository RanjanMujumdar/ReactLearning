import React from 'react';

function AppendTodoItems(props) {
return (
<div>
    <h1>ToDo application</h1>
    {props.todoList.map((todo, index) => (
    <div key={index}>
        <h3>{todo.title}</h3>
        <p>{todo.description}</p>
        <input type="checkbox" checked={todo.completed} />
    </div>
    ))}
</div>
);
}

export default AppendTodoItems;
