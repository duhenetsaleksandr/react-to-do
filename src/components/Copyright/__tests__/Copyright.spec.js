import React from 'react';
import Copyright from '../Copyright';
import {IntlProvider} from "react-intl";
import {messages} from "i18n/messages";
import {LOCALES} from "i18n/locales";

describe('should render Copyright component', () => {
    let component;
    beforeEach(() => {
        component = mount(<Copyright/>, {
            wrappingComponent: IntlProvider,
            wrappingComponentProps: {
                messages: messages[LOCALES.ENGLISH],
                locale: LOCALES.ENGLISH,
                defaultLocale: LOCALES.ENGLISH,
            },
        });
    });

    it('should contain one div', () => {
        expect(component.find('div')).toHaveLength(1);
    });

    it('should contain text "copyright"', () => {
        const element = component.find('div');
        expect(element.getElement().props.children.props.id).toBe('copyright');
    });

    it('should render Copyright component snapshot', () => {
        const component = shallow(<Copyright/>);
        expect(component).toMatchSnapshot();
    });
});
