import React  ,  { useState } from "react";

const SearchBar = ({onSearch}) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
      };

    const handleSubmit = (e) => {
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