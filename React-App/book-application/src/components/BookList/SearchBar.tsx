import React  ,  { useState } from "react";

interface  SearchBarProps{
    onSearch : (term : string) => void;
}


const SearchBar : React.FC<SearchBarProps>= ({onSearch}) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
      };

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSearch(searchTerm);
    };

    return(
        <form onSubmit={handleSubmit} className="search-bar">
            <input 
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Search Your Books"
            />
        <button type="submit">Search your Book</button>

        </form>

    )


    

    
};

export default SearchBar;