import React from 'react';
import Logo from '../Logo';
import logo from 'images/logo.svg';

describe('should render Logo component', () => {
    let component;
    beforeEach(() => {
        component = mount(<Logo/>);
    });

    it('should contain div.logo wrapper', () => {
        const wrapper = component.find('.logo');
        expect(wrapper).toHaveLength(1);
    });

    it('should contain img', () => {
        const image = component.find('svg');
        expect(image).toHaveLength(1);
    });

    it('should contain correct src img', () => {
        const image = component.find('svg');
        expect(image.getElement().props.children).toEqual(logo);
    });

    it('should render Logo component snapshot', () => {
        const component = shallow(<Logo/>);
        expect(component).toMatchSnapshot();
    });
});
