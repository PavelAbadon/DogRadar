import { useNavigate } from "react-router";

export default function Register(
    {  
    onRegister      
    }) {
    
    const navigate = useNavigate()    
    const registerSubmitHandler =(formData) => {
        
        const username = formData.get('username');        
        const email = formData.get('email');
        const password = formData.get('password');
        const confirmPassword = formData.get('confirm-password');

        if(!email || !password){
            return alert('Имейла и паролата са задължителни');
        }

        if(password !== confirmPassword){
            return alert('Паролата трябва да съвпада');
        }

        onRegister ({ email, username})

        navigate('/');
        
    }

    return (
        <main className="container">
            <h2 style={{ marginTop: 16 }}>Register</h2>
            <div className="form" style={{ maxWidth: 520, marginTop: 12 }}>
                <form action={registerSubmitHandler} >
                    <label htmlFor="username">Username</label>
                    <input id="username" name="username" type="text" required="" />
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" required="" />
                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" type="password" required="" />
                    <label htmlFor="confirm-password">Confirm password</label>
                    <input id="confirm" name="confirm-password" type="password" required="" />
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