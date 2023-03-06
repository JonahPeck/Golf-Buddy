import React from 'react';
import GolfCards from './GolfCards';



function GolfCourseCollection({ golfCourse }) {
    const courses = golfCourse.map((golf) => (
        <GolfCards key={golf.id} golfCourse={golf} />
    ));

    return (
        <div>
            {courses}
        </div>
    )
}
export default GolfCourseCollection;