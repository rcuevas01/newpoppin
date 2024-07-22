
import React, {useState} from 'react'

interface SearchBarProps {
    onSearch: (term: string) => void
}

const SearchBar = ({onSearch}: SearchBarProps) => {
    const [searchTerm, setSearchTerm] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        onSearch(e.target.value);
      };

    return( <input 
        type="text"
        placeholder="Search parties..."
        value={searchTerm}
        onChange={handleChange}
        className='search-bar'></input>)
}

export default SearchBar;