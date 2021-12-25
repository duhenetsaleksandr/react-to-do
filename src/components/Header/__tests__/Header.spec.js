import React from 'react';
import Header from '../Header';

describe('should render Header component', () => {
    let component;
    beforeEach(() => {
        component = mount(<Header/>);
    });

    it('should contain tag header with class .header', () => {
        const header = component.find('header.header');
        expect(header).toHaveLength(1);
    });

    it('should contain div with class .container and .header__container', () => {
        const header = component.find('div.container.header__container');
        expect(header).toHaveLength(1);
    });

    it('should contain component Logo', () => {
        const logo = component.find('Logo');
        expect(logo).toHaveLength(1);
    });

    it('should render Header component snapshot', () => {
        const component = shallow(<Header/>);
        expect(component).toMatchSnapshot();
    });
});
