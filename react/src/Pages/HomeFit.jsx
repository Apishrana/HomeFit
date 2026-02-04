import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

import './Css/HomeFit.css';

function HomeFit() {
    return (
        <>
            <Navbar />

            <main>
                <div className="card-container">
                    <div className="card">
                        <img src="" alt="" className="card-img" />
                        <div className="card-disc">
                            <div className="card-info"></div>
                            <div className="card-health"></div>
                        </div>
                    </div>
                    <div className="card">
                        <img src="" alt="" className="card-img" />
                        <div className="card-disc">
                            <div className="card-info"></div>
                            <div className="card-health"></div>
                        </div>
                    </div>
                    <div className="card">
                        <img src="" alt="" className="card-img" />
                        <div className="card-disc">
                            <div className="card-info"></div>
                            <div className="card-health"></div>
                        </div>
                    </div>
                    <div className="card">
                        <img src="" alt="" className="card-img" />
                        <div className="card-disc">
                            <div className="card-info"></div>
                            <div className="card-health"></div>
                        </div>
                    </div>
                    <div className="card">
                        <img src="" alt="" className="card-img" />
                        <div className="card-disc">
                            <div className="card-info"></div>
                            <div className="card-health"></div>
                        </div>
                    </div>
                    <div className="card">
                        <img src="" alt="" className="card-img" />
                        <div className="card-disc">
                            <div className="card-info"></div>
                            <div className="card-health"></div>
                        </div>
                    </div>
                    <div className="card">
                        <img src="" alt="" className="card-img" />
                        <div className="card-disc">
                            <div className="card-info"></div>
                            <div className="card-health"></div>
                        </div>
                    </div>
                </div>

                <div className="button-container">
                    <button className="interaction-button" onClick="skip()">
                        Skip
                    </button>
                    <button className="interaction-button" onClick="info()">
                        Info
                    </button>
                    <button className="interaction-button" onClick="like()">
                        Like
                    </button>
                </div>

                <div className="info-container" id="info-box">
                    <div className="info-box">
                        <table className="info-table">
                            <tr>
                                <th>Name</th>
                                <td className="info-data">Temp</td>
                            </tr>
                            <tr>
                                <th>Location</th>
                                <td className="info-data">Blr, India</td>
                            </tr>
                            <tr>
                                <th>Price</th>
                                <td className="info-data">₹ 28,000</td>
                            </tr>
                            <tr>
                                <th>Specifications</th>
                                <td className="info-data">2 BHK</td>
                            </tr>
                            <tr>
                                <th>Health Score</th>
                                <td className="info-data">82</td>
                            </tr>
                        </table>
                        <button
                            className="info-close-button"
                            onclick="unloadInfo()">
                            X
                        </button>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default HomeFit;
