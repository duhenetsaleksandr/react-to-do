import React, { useEffect, useRef } from 'react';
import '../styles/form.scss';

export default function CreateToDo(props) {
    const inputValue = props.inputValue;
    const { status } = props.editStateInfo;
    const refInputTodo = useRef(null);

    useEffect(() => {
        refInputTodo.current.focus();
        refInputTodo.current.selectionStart = refInputTodo.current.value.length;
        refInputTodo.current.selectionEnd = refInputTodo.current.value.length;
    });

    return (
        <form className="form-add-todo" action="#" onSubmit={props.handlerSubmitForm}>
            <input
                type="text"
                placeholder="Enter new todo"
                value={inputValue}
                onChange={props.handlerChangeInput}
                ref={refInputTodo}
            />
            <button disabled={!inputValue} type="submit">{status ? 'Edit task' : 'Add task'}</button>
        </form>
    );
}
