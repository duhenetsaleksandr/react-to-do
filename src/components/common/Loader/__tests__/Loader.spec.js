import React from 'react';
import Loader from '../Loader';

describe('should render Loader component', () => {
    let component;
    beforeEach(() => {
        component = mount(<Loader/>);
    });

    it('should contain .loader wrapper', () => {
        const wrapper = component.find('.loader');
        expect(wrapper).toHaveLength(1);
    });

    it('should contain div.lds-dual-ring', () => {
        const wrapper = component.find('.lds-dual-ring');
        expect(wrapper).toHaveLength(1);
    });

    it('should render Loader component snapshot', () => {
        const component = shallow(<Loader/>);
        expect(component).toMatchSnapshot();
    });
});
