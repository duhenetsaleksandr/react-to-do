import React from 'react';
import CreateToDo from '../CreateToDo';
import { act } from "@testing-library/react";

const props = {
    editStateInfo: {
        status: false,
        todo: {},
    },
    createTodo: jest.fn(),
    editTodo: jest.fn(),
    clearEditMode: jest.fn(),
};

describe('should render CreateToDo component', () => {
    describe('with default props', () => {
        let component;
        beforeEach(() => {
            component = mount(<CreateToDo {...props} />);
        });

        it('should contain one form', () => {
            const form = component.find('form[name="create-to-do-form"]');
            expect(form).toHaveLength(1);
        });

        it('should contain component InputField', () => {
            const inputField = component.find('InputField');
            expect(inputField).toHaveLength(1);
        });

        it('should contain submit button with text Add task', () => {
            const button = component.find('button[type="submit"]');
            expect(button).toHaveLength(1);
            expect(button.getElement().props.children).toBe('Add task');
        });

        it('should call clearEditMode props function', () => {
            const form = component.find('form[name="create-to-do-form"]');
            act(() => {
                form.getElement().props.onSubmit({ preventDefault: jest.fn(), target: {firstElementChild: {value: ''}} });
            });
            expect(props.clearEditMode).toHaveBeenCalledTimes(1);
        });

        it('should call createTodo props function', () => {
            const form = component.find('form[name="create-to-do-form"]');
            act(() => {
                form.getElement().props.onSubmit({ preventDefault: jest.fn(), target: {firstElementChild: {value: 'example'}} });
            });
            expect(props.createTodo).toHaveBeenCalledWith('example');
        });
    });

    describe('with custom props', () => {
        it('should render button with text Edit task when edit status true', () => {
            const component = mount(<CreateToDo {...props} editStateInfo={{status: true, todo: {}}} />);
            const button = component.find('button[type="submit"]');
            expect(button).toHaveLength(1);
            expect(button.getElement().props.children).toBe('Edit task');
        });

        it('should call editTodo props function', () => {
            const component = mount(<CreateToDo {...props} editStateInfo={{status: true, todo: {id: 1}}} />);
            const form = component.find('form[name="create-to-do-form"]');
            act(() => {
                form.getElement().props.onSubmit({ preventDefault: jest.fn(), target: {firstElementChild: {value: 'example'}} });
            });
            expect(props.editTodo).toHaveBeenCalledWith(1, 'example');
        });

        it('should render CreateToDo component snapshot', () => {
            const component = shallow(<CreateToDo {...props} />);
            expect(component).toMatchSnapshot();
        });
    });
});
