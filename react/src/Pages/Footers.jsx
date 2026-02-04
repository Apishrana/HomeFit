import { useParams, Link } from 'react-router-dom';
import Footer from '../Components/Footer.jsx';
import './Css/Footers.css';

function Footers() {
    const { PageName } = useParams();
    return (
        <>
            <header className="page-header">
                <Link to="/" className="home-link">
                    <span className="logo">HomeFit</span>
                </Link>
            </header>
            {PageName === 'how-it-works' && (
                <main className="page-content">
                    <h1>How It Works</h1>

                    <p>
                        HomeFit makes finding a home simple, fast, and
                        data-driven. Instead of endless scrolling, you swipe
                        through homes that actually fit your lifestyle.
                    </p>

                    <section>
                        <h2>Swipe Through Homes</h2>
                        <p>
                            Browse verified listings using a swipe-based
                            interface. Like a home? Swipe right. Not a fit?
                            Swipe left.
                        </p>
                    </section>

                    <section>
                        <h2>Understand the Health Score</h2>
                        <p>
                            Each home comes with a Health Score calculated using
                            factors such as air quality, sunlight, noise levels,
                            neighborhood safety, and daily convenience.
                        </p>
                    </section>

                    <section>
                        <h2>Match with Confidence</h2>
                        <p>
                            Shortlist the best homes in minutes and make
                            decisions backed by data — not guesswork.
                        </p>
                    </section>
                </main>
            )}

            {PageName === 'health-score' && (
                <main class="page-content">
                    <h1>Health Score</h1>

                    <p>
                        The HomeFit Health Score helps you understand how
                        healthy a home is before you move in.
                    </p>

                    <section>
                        <h2>What is a Health Score?</h2>
                        <p>
                            A single score between <strong>0–100</strong> that
                            summarizes living conditions inside and around a
                            property.
                        </p>
                    </section>

                    <section>
                        <h2>What We Measure</h2>
                        <ul>
                            <li>Air quality & ventilation</li>
                            <li>Sunlight exposure</li>
                            <li>Noise pollution</li>
                            <li>Green spaces nearby</li>
                            <li>Daily commute convenience</li>
                        </ul>
                    </section>

                    <section>
                        <h2>Why It Matters</h2>
                        <p>
                            A healthier home improves sleep, productivity, and
                            long-term wellbeing.
                        </p>
                    </section>
                </main>
            )}
            {PageName === 'pricing' && (
                <main class="page-content">
                    <h1>Pricing</h1>

                    <section>
                        <h2>Free Plan</h2>
                        <p>
                            Browse listings, swipe homes, and view basic Health
                            Scores — free forever.
                        </p>
                    </section>

                    <section>
                        <h2>Premium (Coming Soon)</h2>
                        <p>
                            Advanced analytics, comparisons, neighborhood
                            insights, and priority listings.
                        </p>
                    </section>

                    <section>
                        <h2>No Hidden Costs</h2>
                        <p>
                            HomeFit does not charge brokerage fees or
                            commissions.
                        </p>
                    </section>
                </main>
            )}
            {PageName === 'about' && (
                <main class="page-content">
                    <h1>About HomeFit</h1>

                    <p>
                        HomeFit was built to help people choose homes based on
                        quality of life, not just price or size.
                    </p>

                    <section>
                        <h2>Our Mission</h2>
                        <p>
                            To make healthier living accessible through
                            data-driven decisions.
                        </p>
                    </section>

                    <section>
                        <h2>Why HomeFit?</h2>
                        <p>
                            We believe homes should support physical and mental
                            wellbeing — not compromise it.
                        </p>
                    </section>
                </main>
            )}
            {PageName === 'careers' && (
                <main class="page-content">
                    <h1>Careers</h1>

                    <p>
                        Join us in building healthier, smarter ways for people
                        to find homes.
                    </p>

                    <section>
                        <h2>Why Work at HomeFit?</h2>
                        <p>
                            We're a small, fast-moving team focused on impact,
                            design, and meaningful technology.
                        </p>
                    </section>

                    <section>
                        <h2>Open Roles</h2>
                        <ul>
                            <li>Frontend Developer (React / UI)</li>
                            <li>Backend Developer (APIs / Data)</li>
                            <li>UI/UX Designer</li>
                        </ul>
                    </section>

                    <section>
                        <h2>Apply</h2>
                        <p>
                            Send your resume or portfolio to
                            <strong>careers@homefit.com</strong>
                        </p>
                    </section>
                </main>
            )}
            {PageName === 'contact' && (
                <main class="page-content">
                    <h1>Contact Us</h1>

                    <p>
                        Have questions, feedback, or partnership ideas? We’d
                        love to hear from you.
                    </p>

                    <section>
                        <h2>Email</h2>
                        <p>
                            <a href="mailto:support@homefit.com?subject=HomeFit Support&body=Hi HomeFit Team,">
                                <strong>support@homefit.com</strong>
                            </a>
                        </p>
                    </section>
                    <section>
                        <h2>Phone</h2>
                        <p>
                            <strong>+91 99988 87766</strong>
                        </p>
                    </section>
                    <section>
                        <h2>Location</h2>
                        <p>Bengaluru, India</p>
                    </section>

                    <section>
                        <h2>Working Hours</h2>
                        <p>
                            Monday - Friday
                            <br />
                            10:00 AM - 6:00 PM
                        </p>
                    </section>
                </main>
            )}
            {PageName === 'privacy-policy' && (
                <main class="page-content">
                    <h1>Privacy Policy</h1>

                    <p>
                        HomeFit respects your privacy and is committed to
                        protecting your data.
                    </p>

                    <section>
                        <h2>What We Collect</h2>
                        <p>
                            Only data required to improve your experience on the
                            platform.
                        </p>
                    </section>

                    <section>
                        <h2>Data Usage</h2>
                        <p>
                            We never sell your personal information to third
                            parties.
                        </p>
                    </section>
                </main>
            )}
            {PageName === 'terms' && (
                <main class="page-content">
                    <h1>Terms of Service</h1>

                    <p>
                        By using HomeFit, you agree to use the platform
                        responsibly.
                    </p>

                    <section>
                        <h2>Information Disclaimer</h2>
                        <p>
                            Property data is provided for informational purposes
                            only.
                        </p>
                    </section>

                    <section>
                        <h2>User Responsibility</h2>
                        <p>
                            Users are responsible for verifying property details
                            independently.
                        </p>
                    </section>
                </main>
            )}
            <Footer currentPage={PageName} />
        </>
    );
}

export default Footers;
