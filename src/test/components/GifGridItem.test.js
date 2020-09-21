import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas de <GifGridItem/>', () => {

    const title='Titulo';
    const url ='https://localhost';

    const wrapper = shallow(<GifGridItem title={title} url={url}/>);

    test('Debe mostrar texto correctamente ', () => {
        
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe tener parrafo con Title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    })

    test('Debe tener una imagen igual al url y props', () => {
        const img = wrapper.find('img');
        expect(img.props().src).toBe(url);
        expect(img.props().alt).toBe(title);
    });

    test('Debe tener animate fadeIn', async () => {
        const div = wrapper.find('div');
        const className = div.prop('className');
        //console.log(div.props().className);
       expect(className.includes('animate__fadeIn')).toBe(true);
    }); 
    
})
