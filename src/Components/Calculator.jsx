import React from "react";
import "/src/Calculator.css"

function Calculator() {

    return (
        <div className="container">
            <p>Business Loan EMI Calculator</p>
            <div className="calculator">
                <div className="calculator_form">
                    <input
                        type="numeric"
                        placeholder="Loan Amount"
                        variant="bordered"
                    />
                    <input
                        type="numeric"
                        placeholder="Annual Interest Rate"
                        variant="bordered"
                    />
                    <input
                        type="numeric"
                        placeholder="Loan Tenure (In Months)"
                        variant="bordered"
                    />
                    <button>Apply Now</button>
                </div>
                <div className="pieChart">
                    <img src="/assets/carousel_img1.png" alt="pie-chart" />
                </div>
            </div>
        </div>
    )
}

export default Calculator;
