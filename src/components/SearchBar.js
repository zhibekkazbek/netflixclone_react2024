import React from "react";

const SearchBar = ({ value, onChange }) => (
    <input
        type="text"
        placeholder="Search movies..."
        value={value}
        onChange={onChange}
    />
);

export default SearchBar;
