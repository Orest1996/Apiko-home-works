import React from 'react';
import '../main.css';

export const SearchInput = ({changeHandler}) => {

    return (
        <label>
            Відфільтрувати по title
            <input type="search" onChange={changeHandler}/>
        </label>

    )
};
