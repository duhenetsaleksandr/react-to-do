import React from 'react';
import Footer from '../Footer';
import ThemeContext from 'Context/ThemeContext';

describe('should render Footer component', () => {
    let component;
    beforeEach(() => {
        component = mount(<Footer/>);
    });

    it('should contain tag footer with class .footer', () => {
        const footer = component.find('footer.footer');
        expect(footer).toHaveLength(1);
    });

    it('should contain div with class .container and .footer__container', () => {
        const footer = component.find('div.container.footer__container');
        expect(footer).toHaveLength(1);
    });

    it('should contain component Copyright', () => {
        const copyright = component.find('Copyright');
        expect(copyright).toHaveLength(1);
    });

    it('should contain component Copyright', () => {
        const social = component.find('Social');
        expect(social).toHaveLength(1);
    });

    it('should render Footer with light theme using context', () => {
        const component = mount(<Footer/>, {
            wrappingComponent: ThemeContext.Provider,
            wrappingComponentProps: {
                value: { darkTheme: false },
            },
        });

        const footer = component.find('footer.footer.light');
        expect(footer).toHaveLength(1);
    });

    it('should render Footer with dark theme using context', () => {
        const component = mount(<Footer/>, {
            wrappingComponent: ThemeContext.Provider,
            wrappingComponentProps: {
                value: { darkTheme: true },
            },
        });

        const footer = component.find('footer.footer.dark');
        expect(footer).toHaveLength(1);
    });

    it('should render Footer component snapshot', () => {
        const component = shallow(<Footer/>);
        expect(component).toMatchSnapshot();
    });
});
