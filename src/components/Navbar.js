const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Welcome to Springfield</h1>
            <div className="links">
                <a href="/">Homepage</a>
                <a href="/restaurants">Restaurants</a>
                <a href="/attractions">Attractions</a>
                <a href="/lodging">Lodging</a>
            </div>
        </nav>
    )
}

export default Navbar