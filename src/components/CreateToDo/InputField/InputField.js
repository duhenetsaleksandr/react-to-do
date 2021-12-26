import React, { useState, useRef, useEffect } from 'react';
import { useIntl } from 'react-intl'

const initialState = '';

const InputField = ({ editTodo, onCreated, handlerBlurInput }) => {
    const refInputTodo = useRef(null);
    const [ inputValue, setInputValue ] = useState(initialState);
    const intl = useIntl();

    useEffect(() => {
        focusInput();
        const currentState = editTodo.title ? editTodo.title : initialState;
        setInputValue(currentState);
    }, [editTodo, onCreated]);

    const handlerChangeInput = ({ target: { value } }) => {
        setInputValue(value);
    };

    const focusInput = () => {
        refInputTodo.current.focus();
        refInputTodo.current.selectionStart = refInputTodo.current.value.length;
        refInputTodo.current.selectionEnd = refInputTodo.current.value.length;
    };

    const handlerKeyDown = ({ code }) => {
        if (code === 'Enter') handlerBlurInput(inputValue);
    };

    return (
        <input
            type="text"
            placeholder={intl.formatMessage({ id: 'placeholder' })}
            value={inputValue}
            onChange={handlerChangeInput}
            onBlur={handlerBlurInput.bind(null, inputValue)}
            onKeyDown={handlerKeyDown}
            ref={refInputTodo}
        />
    );
}

export default InputField;
