import React from 'react';
import '../styles/main.scss';
import ToDoList from './ToDoList';

export default class Main extends React.Component {
    render() {
        return (
            <main className="main">
                <div className="container main__container">
                    <ToDoList
                        todos={this.props.todos}
                        toggleTodo={this.props.toggleTodo}
                        deleteTodo={this.props.deleteTodo}
                        createTodo={this.props.createTodo}
                        editTodo={this.props.editTodo}
                    />
                </div>
            </main>
        );
    }
}
