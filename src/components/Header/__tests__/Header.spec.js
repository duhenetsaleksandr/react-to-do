import React from 'react';
import Header from '../Header';
import ThemeContext from 'Context/ThemeContext';

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

    it('should render Header with light theme using context', () => {
        const component = mount(<Header/>, {
            wrappingComponent: ThemeContext.Provider,
            wrappingComponentProps: {
                value: { darkTheme: false },
            },
        });

        const footer = component.find('header.header.light');
        expect(footer).toHaveLength(1);
    });

    it('should render Header with dark theme using context', () => {
        const component = mount(<Header/>, {
            wrappingComponent: ThemeContext.Provider,
            wrappingComponentProps: {
                value: { darkTheme: true },
            },
        });

        const footer = component.find('header.header.dark');
        expect(footer).toHaveLength(1);
    });

    it('should render Header component snapshot', () => {
        const component = shallow(<Header/>);
        expect(component).toMatchSnapshot();
    });
});
