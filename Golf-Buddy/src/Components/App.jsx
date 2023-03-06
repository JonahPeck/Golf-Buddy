import React, { useState } from 'react';
import GolfPage from './GolfPage';
import NavBar from './NavBar';

function App() {
  const [page, setPage] = useState("/");


  return (
    <div className="App">
      <h1>Golf Courses Around the Globe</h1>
      <GolfPage />
      <NavBar />
      <Routes>

      </Routes>

    </div>
  )
}

export default App;
