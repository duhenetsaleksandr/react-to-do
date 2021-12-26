import React from 'react';
import CreateToDo from '../CreateToDo';
import { act } from "@testing-library/react";
import { IntlProvider } from "react-intl";
import { messages } from "i18n/messages";
import { LOCALES } from "i18n/locales";

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
            component = mount(<CreateToDo {...props} />, {
                wrappingComponent: IntlProvider,
                wrappingComponentProps: {
                    messages: messages[LOCALES.ENGLISH],
                    locale: LOCALES.ENGLISH,
                    defaultLocale: LOCALES.ENGLISH,
                },
            });
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
            expect(button.getElement().props.children.props.id).toBe('button_add');
        });

        it('should call clearEditMode props function', () => {
            const form = component.find('form[name="create-to-do-form"]');
            act(() => {
                form.getElement().props.onSubmit({ preventDefault: jest.fn() });
            });
            expect(props.clearEditMode).toHaveBeenCalledTimes(1);
        });

        it('should call createTodo props function', () => {
            act(() => {
                component.find('InputField').getElement().props.handlerBlurInput('example');
            });
            component.update();
            act(() => {
                component.find('form[name="create-to-do-form"]').getElement().props.onSubmit({ preventDefault: jest.fn() });
            });
            component.update();
            expect(props.createTodo).toHaveBeenCalledWith('example');
        });
    });

    describe('with custom props', () => {
        it('should render button with text Edit task when edit status true', () => {
            const component = mount(<CreateToDo {...props} editStateInfo={{status: true, todo: {}}} />, {
                wrappingComponent: IntlProvider,
                wrappingComponentProps: {
                    messages: messages[LOCALES.ENGLISH],
                    locale: LOCALES.ENGLISH,
                    defaultLocale: LOCALES.ENGLISH,
                },
            });
            const button = component.find('button[type="submit"]');
            expect(button).toHaveLength(1);
            expect(button.getElement().props.children.props.id).toBe('button_edit');
        });

        it('should call editTodo props function', () => {
            const component = mount(<CreateToDo {...props} editStateInfo={{status: true, todo: {id: 1}}} />, {
                wrappingComponent: IntlProvider,
                wrappingComponentProps: {
                    messages: messages[LOCALES.ENGLISH],
                    locale: LOCALES.ENGLISH,
                    defaultLocale: LOCALES.ENGLISH,
                },
            });
            act(() => {
                component.find('InputField').getElement().props.handlerBlurInput('example');
            });
            component.update();
            act(() => {
                component.find('form[name="create-to-do-form"]').getElement().props.onSubmit({ preventDefault: jest.fn() });
            });
            component.update();
            expect(props.editTodo).toHaveBeenCalledWith(1, 'example');
        });

        it('should render CreateToDo component snapshot', () => {
            const component = shallow(<CreateToDo {...props} />);
            expect(component).toMatchSnapshot();
        });
    });
});
