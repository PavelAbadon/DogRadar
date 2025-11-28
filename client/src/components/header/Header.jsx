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
                        <Link to="/day">Day</Link>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                        <Link to="/logout">Logout</Link>
                    </nav>
                </div>
            </header>
        </>

    )
}