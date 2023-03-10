import React, { useState, useEffect } from 'react';
import GolfCourseCollection from './GolfCourseCollection';
import ScoreCardForm from './ScoreCardForm';
import TheBasics from './TheBasics';
import Home from './Home';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';

function App() {

  const [golfCourse, setGolfCourse] = useState([]);
  const [newScoreCard, setNewScoreCard] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/Golf_Courses")
      .then((response) => response.json())
      .then(setGolfCourse)

    fetch("http://localhost:3001/Scores")
      .then((r) => r.json())
      .then(setNewScoreCard)
  }, []);



  function handleAddNewScoreCard(newScore) {
    setNewScoreCard([...newScoreCard, newScore]);
  }

  const coursesToDisplay = golfCourse.filter((golf) =>
    golf.Club.toLowerCase().includes(searchTerm.toLowerCase()) ||
    golf.Course.toLowerCase().includes(searchTerm.toLowerCase()) ||
    golf.Location.toLowerCase().includes(searchTerm.toLowerCase())
  )

  function handleRemoveScore(id) {
    const newCourseInfo = newScoreCard.filter((newScoreCard) =>
      newScoreCard.id !== id);
    setNewScoreCard(newCourseInfo)
  }


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
          path="/ScoreCardForm"
          element={<ScoreCardForm
            handleAddNewScoreCard={handleAddNewScoreCard}
            newScoreCard={newScoreCard}
            onAddScore={handleAddNewScoreCard}
            handleRemoveScore={handleRemoveScore}
            onRemoveListing={handleRemoveScore}


          />}
        />

        <Route
          path="/TheBasics"
          element={<TheBasics
          />}
        />



      </Routes>

    </div>
  )
}

export default App;


