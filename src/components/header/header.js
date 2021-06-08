import React from 'react';
import './headerStyle.css';

const Header = ({searchList}) => {

    return (
    <header className="title">

        <span className="Logo">
            Lists
        </span>

        {/* Search Bar */}
        <input 
            className="Header-search-bar" 
            placeholder="Search by ID" 
            onChange={(e) => searchList(e)} 
        />  

    </header>
    )
}

export default Header;