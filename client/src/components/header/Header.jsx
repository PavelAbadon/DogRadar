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
                        <a href="index.html">Home</a>
                        <a href="gallery.html">Dogs Gallery</a>
                        <a href="calendar.html">Calendar</a>
                        <a href="login.html">Login</a>
                        <a href="register.html">Register</a>
                        <a href="logout.html">Logout</a>
                    </nav>
                </div>
            </header>
        </>

    )
}