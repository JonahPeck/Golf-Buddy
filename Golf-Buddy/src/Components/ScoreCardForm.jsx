import React, { useState } from 'react';


function ScoreCardForm({ onAddScore, newScoreCard, onRemoveListing }) {
    const [id, setId] = useState(1)

    const { Date, Club, Course, Score } = newScoreCard

    const newScoreCardAdd = newScoreCard.map((score) => {

        // onRemoveListing = { onRemoveListing }
        return (
            <div className="input-field">
                <div className="date">
                    {score.Date}
                </div>
                <div className="club">
                    {score.Club}
                </div>
                <div className="course">
                    {score.Course}
                </div>
                <div className="score">
                    {score.Score}
                </div>
                <button onClick={() => handleDeleteClick(score.id)} className="delete-button">❎</button>

            </div>
        )

    }
    )



    const [formData, setFormData] = useState({
        Date: "",
        Club: "",
        Course: "",
        Score: "",
        id: 0,
    });

    function handleChange(event) {
        setId(id + 1)
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        const newScore = {
            Date: formData.Date,
            Club: formData.Club,
            Course: formData.Course,
            Score: parseFloat(formData.Score),
            id: formData.id
        }

        fetch("http://localhost:3001/Scores", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newScore)
        })
            .then((resp) => resp.json())
            .then(onAddScore);
    }


    function handleDeleteClick(score) {
        fetch(`http://localhost:3001/Scores/${score}`, {
            method: 'DELETE',
        })
        onRemoveListing(score)
    }



    return (
        <div className="new-score-form">
            <form onSubmit={(event) => handleSubmit(event)} className="actual-form" autoComplete="off">
                <div className="inline fields">
                    <input type="date" name="Date" placeholder="Date" value={formData.Date} onChange={handleChange} />
                    <input type="text" name="Club" placeholder="Club" value={formData.Club} onChange={handleChange} />
                    <input type="text" name="Course" placeholder="Course" value={formData.Course} onChange={handleChange} />
                    <input type="number" name="Score" placeholder="Score" value={formData.Score} onChange={handleChange} />
                </div>
                <button className="submit-button" type="submit">Add A New Round!</button>
            </form>
            {newScoreCardAdd}
            <div>
            </div>
        </div>
    );
}
export default ScoreCardForm;