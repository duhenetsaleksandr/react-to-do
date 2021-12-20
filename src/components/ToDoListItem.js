import React from 'react';
import '../styles/todo-list-item.scss';

export default function ToDoListItem(props) {
    const { id, title, completed } = props.todo;
    const classes = ['todos__list__item'];
    if (completed) classes.push('checked');
    return (
        <li className={classes.join(' ')}>
            <input
                type="checkbox"
                checked={completed}
                onChange={props.toggleTodo.bind(null, id)}
            />
            <div className="index">{props.index + 1}</div>
            <div className="title">{title}</div>
            <button className="edit" onClick={props.onEdit.bind(null, props.todo)}>&#9998;</button>
            <button className="remove" onClick={props.deleteTodo.bind(null, id)}>&times;</button>
        </li>
    );
}
