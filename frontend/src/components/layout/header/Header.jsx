const Header = () => {
    return (
        <header>
        <div className="header-container">
            <div className="logo">
            {/* <img src={logo} alt="logo" /> */}
            </div>
            <div className="navigation">
            <ul>
                <li>
                <a href="#">Home</a>
                </li>
                <li>
                <a href="#">About</a>
                </li>
                <li>
                <a href="#">Contact</a>
                </li>
            </ul>
            </div>
        </div>
        </header>
    );
    
}

export default Header;