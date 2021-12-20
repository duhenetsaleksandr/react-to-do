import React from 'react';
import '../styles/form.scss';

export default class CreateToDo extends React.Component {
    constructor(props) {
        super(props);
        this.refInputTodo = React.createRef();
        this.submitForm = this.submitForm.bind(this);
        this.focusInputTodo = this.focusInputTodo.bind(this);
    }

    focusInputTodo() {
        this.refInputTodo.current.focus();
    }

    componentDidMount() {
        this.focusInputTodo();
    }

    componentDidUpdate() {
        this.focusInputTodo();
    }

    submitForm(event) {
        this.props.handlerSubmitForm(event);
    }

    render() {
        const { edit: { status }, inputValue: value } = this.props;

        return (
            <form className="form-add-todo" action="#" onSubmit={this.submitForm}>
                <input
                    type="text"
                    placeholder="Enter new todo"
                    value={value}
                    onChange={this.props.handlerChangeInput}
                    ref={this.refInputTodo}
                />
                {status ?
                    <button disabled={!value} type="submit">Edit task</button> :
                    <button disabled={!value} type="submit">Add task</button>
                }
            </form>
        );
    }
}
