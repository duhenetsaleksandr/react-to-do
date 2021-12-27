import React from 'react';
import Social from '../Social';
import { instagramURL, telegramURL } from "constants/socialURL";

describe('should render Social component', () => {
    let component;
    beforeEach(() => {
        component = mount(<Social/>);
    });

    it('should contain wrapper with .social-icons class', () => {
        const wrapper = component.find('div.social-icons');
        expect(wrapper).toHaveLength(1);
    });

    it('should contain two SocialLink component', () => {
        const socialLink = component.find('SocialLink');
        expect(socialLink).toHaveLength(2);
    });

    it('should first SocialLink component contain telegram', () => {
        const socialLink = component.find('SocialLink').at(0);
        expect(socialLink.getElement().props.link).toBe(telegramURL);
        expect(socialLink.getElement().props.title).toBe('telegram');
    });

    it('should second SocialLink component contain instagram', () => {
        const socialLink = component.find('SocialLink').at(1);
        expect(socialLink.getElement().props.link).toBe(instagramURL);
        expect(socialLink.getElement().props.title).toBe('instagram');
    });

    it('should render Social component snapshot', () => {
        const component = shallow(<Social/>);
        expect(component).toMatchSnapshot();
    });
});
