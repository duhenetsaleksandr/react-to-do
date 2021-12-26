import React from 'react';
import InputField from '../InputField';
import { act } from "@testing-library/react";z

const props = {
    editTodo: {},
    onCreated: true
};

describe('should render InputField component', () => {
    it('should change input value in state with onChange event', () => {
        const component = mount(<InputField {...props} />);
        act(() => {
            component.find('input[type="text"]').getElement().props.onChange({ target: { value: 1 } });
        });
        component.update();
        expect(component.find('input[type="text"]').getElement().props.value).toBe(1);
    });

    it('should change input value in state after update props', () => {
        const component = mount(<InputField {...props} />);
        act(() => {
            component.setProps({
                editTodo: {
                    title: 'For test'
                },
                onCreated: true
            });
        });
        component.update();
        expect(component.find('input[type="text"]').getElement().props.value).toBe('For test');
    });

    it('should render InputField component snapshot', () => {
        const component = shallow(<InputField {...props} />);
        expect(component).toMatchSnapshot();
    });
});
