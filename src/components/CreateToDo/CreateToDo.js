import React, { useState } from 'react';
import './form.scss';
import InputField from './InputField';

const CreateToDo = ({ editStateInfo, createTodo, editTodo, clearEditMode }) => {
    const { status, todo } = editStateInfo;
    const [ example, setExample ] = useState(true);

    const handlerSubmitForm = (event) => {
        event.preventDefault();
        const { value } = event.target.firstElementChild;
        if (!status) {
            value && createTodo(value);
            setExample(!example);
        } else {
            value && editTodo(todo.id, value);
        }
        clearEditMode();
    }

    return (
        <form className="form-add-todo" name="create-to-do-form" action="#" onSubmit={handlerSubmitForm}>
            <InputField editTodo={todo} onCreated={example} />
            <button type="submit">{status ? 'Edit task' : 'Add task'}</button>
        </form>
    );
}

export default CreateToDo;
