import React from 'react';
import axios from 'axios';
import { act } from "@testing-library/react";
import App from '../App';

jest.mock('axios');

const todos = [
    {
        userId: 1,
        id: 1,
        title: 'delectus aut autem',
        completed: false
    },
    {
        userId: 1,
        id: 2,
        title: 'quis ut nam facilis et officia qui',
        completed: false
    },
    {
        userId: 1,
        id: 3,
        title: 'fugiat veniam minus',
        completed: false
    },
];

const newTodo = {
    id: 201,
    completed: false,
    title: 'new create todo',
};

describe('should render App component', () => {
    describe('should success fetch data from API', () => {
        let component;
        beforeEach(async () => {
            axios.get.mockImplementation(() => Promise.resolve({ data: todos }));

            await act(async () => {
                component = mount(<App/>);
            });
            component.update();
        });

        it('should success fetch data after mounted App component and set data in state', async () => {
            expect(axios.get).toHaveBeenCalledTimes(1);
            expect(component.find('Main').getElement().props.todos).toEqual(todos);
        });

        it('should success toggle completed status', async () => {
            axios.put.mockImplementation((url, body) => Promise.resolve({ data: body }));

            await act(async () => {
                component.find('Main').getElement().props.toggleTodo(todos[0].id);
            });
            component.update();
            const changeTodos = [...todos];
            changeTodos[0].completed = !changeTodos[0].completed;
            expect(component.find('Main').getElement().props.todos).toEqual(changeTodos);
        });

        it('should fail toggle completed status', async () => {
            axios.put.mockImplementation(() => Promise.reject());

            await act(async () => {
                component.find('Main').getElement().props.toggleTodo(todos[0].id);
            });
            component.update();
            expect(component.find('Main').getElement().props.todos).toEqual(todos);
        });

        it('should success delete todo', async () => {
            axios.delete.mockImplementation(() => Promise.resolve({ status: 200 }));

            await act(async () => {
                component.find('Main').getElement().props.deleteTodo(todos[0].id);
            });
            component.update();
            expect(component.find('Main').getElement().props.todos).toHaveLength(todos.length - 1);
        });

        it('should fail delete todo', async () => {
            axios.delete.mockImplementation(() => Promise.reject());

            await act(async () => {
                component.find('Main').getElement().props.deleteTodo(todos[0].id);
            });
            component.update();
            expect(component.find('Main').getElement().props.todos).toHaveLength(todos.length);
        });

        it('should fail delete todo if response status not equal 200', async () => {
            axios.delete.mockImplementation(() => Promise.resolve({ status: 404 }));

            await act(async () => {
                component.find('Main').getElement().props.deleteTodo(todos[0].id);
            });
            component.update();
            expect(component.find('Main').getElement().props.todos).toHaveLength(todos.length);
        });

        it('should success edit todo', async () => {
            axios.put.mockImplementation((url, body) => Promise.resolve({ data: { ...body } }));

            await act(async () => {
                component.find('Main').getElement().props.editTodo(todos[0].id, todos[0].title + ' {{edited}}');
            });
            component.update();
            const changeTodos = [...todos];
            changeTodos[0].title = changeTodos[0].title + ' {{edited}}';
            expect(component.find('Main').getElement().props.todos).toEqual(changeTodos);
        });

        it('should fail edit todo', async () => {
            axios.put.mockImplementation(() => Promise.reject());

            await act(async () => {
                component.find('Main').getElement().props.editTodo(todos[0].id, todos[0].title + ' {{edited}}');
            });
            component.update();
            expect(component.find('Main').getElement().props.todos).toEqual(todos);
        });

        it('should success create new todo', async () => {
            axios.post.mockImplementation((url, body) => Promise.resolve({ data: { ...body, id: newTodo.id } }));

            await act(async () => {
                component.find('Main').getElement().props.createTodo(newTodo.title);
            });
            component.update();
            expect(component.find('Main').getElement().props.todos).toEqual([...todos, newTodo]);
        });


        it('should fail create new todo', async () => {
            axios.post.mockImplementation(() => Promise.reject());

            await act(async () => {
                component.find('Main').getElement().props.createTodo(newTodo.title);
            });
            component.update();
            expect(component.find('Main').getElement().props.todos).toEqual(todos);
        });
    });

    describe('should fail fetch data from API', () => {
        it('should fail fetch data after mounted App component and set empty array in state', async () => {
            axios.get.mockImplementation(() => Promise.reject());
            let component;
            await act(async () => {
                component = mount(<App/>);
            });
            component.update();
            expect(axios.get).toHaveBeenCalledTimes(1);
            expect(component.find('Main').getElement().props.todos).toEqual([]);
        });
    });

    describe('App component snapshot', () => {
        it('should render App component snapshot if fetch data from API success', async () => {
            axios.get.mockImplementation(() => Promise.resolve({ data: todos }));

            let component;
            await act(async () => {
                component = shallow(<App/>);
            });
            component.update();
            expect(component).toMatchSnapshot();
        });

        it('should render App component snapshot if fetch data from API fail', async () => {
            axios.get.mockImplementation(() => Promise.reject());

            let component;
            await act(async () => {
                component = shallow(<App/>);
            });
            component.update();
            expect(component).toMatchSnapshot();
        });
    });

    describe('On ThemeContext', () => {
        let component;

        beforeEach(async () => {
            await act(async () => {
                component = shallow(<App/>);
            });
            component.update();
        });

        it('should contain context provider', async () => {
            const provider = component.find('ContextProvider');
            expect(provider).toHaveLength(1);
        });

        it('should change theme', async () => {
            const provider = component.find('ContextProvider');
            const theme = provider.getElement().props.value.darkTheme;
            act(() => {
                provider.getElement().props.value.switchTheme();
            });
            component.update();
            expect(component.find('ContextProvider').getElement().props.value.darkTheme).toBe(!theme);
        });
    });
});
