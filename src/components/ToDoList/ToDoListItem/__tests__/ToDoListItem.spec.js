import React from 'react';
import { act } from '@testing-library/react';
import ToDoListItem from '../ToDoListItem';

const props = {
    todo: {
        id: 1,
        title: 'create app',
        completed: false
    },
    deleteTodo: jest.fn(),
    onEdit: jest.fn(),
    toggleTodo: jest.fn(),
};

const checkedTodo = {
    id: 1,
    title: 'create app',
    completed: true
};

describe('should render ToDoListItem component', () => {
    describe('with default props', () => {
        let component;
        beforeEach(() => {
            component = mount(<ToDoListItem {...props} />);
        });

        it('should contain tag li', () => {
            const listItem = component.find('li');
            expect(listItem).toHaveLength(1);
            expect(listItem.getElement().props.className).not.toMatch(/checked/);
        });

        it('should contain input checkbox', () => {
            const input = component.find('input[type="checkbox"]');
            expect(input).toHaveLength(1);
        });

        it('should contain title', () => {
            const title = component.find('div.title');
            expect(title).toHaveLength(1);
            expect(title.getElement().props.children).toBe(props.todo.title);
        });

        it('should contain two buttons', () => {
            const button = component.find('button');
            expect(button).toHaveLength(2);
            expect(button.at(0).getElement().props.className).toBe('edit');
            expect(button.at(1).getElement().props.className).toBe('remove');
        });

        it('should call toggleTodo if input checkbox change', () => {
            const input = component.find('input[type="checkbox"]');
            act(()=> {
                input.getElement().props.onChange();
            })
            expect(props.toggleTodo).toHaveBeenCalledWith(props.todo.id);
        });

        it('should call onEdit if edit button clicked', () => {
            const button = component.find('button.edit');
            act(()=> {
                button.getElement().props.onClick();
            })
            expect(props.onEdit).toHaveBeenCalledWith(props.todo);
        });

        it('should call deleteTodo if remove button clicked', () => {
            const button = component.find('button.remove');
            act(()=> {
                button.getElement().props.onClick();
            })
            expect(props.deleteTodo).toHaveBeenCalledWith(props.todo.id);
        });

        it('should render ToDoListItem component snapshot', () => {
            const component = shallow(<ToDoListItem {...props} />);
            expect(component).toMatchSnapshot();
        });
    });

    describe('with custom props', () => {
        it('should li contain class checked if todo is completed', () => {
            const component = mount(<ToDoListItem {...props} todo={checkedTodo} />);
            const listItem = component.find('li');
            expect(listItem.getElement().props.className).toMatch(/checked/);
        });
    });
});
