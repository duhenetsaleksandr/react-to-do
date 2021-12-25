import React from 'react';
import './ToDoList.scss';
import ToDoListItem from 'components/ToDoList/ToDoListItem';
import NotTodos from 'components/ToDoList/NotTodos';

const ToDoList = ({ todos, onEdit, toggleTodo, deleteTodo}) => (
    <ul className="todos__list">
        {!todos.length ? <NotTodos/> : todos.map((todo) => (
            <ToDoListItem
                todo={todo}
                key={todo.id}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
                onEdit={onEdit}
            />
        ))}
    </ul>
);

export default ToDoList;
