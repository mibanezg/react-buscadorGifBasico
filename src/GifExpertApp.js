import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    //const categories = ['One Punch','Samurai X','Dragon Ball']
    const [categories, setCategories] = useState(['One Punch']);
    /*
    const handleAdd=()=>{
        setCategories([...categories,'HunterXhunter']);
        
    }
    */
    return (
        <>
            <h2>Buscador Simple</h2>
            <hr/>
            <AddCategory setCategories={setCategories}/>
            <ol>
                {
                    categories.map(category=>
                        <GifGrid 
                            key={category}
                            category={category}
                        />
                    )
                }
            </ol>
        </>
    )
}
