import { Link } from "react-router";

export default function Header() {
    return (
        <>
            <header className="header">
                <div className="container space-between">
                    <Link to='/'>
                        <div className="brand">
                        <img src="../public/assets/dogRadarLogo01.png" alt="logo" />
                        <div>Dog Radar</div>
                    </div>
                    </Link>
                    <nav className="nav">
                        <Link to="/">Home</Link>
                        <Link to="/dogs">Dogs Gallery</Link>
                        <Link to="/calendar">Calendar</Link>
                        <Link to="login.html">Login</Link>
                        <Link to="register.html">Register</Link>
                        <Link to="logout.html">Logout</Link>
                    </nav>
                </div>
            </header>
        </>

    )
}