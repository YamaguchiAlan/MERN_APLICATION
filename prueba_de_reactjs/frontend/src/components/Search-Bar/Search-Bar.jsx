import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'

const SearchBar =  () => {
    const [searchValue, setSearchValue] = useState("")
    const history = useHistory()

    const inputOnChange = (e) => {
        setSearchValue(e.target.value)
    }

    const submitSearch = (e) => {
        e.preventDefault()
        history.push(`/search/${searchValue}`)
    }

    return(
        <form className="search" onSubmit={submitSearch}>
                <input placeholder="Buscar" spellCheck="false" type="search" onChange={inputOnChange}/>
                <button className="icon" type={'submit'}><i className="fas fa-search"></i></button>
        </form>
    )
}

export default SearchBar;