import React, { useState } from 'react';
import './Main.scss';
import CreateToDo from 'components/CreateToDo/CreateToDo';
import ToDoList from 'components/ToDoList/ToDoList';

const initialState = {
    editMode: {
        status: false,
        todo: {},
    },
};

const Main = ({ todos, createTodo, deleteTodo, editTodo, toggleTodo }) => {
    const [ state, setState ] = useState(initialState);

    const activateEditState = (todo) => setState({ editMode: { status: true, todo }});

    const clearEditMode = () => {
        setState(initialState);
    };

    return (
        <main className="main">
            <div className="container main__container">
                <div className="todos-wrapper">
                    <CreateToDo
                        editStateInfo={state.editMode}
                        createTodo={createTodo}
                        editTodo={editTodo}
                        clearEditMode={clearEditMode}
                    />
                    <ToDoList
                        todos={todos}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                        onEdit={activateEditState}
                    />
                </div>
            </div>
        </main>
    );
}

export default Main;
