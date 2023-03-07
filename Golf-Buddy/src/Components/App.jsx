import React, { useState, useEffect } from 'react';
import GolfCourseCollection from './GolfCourseCollection';
import ScoreCard from './ScoreCard';
import TheBasics from './TheBasics';
import Home from './Home';
// import SearchGolfCourses from './SearchGolfCourses';
//commented out as the functionality has been put within the Golf course collection
import { Routes, Route } from 'react-router-dom';

import NavBar from './NavBar';

function App() {
  // const [page, setPage] = useState("/");
  const [golfCourse, setGolfCourse] = useState([]);
  const [newScoreCard, setNewScoreCard] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/Golf_Courses")
      .then((response) => response.json())
      .then(setGolfCourse)
  }, []);

  const handleAddNewScoreCard = (newScore) => {
    setNewScoreCard(...newScoreCard, newScore);
  }

  const coursesToDisplay = golfCourse.filter((golf) =>
    golf.Club.toLowerCase().includes(searchTerm.toLowerCase()) ||
    golf.Course.toLowerCase().includes(searchTerm.toLowerCase()) ||
    golf.Location.toLowerCase().includes(searchTerm.toLowerCase())
  )



  return (
    <div className="App">
      {/* <h1>Golf Courses Around the US!</h1> */}
      <NavBar />
      <Routes>

        <Route
          path="/"
          element={<Home
            golfCourse={golfCourse} />}
        />

        <Route
          path="/GolfCourseCollection"
          element={<GolfCourseCollection
            coursesToDisplay={coursesToDisplay}
            setSearchTerm={setSearchTerm}
            onChange={setSearchTerm}
          //OnClick to display further information on the courses.
          />}
        />

        <Route
          path="/ScoreCard"
          element={<ScoreCard
            handleAddNewScoreCard={handleAddNewScoreCard}
          //delete scoreCard functionality

          />}
        />

        <Route
          path="/TheBasics"
          element={<TheBasics
          />}
        />


        {/* <SearchGolfCourses searchTerm={searchTerm} onChangeSearch={setSearchTerm} /> */}
      </Routes>

    </div>
  )
}

export default App;
