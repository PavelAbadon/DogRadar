import { Link, useNavigate } from "react-router";

export default function Login({
    onLogin,
}) {
    const navigate = useNavigate();
    const submitHandler = (e)=>{
        e.preventDefault();

        const formData = new FormData(e.target);

        const email = formData.get('email');
        const password = formData.get('password');

        if(!email || !password){
            return alert('имела и паролата са задължителни');

        }

        try {
            onLogin(email, password);
        navigate('/');
            
        } catch (err) {
            alert(err.message);
        }
        
    }
    return (
        <main className="container">
            <h2 style={{ marginTop: 16 }}>Login</h2>
            <div className="form" style={{ maxWidth: 420, marginTop: 12 }}>
                <form onSubmit={submitHandler} id='login'>
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" required="" />
                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" type="password" required="" />
                    <div className="actions">
                        <button className="pixel-btn" type="submit">
                            Login
                        </button>
                        <Link
                            className="pixel-btn"
                            to="/register"
                            style={{ background: "#f6f6f2" }}
                        >
                            Register
                        </Link>
                    </div>
                </form>
            </div>
        </main>

    )
}