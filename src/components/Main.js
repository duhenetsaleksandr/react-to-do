import React, { useState, useContext } from 'react';
import '../styles/main.scss';
import CreateToDo from './CreateToDo';
import ToDoList from './ToDoList';
import Context from '../context';

export default function Main(props) {
    const inputInitialState = '';
    const editModeInitialState = { status: false, todo: {} };
    const { createTodo, editTodo } = useContext(Context);

    const [ inputValue, setInputValue ] = useState(inputInitialState);
    const [ editMode, setEditMode ] = useState(editModeInitialState);

    const activateEditState = (todo) => {
        setInputValue(todo.title);
        setEditMode({ status: true, todo });
    }

    const clearAllStates = () => {
        setInputValue(inputInitialState);
        setEditMode(editModeInitialState);
    };

    const handlerSubmitForm = (event) => {
        event.preventDefault();
        const value = inputValue.trim();
        if (!editMode.status) {
            value && createTodo(value);
        } else {
            value && editTodo(editMode.todo.id, value);
        }
        clearAllStates();
    }

    const handlerChangeInput = (event) => {
        setInputValue(event.target.value);
    }

    return (
        <main className="main">
            <div className="container main__container">
                <div className="todos-wrapper">
                    <CreateToDo
                        editStateInfo={editMode}
                        inputValue={inputValue}
                        handlerChangeInput={handlerChangeInput}
                        handlerSubmitForm={handlerSubmitForm}
                    />
                    <ToDoList
                        todos={props.todos}
                        onEdit={activateEditState}
                    />
                </div>
            </div>
        </main>
    );
}
