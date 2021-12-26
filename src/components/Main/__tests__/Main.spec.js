import React from 'react';
import { act } from '@testing-library/react';
import Main from '../Main';
import { IntlProvider } from 'react-intl';
import { messages } from 'i18n/messages';
import { LOCALES } from 'i18n/locales';

const todos = [
    {
        id: 1,
        title: 'create app',
        completed: false
    },
    {
        id: 2,
        title: 'create app one more time',
        completed: true
    }
];

const props = {
    todos,
    createTodo: jest.fn(),
    deleteTodo: jest.fn(),
    editTodo: jest.fn(),
    toggleTodo: jest.fn(),
};

const initialState = {
    editMode: {
        status: false,
        todo: {},
    },
};

describe('should render Main component', () => {
    let component;
    beforeEach(() => {
        component = mount(<Main {...props} />, {
            wrappingComponent: IntlProvider,
            wrappingComponentProps: {
                messages: messages[LOCALES.ENGLISH],
                locale: LOCALES.ENGLISH,
                defaultLocale: LOCALES.ENGLISH,
            },
        });
    });

    it('should contain tag main with class .main', () => {
        const main = component.find('main.main');
        expect(main).toHaveLength(1);
    });

    it('should contain div with class .container and .main__container', () => {
        const mainContainer = component.find('div.container.main__container');
        expect(mainContainer).toHaveLength(1);
    });

    it('should contain div with class .todos-wrapper', () => {
        const todosWrapper = component.find('div.todos-wrapper');
        expect(todosWrapper).toHaveLength(1);
    });

    it('should contain CreateToDo component', () => {
        const createTodo = component.find('CreateToDo');
        expect(createTodo).toHaveLength(1);
    });

    it('should contain ToDoList component', () => {
        const toDoList = component.find('ToDoList');
        expect(toDoList).toHaveLength(1);
    });

    it('should props editStateInfo in CreateToDo component equal initial state editMode', () => {
        const createTodo = component.find('CreateToDo');
        expect(createTodo.getElement().props.editStateInfo).toEqual(initialState.editMode);
    });

    it('should props editStateInfo in CreateToDo component equal state editMode true', () => {
        act(() => {
            component.find('ToDoList').getElement().props.onEdit(todos[0]);
        });
        component.update();
        expect(component.find('CreateToDo').getElement().props.editStateInfo).toEqual({ status: true, todo: todos[0] });
    });

    it('should reset state to initialState', () => {
        act(() => {
            component.find('ToDoList').getElement().props.onEdit(todos[0]);
        });
        component.update();
        expect(component.find('CreateToDo').getElement().props.editStateInfo).toEqual({ status: true, todo: todos[0] });
        act(() => {
            component.find('CreateToDo').getElement().props.clearEditMode();
        });
        component.update();
        expect(component.find('CreateToDo').getElement().props.editStateInfo).toEqual(initialState.editMode);
    });

    it('should render Main component snapshot', () => {
        const component = shallow(<Main {...props} />);
        expect(component).toMatchSnapshot();
    });
});
