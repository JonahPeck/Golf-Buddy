import GolfCards from "./GolfCards";

export default function Home({ golfCourse }) {
    const showCourses = golfCourse.map((par) =>
        <GolfCards key={par.id} golfCourse={par} />
    )
    return (
        <div>
            <h1 ClassName="Title-Home-Page">Golf Courses Around the US!</h1>

            <div>
                {showCourses}
            </div>
        </div>
    )

}