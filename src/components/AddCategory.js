import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange= (e)=>{
        setInputValue(e.target.value);
        console.log('handleInputChange llamando');
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log('handleSubmit llamando' ,inputValue);
    
        if(inputValue.trim().length>2){
            setCategories(cats=>[inputValue,...cats]);
            setInputValue('');
        }    
    }
    return (
        <form onSubmit={handleSubmit}>
            <p>{inputValue}</p>
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}
//Para hacer requerido el paso de valores
AddCategory.propTypes={
    setCategories: PropTypes.func.isRequired
}
