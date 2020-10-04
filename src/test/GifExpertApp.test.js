import React from 'react';
import '@testing-library/jest-dom';
import { GifExpertApp } from '../GifExpertApp';
import { shallow } from 'enzyme';

describe('PRueba con GifExpertApp', () => {
    test('debe hacer match con snapshot', () => {
        const wrapper = shallow(<GifExpertApp/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar una lista de categorias', () => {
        const categories = ['iron man', 'xmen'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    });
    
})
