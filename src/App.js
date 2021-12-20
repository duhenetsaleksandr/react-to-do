import './styles/wrapper.scss';
import React from 'react';
import axios from 'axios';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Loader from './components/Loader';
import * as constants from './constants/constants';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { todos: [], loader: false };
        this.toggleTodo = this.toggleTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.createTodo = this.createTodo.bind(this);
        this.fetchTodo = this.fetchTodo.bind(this);
        this.editTodo = this.editTodo.bind(this);
        this.showLoader = this.showLoader.bind(this);
        this.hideLoader = this.hideLoader.bind(this);
        this.editTodoInState = this.editTodoInState.bind(this);
    }

    showLoader() {
        this.setState({ loader: true });
    }

    hideLoader() {
        this.setState({ loader: false });
    }

    async componentDidMount() {
        await this.fetchTodo();
    }

    async fetchTodo() {
        try {
            this.showLoader();
            const response = await axios.get(`${constants.API_URL}?_limit=5`);
            this.setState({ todos: response.data });
        } finally {
            this.hideLoader();
        }
    }

    editTodoInState(id, data) {
        this.setState({
            todos: this.state.todos.map((todo) => {
                if (todo.id === id) return data;
                return todo;
            })
        });
    }

    async toggleTodo(id) {
        try {
            this.showLoader();
            const todo = this.state.todos.find((todo) => todo.id === id);
            const body = { ...todo, completed: !todo.completed };
            const response = await axios.put(`${constants.API_URL}/${id}`, body);
            this.editTodoInState(response.data.id, response.data);
        } finally {
            this.hideLoader();
        }
    }

    async deleteTodo(id) {
        try {
            this.showLoader();
            const response = await axios.delete(`${constants.API_URL}/${id}`);
            if (response.status === 200) {
                this.setState({ todos: this.state.todos.filter((todo) => todo.id !== id) });
            }
        } finally {
            this.hideLoader();
        }
    }

    async createTodo(title) {
        try {
            this.showLoader();
            const body = { title, completed: false };
            const response = await axios.post(constants.API_URL, body);
            this.setState({ todos: [ ...this.state.todos, response.data ] });
        } finally {
            this.hideLoader();
        }
    }

    async editTodo(id, title) {
        try {
            this.showLoader();
            const todo = this.state.todos.find((todo) => todo.id === id);
            const body = {...todo, title};
            const response = await axios.put(`${constants.API_URL}/${todo.id}`, body);
            this.editTodoInState(response.data.id, response.data);
        } finally {
            this.hideLoader();
        }
    }

    render() {
        return (
            <div className="wrapper">
                {this.state.loader && <Loader/>}
                <Header/>
                <Main
                    todos={this.state.todos}
                    toggleTodo={this.toggleTodo}
                    deleteTodo={this.deleteTodo}
                    createTodo={this.createTodo}
                    editTodo={this.editTodo}
                />
                <Footer/>
            </div>
        );
    }
}
