import { Link } from 'react-router-dom';
import './Css/LoginForm.css';

function LoginForm({ Signup = false }) {
    return (
        <>
            {Signup ? (
                <form className="login-form">
                    <h1>Sign Up</h1>

                    <label>Full name</label>
                    <input required type="text" />

                    <label>Username</label>
                    <input required type="text" />

                    <label>Email</label>
                    <input required type="email" />

                    <label>Password</label>
                    <input required type="password" />

                    <button
                        className="login-btn"
                        type="button"
                        onSubmit={() => {}}>
                        Sign Up
                    </button>

                    <p className="signup-text">
                        Existing user?
                        <Link to="/Login">Log in</Link>
                    </p>
                </form>
            ) : (
                <form className="login-form">
                    <h1>Log in</h1>

                    <label>Username / Email</label>
                    <input required type="text" />

                    <label>Password</label>
                    <input required type="password" />

                    <button
                        className="login-btn"
                        type="submit"
                        onSubmit={() => {}}>
                        Login
                    </button>

                    <p className="signup-text">
                        New to HomeFit?
                        <Link to="/Signup">Create Account</Link>
                    </p>
                </form>
            )}
        </>
    );
}

export default LoginForm;
