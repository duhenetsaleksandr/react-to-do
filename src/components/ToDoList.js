import React from 'react';
import '../styles/todo-list.scss';
import CreateToDo from './CreateToDo';

class ToDoListItem extends React.Component {
    render() {
        const { id, title, completed } = this.props.todo;
        const classes = ['todos__list__item'];
        if (completed) classes.push('checked');
        return (
            <li className={classes.join(' ')}>
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={this.props.toggleTodo.bind(null, id)}
                />
                <div className="index">{this.props.index + 1}</div>
                <div className="title">{title}</div>
                <button className="edit" onClick={this.props.onEdit.bind(null, this.props.todo)}>&#9998;</button>
                <button className="remove" onClick={this.props.deleteTodo.bind(null, id)}>&times;</button>
            </li>
        );
    }
}

export default class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            edit: { status: false, todo: {} },
        };
        this.handlerSubmitForm = this.handlerSubmitForm.bind(this);
        this.handlerChangeInput = this.handlerChangeInput.bind(this);
        this.activateEditState = this.activateEditState.bind(this);
        this.clearState = this.clearState.bind(this);
    }

    clearState() {
        this.setState({
            inputValue: '',
            edit: { status: false, todo: {} },
        });
    }

    handlerSubmitForm(event) {
        event.preventDefault();
        const value = this.state.inputValue.trim();
        if (!this.state.edit.status) {
            value && this.props.createTodo(value);
            this.clearState();
        } else {
            value && this.props.editTodo(this.state.edit.todo.id, value);
            this.clearState();
        }
    }

    handlerChangeInput(event) {
        this.setState({ inputValue: event.target.value })
    }

    activateEditState(todo) {
        this.setState({
            inputValue: todo.title,
            edit: { status: true, todo },
        })
    }

    render() {
        return (
            <div className="todos-wrapper">
                <CreateToDo
                    edit={this.state.edit}
                    inputValue={this.state.inputValue}
                    handlerChangeInput={this.handlerChangeInput}
                    handlerSubmitForm={this.handlerSubmitForm}
                />
                <ul className="todos__list">
                    {this.props.todos.map((todo, index) => {
                        return <ToDoListItem
                            todo={todo}
                            index={index}
                            key={todo.id}
                            toggleTodo={this.props.toggleTodo}
                            deleteTodo={this.props.deleteTodo}
                            onEdit={this.activateEditState}
                        />
                    })}
                </ul>
            </div>
        );
    }
}
