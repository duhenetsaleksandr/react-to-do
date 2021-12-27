import React from 'react';
import { IntlProvider } from 'react-intl';
import { act } from "@testing-library/react";
import { messages } from "i18n/messages";
import { LOCALES } from "i18n/locales";
import InputField from '../InputField';

const props = {
    editedTodo: {},
    flagCreated: true,
    onBlurInput: jest.fn(),
};

describe('should render InputField component', () => {
    let component;
    beforeEach(() => {
        component = mount(<InputField {...props} />, {
            wrappingComponent: IntlProvider,
            wrappingComponentProps: {
                messages: messages[LOCALES.ENGLISH],
                locale: LOCALES.ENGLISH,
                defaultLocale: LOCALES.ENGLISH,
            },
        });
    });

    it('should call handlerBlurInput props after keydown Enter', () => {
        act(() => {
            component.find('input').getElement().props.onChange({ target: { value: 'example test' } });
        });
        component.update();
        act(() => {
            component.find('input').getElement().props.onKeyDown({ code: 'Enter' });
        });
        component.update();
        expect(props.onBlurInput).toHaveBeenCalledWith('example test');
    });

    it('should not call handlerBlurInput props after keydown not Enter', () => {
        act(() => {
            component.find('input').getElement().props.onChange({ target: { value: 'example test' } });
        });
        component.update();
        act(() => {
            component.find('input').getElement().props.onKeyDown({ code: 'Escape' });
        });
        component.update();
        expect(props.onBlurInput).not.toHaveBeenCalled();
    });

    it('should change input value in state with onChange event', () => {
        act(() => {
            component.find('input[type="text"]').getElement().props.onChange({ target: { value: 1 } });
        });
        component.update();
        expect(component.find('input[type="text"]').getElement().props.value).toBe(1);
    });

    it('should change input value in state after update props', () => {
        act(() => {
            component.setProps({
                editedTodo: {
                    title: 'For test'
                },
                flagCreated: true
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
