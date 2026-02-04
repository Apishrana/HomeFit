import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Css/Footer.css';

function Footer({ currentPage = null }) {
    useEffect(() => {
        if (currentPage) {
            document.querySelectorAll('.footer-current-page').forEach((el) => {
                el.classList.remove('footer-current-page');
            });
            const el = document.getElementById(currentPage);
            if (el) {
                el.classList.add('footer-current-page');
            }
        }
    }, [currentPage]);

    return (
        <>
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-brand">
                        <Link to={'/'} className="footer-logo">
                            HomeFit
                        </Link>
                        <p className="footer-tagline">
                            Swipe, score, and match with confidence.
                        </p>
                    </div>

                    <div className="footer-links">
                        <div className="footer-col">
                            <h4>Product</h4>
                            <Link to="/Footer/how-it-works" id="how-it-works">
                                How it works
                            </Link>
                            <Link to="/Footer/health-score" id="health-score">
                                Health Score
                            </Link>
                            <Link to="/Footer/pricing" id="pricing">
                                Pricing
                            </Link>
                        </div>

                        <div className="footer-col">
                            <h4>Company</h4>
                            <Link to="/Footer/about" id="about">
                                About
                            </Link>
                            <Link to="/Footer/careers" id="careers">
                                Careers
                            </Link>
                            <Link to="/Footer/contact" id="contact">
                                Contact
                            </Link>
                        </div>

                        <div className="footer-col">
                            <h4>Legal</h4>
                            <Link
                                to="/Footer/privacy-policy"
                                id="privacy-policy">
                                Privacy Policy
                            </Link>
                            <Link to="/Footer/terms" id="terms">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    © 2026 HomeFit. All rights reserved.
                </div>
            </footer>
        </>
    );
}

export default Footer;
