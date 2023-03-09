import { NavLink } from 'react-router-dom';

function NavBar() {


    return (
        <div>
            <nav className="nav-bar">
                <div>
                    <NavLink
                        className="navbar-button-19"
                        to="/">The 19th Hole
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        className="navbar-button-links"
                        to="/GolfCourseCollection">The Links
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        className="navbar-button-scorecard"
                        to="/ScoreCardForm"> The ScoreCard
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        className="navbar-button-basics"
                        to="/TheBasics">The Basics
                    </NavLink>
                </div>


            </nav>
        </div>
    );
}
export default NavBar;