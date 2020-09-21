import { getGifs } from '../../helpers/getGifs';

describe('Pruebas con fecth Gifs', () => {
    
    test('Debe de traer 10 elementos', async() => {
        const gifs = await getGifs('Iroman');
        expect(gifs.length).toBe(10);
    })

    test('Debe de traer 10 elementos sin argumentos', async() => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    })
    
})
