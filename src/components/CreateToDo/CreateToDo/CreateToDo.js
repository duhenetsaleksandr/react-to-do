import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import './CreateToDo.scss';
import InputField from 'components/CreateToDo/InputField';

const initialState = {
    flagCreated: true,
    inputResult: '',
};

const CreateToDo = ({ editStateInfo, createTodo, editTodo, clearEditMode }) => {
    const { status, todo } = editStateInfo;
    const [ state, setState ] = useState(initialState);

    const handlerSubmitForm = (event) => {
        event.preventDefault();
        if (!status) {
            state.inputResult && createTodo(state.inputResult);
            setState({ ...state, flagCreated: !state.flagCreated });
        } else {
            state.inputResult && editTodo(todo.id, state.inputResult);
        }
        clearEditMode();
    }

    const handlerChangeInput = (value) => {
        setState({ ...state, inputResult: value });
    };

    return (
        <form className="form-add-todo" name="create-to-do-form" onSubmit={handlerSubmitForm}>
            <InputField editTodo={todo} onCreated={state.flagCreated} handlerBlurInput={handlerChangeInput}/>
            <button type="submit">
                { status ? <FormattedMessage id="button_edit" /> : <FormattedMessage id="button_add" /> }
            </button>
        </form>
    );
}

export default CreateToDo;
