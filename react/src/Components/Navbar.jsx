import './css/Navbar.css';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
    return (
        <nav className="nav">
            <div className="logo-section">
                <img
                    className="logo-img"
                    src="./assets/HomeFitlogo.png"
                    alt="logo"
                />
                <div className="logo-text">HomeFit</div>
            </div>

            <button
                className="sign-in-btn"
                onClick={() => {
                    navigate('/Login');
                }}>
                <img className="sign-in-img" src="./assets/Signin.png" alt="" />
                <div className="sign-in-text">Sign In</div>
            </button>
        </nav>
    );
}

export default Navbar;
