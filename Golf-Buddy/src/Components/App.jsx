import React, { useState } from 'react';
import GolfCourseCollection from './GolfCourseCollection';
import ScoreCard from './ScoreCard';
import TheBasics from './TheBasics';
// import SearchGolfCourses from './SearchGolfCourses';
//commented out as the functionality has been put within the Golf course collection
import { Routes, Route } from 'react-router-dom';

// import NavBar from './NavBar';

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

  function handleAddNewScoreCard(newScore) {
    setNewScoreCard(...newScoreCard, newScore);
  }

  const coursesToDisplay = golfCourse.filter((golf) =>
    golf.Club.toLowerCase().includes(searchTerm.toLowerCase()) ||
    golf.Course.toLowerCase().includes(searchTerm.toLowerCase()) ||
    golf.Location.toLowerCase().includes(searchTerm.toLowerCase())
  )



  return (
    <div className="App">
      <h1>Golf Courses Around the Globe</h1>
      <NavBar />
      <Routes>

        <Route
          path="/"
          element={<NavBar
            golfCourse={golfCourse} />}
        />

        <Route
          path="/GolfCourseCollection"
          element={<GolfCourseCollection
            golfCourse={coursesToDisplay}
            searchTerm={searchTerm}
            onChangeSearch={setSearchTerm}
          />}
        />

        <Route
          path="/ScoreCard"
          element={<ScoreCard
            onAddScore={handleAddNewScoreCard}
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
