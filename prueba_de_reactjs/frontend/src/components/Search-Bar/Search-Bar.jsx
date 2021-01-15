import React from 'react';

const SearchBar =  () =>(
    <div className="search">
            <input placeholder="Buscar" spellCheck="false" type="search" />
            <button className="icon"><i className="fas fa-search"></i></button>
    </div>
)

export default SearchBar;