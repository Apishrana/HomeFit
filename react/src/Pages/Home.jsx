import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import './css/Home.css';

function Home() {
    const navigate = useNavigate();
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <div className="left-text">
                    <div className="main-heading">
                        Find a home that fits you
                    </div>
                    <div className="main-subheading">
                        Swipe, score, and match with confidence
                    </div>
                    <ul className="features">
                        <li>Swipe through homes</li>
                        <li>See a Health Score</li>
                        <li>Match in minutes</li>
                    </ul>
                    <button
                        className="cta-btn"
                        onClick={() => {
                            navigate('/homeFit');
                        }}>
                        Start Matching
                    </button>
                </div>
                <div className="cards">
                    <div className="card-container">
                        <div className="card card3">
                            <img src="" alt="" className="card-img" />
                            <div className="card-disc">
                                <div className="card-info">₹28,000 · 2 BHK</div>
                                <div className="card-health">
                                    Health Score: 82
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-container">
                        <div className="card card2">
                            <img src="" alt="" className="card-img" />
                            <div className="card-disc">
                                <div className="card-info">₹28,000 · 2 BHK</div>
                                <div className="card-health">
                                    Health Score: 82
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-container">
                        <div className="card card1">
                            <img src="" alt="" className="card-img" />
                            <div className="card-disc">
                                <div className="card-info">₹28,000 · 2 BHK</div>
                                <div className="card-health">
                                    Health Score: 82
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Home;
