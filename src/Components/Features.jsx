import React from "react";
import "/src/Features.css"

function Features() {

    return (
        <div className="container">
            <div className="details">
                <div className="textarea">
                    <p>
                        Key2Loan was established in 2024 with the goal of bridging the gap
                        between lenders and borrowers. <br />
                        Its foundation is based on facilitating the financial needs of
                        businesses and individuals by offering low-interest rates and a hassle-ree process.  <br />
                        Whether it&#39;s a personal loan for unexpected expenses, a mortgage for purchasing a
                        new home, or a business loan for expansion, Key2Loan provides flexible options
                        tailored to your financial circumstances.
                    </p>
                    <span>
                        Discover flexible loan options tailored to your needs. Our expert <br />
                        team is here to guide you <br />
                        through the process, ensuring a seamless experience.
                    </span>
                </div>
                <div className="image">
                    <img src="/public/assets/logo.png" alt="logo" />
                </div>
            </div>

            <div className="features">
                <div className="feature1">
                    <div className="feature-details feature-details1">
                        <h1>Unsecured Business Loan</h1>
                        <p>
                            An unsecured business loan is a type of loan that does not require the borrower to
                            provide any collateral, such as property or other assets, to secure the loan. <br />
                            Instead, the loan is granted based on the borrower’s creditworthiness, business performance,
                            and financial history.
                        </p>
                        <button>Know More</button>
                    </div>
                    <div className="image">
                        <img src="/public/assets/Features-img1.png" alt="Feature1-image" />
                    </div>
                </div>
                <div className="feature2">
                    <div className="image">
                        <img src="/public/assets/Features_img2.png" alt="Feature2-image" />
                    </div>
                    <div className="feature-details feature-details2">
                        <h1>Secured Business Loan</h1>
                        <p>
                            A secured business loan is a type of loan where the borrower pledges an asset
                            (called collateral) to the lender as security for the loan. <br />
                            If the borrower fails to repay the loan, the lender has the legal right to
                            seize and sell the collateral to recover the outstanding amount.
                        </p>
                        <button>Know More</button>
                    </div>
                </div>
            </div>


        </div>
    )

}

export default Features;