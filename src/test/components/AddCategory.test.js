import React from 'react'
import { shallow }  from 'enzyme';
import { AddCategory }  from '../../components/AddCategory';
import '@testing-library/jest-dom';

describe('Pruebas en el componente <AddCategory/>', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);

    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    });

    test('Debe de mostrarse correctamente', () => {
       expect(wrapper).toMatchSnapshot();
    });

    test('Debe de cambiar caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change',{target:{value}});
        expect(wrapper.find('p').text().trim()).toBe(value);
    });

    test('No debe de postear la información con submit', () => {
        wrapper.find('form').simulate('submit',{preventDefault(){}});
        expect(setCategories).not.toHaveBeenCalled();
    });

    test('Debe de llamar el setcategories y limpiar la caja de texto', () => {
        
        const value = 'Hola Mundo';
        const input = wrapper.find('input');
        const texto = input.prop('value');
        //1. simular el input change
        input.simulate('change',{target:{value}});
        //2. simular el submit
        wrapper.find('form').simulate('submit',{preventDefault(){}});
        //3. llamar el setCategories
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        //4. input value debe estar '' 
        expect(texto).toBe('');

    })
    
    
    
    
})
