import { NavLink } from 'react-router-dom';

function NavBar() {


    return (
        <div>

            <nav className="nav bar">
                <div>
                    <NavLink
                        className="navbar-button"
                        to="/">The 19th Hole
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        className="navbar-button"
                        to="/GolfCourseCollection">The Links
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        className="navbar-button"
                        to="/TheBasics">The Basics
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        className="navbar-button"
                        to="/ScoreCardForm"> The ScoreCard
                    </NavLink>
                </div>


            </nav>
        </div>
    );
}
export default NavBar;