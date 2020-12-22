import React from 'react';

const SearchBar =  () =>(
    <div className="back-search">
        <div className="search">
                <input placeholder="Buscar" spellCheck="false" type="search" />
                <button className="icon"><i className="fas fa-search"></i></button>
        </div>
    </div>
)

export default SearchBar;