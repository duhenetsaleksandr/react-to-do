import React from 'react';
import ToDoList from '../ToDoList';
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
    onEdit: jest.fn(),
    toggleTodo: jest.fn(),
    deleteTodo: jest.fn(),
};

describe('should render ToDoList component', () => {
    describe('with default props', () => {
        let component;
        beforeEach(() => {
            component = mount(<ToDoList {...props} />);
        });

        it('should contain ToDoListItem component', () => {
            const toDoListItem = component.find('ToDoListItem');
            expect(toDoListItem).toHaveLength(todos.length);
        });

        it('should first ToDoListItem component contain all props', () => {
            const toDoListItem = component.find('ToDoListItem').at(0);
            const allProps = toDoListItem.getElement().props;
            expect(allProps.todo).toEqual(todos[0]);
            expect(allProps.onEdit).toEqual(props.onEdit);
            expect(allProps.toggleTodo).toEqual(props.toggleTodo);
            expect(allProps.deleteTodo).toEqual(props.deleteTodo);
        });

        it('should render ToDoList component snapshot with todos', () => {
            const component = shallow(<ToDoList {...props} />);
            expect(component).toMatchSnapshot();
        });
    });

    describe('with custom props', () => {
        it('should contain NotTodos component if todos array is empty', () => {
            const component = mount(<ToDoList {...props} todos={[]} />, {
                wrappingComponent: IntlProvider,
                wrappingComponentProps: {
                    messages: messages[LOCALES.ENGLISH],
                    locale: LOCALES.ENGLISH,
                    defaultLocale: LOCALES.ENGLISH,
                },
            });
            const notTodos = component.find('NotTodos');
            expect(notTodos).toHaveLength(1);
        });

        it('should render ToDoList component snapshot without todos', () => {
            const component = shallow(<ToDoList {...props} todos={[]} />);
            expect(component).toMatchSnapshot();
        });
    });
});
