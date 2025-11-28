export default function Login() {
    return (
        <main className="container">
            <h2 style={{ marginTop: 16 }}>Login</h2>
            <div className="form" style={{ maxWidth: 420, marginTop: 12 }}>
                <form action="#" method="post">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" required="" />
                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" type="password" required="" />
                    <div className="actions">
                        <button className="pixel-btn" type="submit">
                            Login
                        </button>
                        <a
                            className="pixel-btn"
                            href="register.html"
                            style={{ background: "#f6f6f2" }}
                        >
                            Register
                        </a>
                    </div>
                </form>
            </div>
        </main>

    )
}