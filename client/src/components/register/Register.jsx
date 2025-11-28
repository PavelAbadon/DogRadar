export default function Register() {
    return (
        <main className="container">
            <h2 style={{ marginTop: 16 }}>Register</h2>
            <div className="form" style={{ maxWidth: 520, marginTop: 12 }}>
                <form action="#" method="post">
                    <label htmlFor="username">Username</label>
                    <input id="username" name="username" type="text" required="" />
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" required="" />
                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" type="password" required="" />
                    <label htmlFor="confirm">Confirm password</label>
                    <input id="confirm" name="confirm" type="password" required="" />
                    <div className="actions">
                        <button className="pixel-btn" type="submit">
                            Create account
                        </button>
                    </div>
                </form>
            </div>
        </main>

    );
}