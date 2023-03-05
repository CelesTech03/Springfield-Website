import { Outlet, Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <div>
                    <Link to="/">
                        <h1>Welcome to Springfield</h1>
                    </Link>
                </div>

                <div className="links">
                    <Link to="/">
                        <h3>Homepage</h3>
                    </Link>
                    <Link to="/restaurants">
                        <h3>Restaurants</h3>
                    </Link>
                    <Link to="/attractions">
                        <h3>Attractions</h3>
                    </Link>
                    <Link to="/lodging">
                        <h3>Lodging</h3>
                    </Link>
                </div>
            </nav>
            <Outlet />
        </div>
    )
}

export default Navbar