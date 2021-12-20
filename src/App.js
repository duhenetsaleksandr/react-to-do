import './styles/wrapper.scss';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Loader from './components/Loader';
import * as constants from './constants/constants';

const fetchTodo = async (amountTodos = 5) => {
    const response = await axios.get(`${constants.API_URL}?_limit=${amountTodos}`);
    return response.data;
}

export default function App () {
    const [ loader, setLoader ] = useState(false);
    const [ todos, setTodos ] = useState([]);

    const showLoader = () => setLoader(true);
    const hideLoader = () => setLoader(false);

    useEffect(() => {
        (async () => {
            try {
                showLoader();
                const data = await fetchTodo();
                setTodos(data);
            } catch (error) {
                console.error(error);
            } finally {
                hideLoader();
            }
        })();
    }, []);

    const editTodoInState = (data) => {
        setTodos((todos) => {
            return todos.map((todo) => {
                if (todo.id === data.id) return data;
                return todo;
            })
        });
    }

    const toggleTodo = async (id) => {
        try {
            showLoader();
            const todo = todos.find((todo) => todo.id === id);
            const body = { ...todo, completed: !todo.completed };
            const response = await axios.put(`${constants.API_URL}/${id}`, body);
            editTodoInState(response.data);
        } finally {
            hideLoader();
        }
    }

    const deleteTodo = async (id) => {
        try {
            showLoader();
            const response = await axios.delete(`${constants.API_URL}/${id}`);
            if (response.status === 200) {
                setTodos((todos) => todos.filter((todo) => todo.id !== id));
            }
        } finally {
            hideLoader();
        }
    }

    const createTodo = async (title) => {
        try {
            showLoader();
            const body = { title, completed: false };
            const response = await axios.post(constants.API_URL, body);
            setTodos((todos) => [ ...todos, response.data ]);
        } finally {
            hideLoader();
        }
    }

    const editTodo = async (id, title) => {
        try {
            showLoader();
            const todo = todos.find((todo) => todo.id === id);
            const body = {...todo, title};
            const response = await axios.put(`${constants.API_URL}/${todo.id}`, body);
            editTodoInState(response.data);
        } finally {
            hideLoader();
        }
    }

    return (
        <div className="wrapper">
            { loader && <Loader/> }
            <Header/>
            <Main
                todos={todos}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
                createTodo={createTodo}
                editTodo={editTodo}
            />
            <Footer/>
        </div>
    );
}
