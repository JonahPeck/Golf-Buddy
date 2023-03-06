import React, { useState } from 'react';


function ScoreCardForm({ onAddScore }) {
    const [formData, setFormData] = useState({
        Date: "",
        Club: "",
        Course: "",
        Score: "",
    });

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit() {
        const newScore = {
            Date: formData.Date,
            Club: formData.Club,
            Course: formData.Course,
            Score: parseFloat(formData.Score)
        };
        fetch("http://localhost:3001/Golf_Courses", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newScore)
        })
            .then((resp) => resp.json())
            .then(onAddScore)
    }

    return (
        <div className="new-score-form">
            <form className="actual-form">
                <div className="inline fields">
                    <input type="date" name="Date" placeholder="Date" value={formData.Date} onChange={handleChange} />
                    <input type="text" name="Club" placeholder="Club" value={formData.Club} onChange={handleChange} />
                    <input type="text" name="Course" placeholder="Course" value={formData.Course} onChange={handleChange} />
                    <input type="number" name="Score" placeholder="Score" value={formData.Score} onChange={handleChange} />
                </div>
                <button onClick={handleSubmit} className="submit-button" type="submit">Add A New Round!</button>
            </form>

        </div>
    );
}
export default ScoreCardForm;