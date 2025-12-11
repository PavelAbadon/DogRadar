import { useNavigate } from "react-router";

export default function Register({
    onRegister
}) {
    
    const navigate = useNavigate();

    const registerSubmit = (formData) =>{
        
        const email = formData.get('email');
        const password = formData.get('password');
        const confirmPassword = formData.get('confirm-password');

        //todo трябва валидация 
        
        onRegister({email,});

        navigate('/');

    }

    return (
        <main className="container">
            <h2 style={{ marginTop: 16 }}>Register</h2>
            <div className="form" style={{ maxWidth: 520, marginTop: 12 }}>
                <form action={registerSubmit} method="post">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" required="" />
                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" type="password" required="" />
                    <label htmlFor="confirm">Confirm password</label>
                    <input id="confirm" name="confirm-password" type="password" required="" />
                    <div className="actions">
                        <button className="pixel-btn" type="submit">
                            Create account
                        </button>
                    </div>
                    <div className="actions">
                        <button className="pixel-btn"  >
                             Вече имаш акаунт тук бутона трябва да се оправи
                        </button>
                    </div>
                </form>
            </div>
        </main>

    );
}