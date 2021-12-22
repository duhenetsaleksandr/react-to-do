import React from 'react';
import './todo-list.scss';
import ToDoListItem from "../ToDoListItem";
import NotTodos from '../NotTodos';

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
