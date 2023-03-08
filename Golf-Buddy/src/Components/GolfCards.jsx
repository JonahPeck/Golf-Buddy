import React from 'react';


function GolfCards({ golfCourse }) {

    const { Club, Course, Location, Image } = golfCourse;



    return (

        <div className="card-wrapper">
            <div className="card">
                <div className="image-course">
                    <img src={Image} alt={Course} />
                </div>
                <div className="club">{Club}</div>
                <div className="course">{Course}</div>
                <div className="location">{Location}</div>
            </div>
        </div>


    )
}
export default GolfCards;