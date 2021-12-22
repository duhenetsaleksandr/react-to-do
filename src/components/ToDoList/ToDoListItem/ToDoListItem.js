import React from 'react';
import './todo-list-item.scss';

const ToDoListItem = ({ todo, deleteTodo, onEdit, toggleTodo }) => {
    const { id, title, completed } = todo;
    const classes = ['todos__list__item'];
    if (completed) classes.push('checked');

    return (
        <li className={classes.join(' ')}>
            <input
                type="checkbox"
                checked={completed}
                onChange={toggleTodo.bind(null, id)}
            />
            <div className="title">{title}</div>
            <button className="edit" onClick={onEdit.bind(null, todo)}>&#9998;</button>
            <button className="remove" onClick={deleteTodo.bind(null, id)}>&times;</button>
        </li>
    );
}

export default ToDoListItem;
