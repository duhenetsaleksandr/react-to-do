import React from 'react';
import InputField from '../InputField';
import { act } from "@testing-library/react";
import { IntlProvider } from 'react-intl';
import { messages } from "i18n/messages";
import { LOCALES } from "i18n/locales";

const props = {
    editTodo: {},
    onCreated: true
};

describe('should render InputField component', () => {
    it('should change input value in state with onChange event', () => {
        const component = mount(<InputField {...props} />, {
            wrappingComponent: IntlProvider,
            wrappingComponentProps: {
                messages: messages[LOCALES.ENGLISH],
                locale: LOCALES.ENGLISH,
                defaultLocale: LOCALES.ENGLISH,
            },
        });
        act(() => {
            component.find('input[type="text"]').getElement().props.onChange({ target: { value: 1 } });
        });
        component.update();
        expect(component.find('input[type="text"]').getElement().props.value).toBe(1);
    });

    it('should change input value in state after update props', () => {
        const component = mount(<InputField {...props} />, {
            wrappingComponent: IntlProvider,
            wrappingComponentProps: {
                messages: messages[LOCALES.ENGLISH],
                locale: LOCALES.ENGLISH,
                defaultLocale: LOCALES.ENGLISH,
            },
        });
        act(() => {
            component.setProps({
                editTodo: {
                    title: 'For test'
                },
                onCreated: true
            });
        });
        component.update();
        expect(component.find('input[type="text"]').getElement().props.value).toBe('For test');
    });

    it('should render InputField component snapshot', () => {
        const component = shallow(
            <IntlProvider messages={messages[LOCALES.ENGLISH]} locale={LOCALES.ENGLISH} defaultLocale={LOCALES.ENGLISH}>
                <InputField {...props} />
            </IntlProvider>
        );
        expect(component).toMatchSnapshot();
    });
});
