import React, { useState } from 'react';


function GolfCards({ golfCourse }) {

    const { id, Club, Course, Location, Image, TimesPlayed } = golfCourse;
    const [roundsPlayed, setRoundsPlayed] = useState(TimesPlayed)

    function handlePlayedClick() {
        const newRoundsPlayed = { TimesPlayed: roundsPlayed + 1 }
        fetch(`http://localhost:3001/Golf_Courses/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newRoundsPlayed)
        })
            .then((response) => response.json())
            .then(data => {
                setRoundsPlayed(data.TimesPlayed);
            })
            .catch(error => console.log(error))
    }

    function handlePlayedClickDecrement() {
        const newRoundsPlayedMinus = { TimesPlayed: roundsPlayed - 1 }
        fetch(`http://localhost:3001/Golf_Courses/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newRoundsPlayedMinus)
        })
            .then((response) => response.json())
            .then(data => {
                setRoundsPlayed(data.TimesPlayed);
            })
            .catch(error => console.log(error))
    }


    return (

        <div className="card-wrapper">
            <div className="card">
                <div className="image-course">
                    <img src={Image} alt={Course} />
                </div>
                <div className="club">{Club}</div>
                <div className="course">{Course}</div>
                <div className="location">{Location}</div>
                <p>{roundsPlayed} Rounds Played</p>
                <button onClick={handlePlayedClick} className="rounds-played-button-increment">+</button>
                <button onClick={handlePlayedClickDecrement} className="rounds-played-button-decrement">-</button>
            </div>
        </div>


    )
}
export default GolfCards;