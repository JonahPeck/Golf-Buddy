import GolfCards from "./GolfCards";

export default function Home({ golfCourse }) {
    const showCourses = golfCourse.map((par) =>
        <GolfCards key={par.id} golfCourse={par} />
    )

    return (
        <div>
            <div>
                <h1 className="Title-Home-Page">Golf Buddy</h1>


                <div>
                    <img className="home-page-background" src="https://i0.wp.com/www.globalgolfpost.com/wp-content/uploads/2020/06/BEN-HOGAN-HY-PESKIN-PHOTO-1000-05111n.jpg?fit=1215%2C1000&ssl=1" />
                    {/* {showCourses} */}
                </div>
            </div>
        </div>
    )

}