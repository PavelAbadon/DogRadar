import { Link } from "react-router";

export default function Header() {
    return (
        <>
            <header className="header">
                <div className="container space-between">
                    <div className="brand">
                        <img src="../public/assets/dogRadarLogo01.png" alt="logo" />
                        <div>Dog Radar</div>
                    </div>
                    <nav className="nav">
                        <Link to="/index">Home</Link>
                        <Link to="/gallery">Dogs Gallery</Link>
                        <Link to="calendar.html">Calendar</Link>
                        <Link to="login.html">Login</Link>
                        <Link to="register.html">Register</Link>
                        <Link to="logout.html">Logout</Link>
                    </nav>
                </div>
            </header>
        </>

    )
}