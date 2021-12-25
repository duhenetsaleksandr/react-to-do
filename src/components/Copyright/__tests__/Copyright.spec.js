import React from 'react';
import Copyright from '../Copyright';

describe('should render Copyright component', () => {
    let component;
    beforeEach(() => {
        component = mount(<Copyright/>);
    });

    it('should contain one div', () => {
        expect(component.find('div')).toHaveLength(1);
    });

    it('should contain text "copyright"', () => {
        const element = component.find('div');
        const text = element.getElement().props.children;
        expect(text).toMatch(/copyright/i);
    });

    it('should render Copyright component snapshot', () => {
        const component = shallow(<Copyright/>);
        expect(component).toMatchSnapshot();
    });
});
