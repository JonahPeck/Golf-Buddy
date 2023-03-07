import GolfCards from './GolfCards';



function GolfCourseCollection({ coursesToDisplay, setSearchTerm }) {
    const courses = coursesToDisplay.map((golf) => (
        <GolfCards key={golf.id} golfCourse={golf} />

    ));
    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }

    return (
        <div>
            <label>Search for Golf Courses by Course, Club, or Location!</label>
            <br />
            <input className="prompt" onChange={handleChange} type="text" placeholder="Find a Course..."></input>
            <div>
                {courses}
            </div>
        </div>
    )
}
export default GolfCourseCollection;