import React from 'react';
import SocialLink from '../SocialLink';
import { telegramURL } from 'constants/socialURL';

const props = {
    link: telegramURL,
    title: 'telegram',
    children: <div className="test-class">TestProps</div>,
};

describe('should render SocialLink component', () => {
    let component;
    beforeEach(() => {
        component = mount(<SocialLink {...props} />);
    });

    it('should contain one tag anchor', () => {
        const link = component.find('a');
        expect(link).toHaveLength(1);
    });

    it('should contain link props with correct value', () => {
        const linkProps = component.find('a').getElement().props.href;
        expect(linkProps).toBe(props.link);
    });

    it('should contain title props with correct value', () => {
        const titleProps = component.find('a').getElement().props.title;
        expect(titleProps).toBe(props.title);
    });

    it('should contain children props with correct value', () => {
        const childrenProps = component.find('a').getElement().props.children;
        expect(childrenProps).toEqual(props.children);
    });

    it('should target attr with equal _blank', () => {
        const target = component.find('a').getElement().props.target;
        expect(target).toBe('_blank');
    });

    it('should render SocialLink component snapshot with all props', () => {
        const component = shallow(<SocialLink {...props} />);
        expect(component).toMatchSnapshot();
    });
});
