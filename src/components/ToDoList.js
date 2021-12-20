import React from 'react';
import '../styles/todo-list.scss';
import ToDoListItem from "./ToDoListItem";

export default function ToDoList(props) {
    return (
        <ul className="todos__list">
            {props.todos.map((todo, index) => {
                return <ToDoListItem
                    todo={todo}
                    index={index}
                    key={todo.id}
                    onEdit={props.onEdit}
                />
            })}
        </ul>
    );
}
