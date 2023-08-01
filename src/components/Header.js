import logo from '../../logo.png';
const Header = () => {
    return(
    <div className="header">
        <div className="logo"><img alt="logo" src={logo}></img></div>
        <div className="navitem">
            <ul className="menu">
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
    )
}

export default Header;