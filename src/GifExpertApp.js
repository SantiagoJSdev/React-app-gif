import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['yoda']);

    return (
        <>
            <h2>Aplicacion Gif</h2>
           
            <AddCategory setCategories={ setCategories } />
            <hr />

            <div className='container-app'>
                {
                    categories.map( category  => (
                        <GifGrid 
                            key={ category }
                            category={ category }
                        />
                    ))
                }
            </div>

        </>
    )
}
