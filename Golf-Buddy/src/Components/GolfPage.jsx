import React, { useState, useEffect } from 'react';
import GolfCourseCollection from './GolfCourseCollection';
import ScoreCard from './ScoreCard';
import TheBasics from './TheBasics';
import SearchGolfCourses from './SearchGolfCourses';

function GolfPage() {


    useEffect(() => {
        fetch("http://localhost:3001/Golf_Courses")
            .then((response) => response.json())
            .then(setGolfCourse)
    }, []);

    function handleAddNewScoreCard(newScore) {
        setNewScoreCard(...newScoreCard, newScore);
    }

    const coursesToDisplay = golfCourse.filter((golf) =>
        golf.Club.toLowerCase().includes(searchTerm.toLowerCase())
    )


    return (
        <div>
            <SearchGolfCourses searchTerm={searchTerm} onChangeSearch={setSearchTerm} />

            <GolfCourseCollection golfCourse={coursesToDisplay} />
            <TheBasics />
        </div>
    )
}

export default GolfPage;




