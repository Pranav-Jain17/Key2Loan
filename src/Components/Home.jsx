import React from "react";
import "/src/Home.css"
import Calculator from "./Calculator";
import Features from "./Features";
import Functionalities from "./Functionalities";
import Footer from "./Footer";

function Home() {

    const handleLogoClick = () => {
        window.location.reload();
    };

    return (
        <div className="wrapper">
            <div className="navbar">
                <img src="/assets/logo.png" alt="Logo" onClick={handleLogoClick} />
                <div className="navtext">
                    <button>Become our Partner</button>
                    <button>Support</button>
                    <img src="/assets/whatsapp.svg" alt="whatsapp-icon" />
                </div>
            </div>
            <div className="contactbar">
                <div>
                    <img src="/assets/contact.svg" alt="call-icon" />
                    +91 8077XXXXXX
                </div>
                <div>
                    <img src="/assets/mail.svg" alt="call-icon" />
                    contact@Key2Loan.com
                </div>
            </div>
            <div className="carousel-section">
                <div className="textSide">
                    <p className="heading1"><span>Looking for</span>  Business <span>Loan?</span></p>
                    <p className="heading2">Empowering Your Business with the Right Financial Support</p>
                    <button>Apply Now</button>
                </div>
                <div className="carousel">
                    <img src="/assets/carousel_img1.png" alt="watering plants" />
                </div>
            </div>
            <Calculator></Calculator>
            <Features></Features>
            <Functionalities></Functionalities>
            <Footer></Footer>
        </div>
    )
}

export default Home;