import React from 'react';
import NotTodos from '../NotTodos';
import { IntlProvider } from "react-intl";
import { messages } from "i18n/messages";
import { LOCALES } from "i18n/locales";

describe('should render NotTodos component', () => {
    it('should contain one div with .not-todos class', () => {
        const component = mount(<NotTodos/>, {
            wrappingComponent: IntlProvider,
            wrappingComponentProps: {
                messages: messages[LOCALES.ENGLISH],
                locale: LOCALES.ENGLISH,
                defaultLocale: LOCALES.ENGLISH,
            },
        });
        const wrapper = component.find('div.not-todos');
        expect(wrapper).toHaveLength(1);
    });

    it('should contain text for not todos', () => {
        const component = mount(<NotTodos/>, {
            wrappingComponent: IntlProvider,
            wrappingComponentProps: {
                messages: messages[LOCALES.ENGLISH],
                locale: LOCALES.ENGLISH,
                defaultLocale: LOCALES.ENGLISH,
            },
        });
        const messageId = component.find('div.not-todos').getElement().props.children.props.id;
        expect(messageId).toBe('not_todos');
    });

    it('should render NotTodos component snapshot', () => {
        const component = shallow(<NotTodos/>);
        expect(component).toMatchSnapshot();
    });
});
