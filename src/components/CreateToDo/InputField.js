import React, { useState, useRef, useEffect } from 'react';

const initialState = '';

const InputField = ({ editTodo, onCreated }) => {
    const refInputTodo = useRef(null);
    const [ inputValue, setInputValue ] = useState(initialState);

    useEffect(() => {
        focusInput();
        const currentState = editTodo.title ? editTodo.title : initialState;
        setInputValue(currentState);
    }, [editTodo, onCreated]);

    const handlerChangeInput = (event) => {
        setInputValue(event.target.value);
    };

    const focusInput = () => {
        refInputTodo.current.focus();
        refInputTodo.current.selectionStart = refInputTodo.current.value.length;
        refInputTodo.current.selectionEnd = refInputTodo.current.value.length;
    };

    return (
        <input
            type="text"
            placeholder="Enter new todo"
            value={inputValue}
            onChange={handlerChangeInput}
            ref={refInputTodo}
        />
    );
}

export default InputField;
