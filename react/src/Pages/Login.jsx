import './Css/Login.css';
import Logo from '../Components/LoginLoginSection';
import LoginForm from '../Components/LoginForm.jsx';

function Login({ Signup = false }) {
    return (
        <div class="login-page">
            <div class="login-card">
                <Logo />
                <LoginForm Signup={Signup} />
            </div>
        </div>
    );
}

export default Login;
