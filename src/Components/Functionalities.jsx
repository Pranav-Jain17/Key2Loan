import React from "react";
import "/src/Functionalities.css"

function Functionalities() {

    return (
        <div className="box">
            <div className="why-section">
                <p className="why-heading">Why Key2Loan?</p>
                <div className="why-points">
                    <div className="left-side">
                        <div className="why-point">
                            <img src="/assets/door.svg" alt="door-image" />
                            <div className="why-point-details">
                                <p className="why-detail1">Door Step Service</p>
                                <p className="why-detail2">We come to you for documentation and verification</p>
                            </div>
                        </div>
                        <div className="why-point">
                            <img src="/assets/wallet.svg" alt="wallet-image" />
                            <div className="why-point-details">
                                <p className="why-detail1">Zero Upfront Payment</p>
                                <p className="why-detail2">No hidden charges or upfront fees</p>
                            </div>
                        </div>
                        <div className="why-point">
                            <img src="/assets/document.svg" alt="document-image" />
                            <div className="why-point-details">
                                <p className="why-detail1">Least Documentation</p>
                                <p className="why-detail2">Minimal paperwork required</p>
                            </div>
                        </div>
                    </div>
                    <div className="right-side">
                        <div className="why-point">
                            <img src="/assets/percent.svg" alt="percent-image" />
                            <div className="why-point-details">
                                <p className="why-detail1">Lowest Interest Rate</p>
                                <p className="why-detail2">Competitive interest rates for all loan types </p>
                            </div>
                        </div>
                        <div className="why-point">
                            <img src="/assets/shield.svg" alt="shield-image" />
                            <div className="why-point-details">
                                <p className="why-detail1">No Hidden Charges</p>
                                <p className="why-detail2">Complete transparency in all our services</p>
                            </div>
                        </div>
                        <div className="why-point">
                            <img src="/assets/laptop.svg" alt="laptop-image" />
                            <div className="why-point-details">
                                <p className="why-detail1">Digital Process</p>
                                <p className="why-detail2">Fast and efficient online application process</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="steps-section">
                <p className="steps-heading">How does it works?</p>
                <div className="steps">
                    <div className="step1">
                        <img src="/assets/Step1.png" alt="step1-image" />
                        <p>Click</p>
                    </div>
                    <div className="step2">
                        <img src="/assets/Step2.png" alt="step2-image" />
                        <p>Fill Form</p>
                    </div>
                    <div className="step3">
                        <img src="/assets/Step3.png" alt="step3-image" />
                        <p>Quick Disbursement</p>
                    </div>
                </div>
            </div>


            <div className="partners-section">
                <img src="/assets/Partners.png" alt="partners-image" />
            </div>
        </div>
    )
}

export default Functionalities;