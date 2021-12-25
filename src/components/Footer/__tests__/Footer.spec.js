import React from 'react';
import Footer from '../Footer';

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

    it('should render Footer component snapshot', () => {
        const component = shallow(<Footer/>);
        expect(component).toMatchSnapshot();
    });
});
