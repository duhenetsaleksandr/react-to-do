import React, { useState, useEffect } from 'react';
import ThemeContext from 'Context/ThemeContext';
import { IntlProvider } from 'react-intl';
import './App.scss';
import Header from "components/Header";
import Main from "components/Main";
import Footer from "components/Footer";
import Loader from 'components/common/Loader';
import { fetchTodoAPI, createTodoAPI, editTodoAPI, deleteTodoAPI } from 'helpers/requestAPI';

import { LOCALES } from 'i18n/locales';
import { messages } from 'i18n/messages';

const initialState = {
    isLoading: false,
    todos: [],
    darkTheme: true,
    locale: LOCALES.ENGLISH,
};

const App = () => {
    const [ state, setState ] = useState(initialState);

    useEffect(() => {
        initialTodos();
    }, []);

    const initialTodos = async () => {
        try {
            setState({ ...state, isLoading: true });
            const data = await fetchTodoAPI();
            setState({ ...state, todos: data, isLoading: false });
        } catch {
            setState({ ...state, isLoading: false });
        }
    };

    const editTodoInState = (data) => {
        setState({ ...state, todos: state.todos.map(todo => todo.id === data.id ? data : todo), isLoading: false });
    }

    const toggleTodo = async (id) => {
        try {
            setState({ ...state, isLoading: true });
            const todo = state.todos.find((todo) => todo.id === id);
            const body = { ...todo, completed: !todo.completed };
            const data = await editTodoAPI(body);
            editTodoInState(data);
        } catch {
            setState({ ...state, isLoading: false });
        }
    }

    const deleteTodo = async (id) => {
        try {
            setState({ ...state, isLoading: true });
            const status = await deleteTodoAPI(id);
            if (status === 200) {
                setState({ ...state, todos: state.todos.filter((todo) => todo.id !== id), isLoading: false });
            }
        } catch {
            setState({ ...state, isLoading: false });
        }
    }

    const createTodo = async (title) => {
        try {
            setState({ ...state, isLoading: true });
            const data = await createTodoAPI(title);
            setState({ ...state, todos: [ ...state.todos, data ], isLoading: false });
        } catch {
            setState({ ...state, isLoading: false });
        }
    }

    const editTodo = async (id, title) => {
        try {
            setState({ ...state, isLoading: true });
            const todo = state.todos.find((todo) => todo.id === id);
            const body = {...todo, title};
            const data = await editTodoAPI(body);
            editTodoInState(data);
        } catch {
            setState({ ...state, isLoading: false });
        }
    }

    const switchTheme = () => {
        setState({ ...state, darkTheme: !state.darkTheme });
    };

    const switchLang = ({ target: { value } }) => {
        setState({ ...state, locale: value });
    };

    return (
        <ThemeContext.Provider value={{ darkTheme: state.darkTheme, switchTheme }}>
            <IntlProvider messages={messages[state.locale]} locale={state.locale} defaultLocale={LOCALES.ENGLISH}>
                <div className="wrapper">
                    { state.isLoading && <Loader/> }
                    <Header currentLang={state.locale} onChangeLocale={switchLang}/>
                    <Main
                        todos={state.todos}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                        createTodo={createTodo}
                        editTodo={editTodo}
                    />
                    <Footer/>
                </div>
            </IntlProvider>
        </ThemeContext.Provider>
    );
}

export default App;
