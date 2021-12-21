import React, { useContext } from 'react';
import '../styles/todo-list-item.scss';
import RequestContext from '../context';

export default function ToDoListItem(props) {
    const { toggleTodo, deleteTodo } = useContext(RequestContext);
    const { id, title, completed } = props.todo;
    const classes = ['todos__list__item'];
    if (completed) classes.push('checked');
    return (
        <li className={classes.join(' ')}>
            <input
                type="checkbox"
                checked={completed}
                onChange={toggleTodo.bind(null, id)}
            />
            <div className="index">{props.index + 1}</div>
            <div className="title">{title}</div>
            <button className="edit" onClick={props.onEdit.bind(null, props.todo)}>&#9998;</button>
            <button className="remove" onClick={deleteTodo.bind(null, id)}>&times;</button>
        </li>
    );
}
