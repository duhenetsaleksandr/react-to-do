import React from 'react';
import NotTodos from '../NotTodos';

describe('should render NotTodos component', () => {
    it('should contain one div with .not-todos class', () => {
        const component = mount(<NotTodos/>);
        const wrapper = component.find('div.not-todos');
        expect(wrapper).toHaveLength(1);
    });

    it('should contain text for not todos', () => {
        const component = mount(<NotTodos/>);
        const text = component.find('div.not-todos').getElement().props.children;
        expect(text).toBe('Not found todos!');
    });

    it('should render NotTodos component snapshot', () => {
        const component = shallow(<NotTodos/>);
        expect(component).toMatchSnapshot();
    });
});
