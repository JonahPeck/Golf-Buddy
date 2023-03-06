import React from 'react';
function SearchGolfCourses({ searchTerm, onChangeSearch }) {
    function handleChange(event) {
        onChangeSearch(event.target.value);
    }
    return (
        <div className="search-input">
            <input
                type="text"
                placeholder="Search for a Course..."
                value={searchTerm}
                onChange={handleChange}
            />
        </div>
    );
}
export default SearchGolfCourses;