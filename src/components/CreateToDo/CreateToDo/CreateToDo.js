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
            if (state.inputResult) createTodo(state.inputResult);
            setState((prevState) => ({ ...prevState, flagCreated: !prevState.flagCreated }));
        } else if (status && state.inputResult) {
            editTodo(todo.id, state.inputResult);
        }
        clearEditMode();
    }

    const handlerChangeInput = (value) => setState((prevState) => ({ ...prevState, inputResult: value }));

    return (
        <form className="form-add-todo" name="create-to-do-form" onSubmit={handlerSubmitForm}>
            <InputField editedTodo={todo} flagCreated={state.flagCreated} onBlurInput={handlerChangeInput}/>
            <button type="submit">
                { status ? <FormattedMessage id="button_edit" /> : <FormattedMessage id="button_add" /> }
            </button>
        </form>
    );
}

export default CreateToDo;
