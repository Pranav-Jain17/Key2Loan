import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import "/src/Calculator.css";

function Calculator() {
    const [loanAmount, setLoanAmount] = useState("");
    const [annualInterestRate, setAnnualInterestRate] = useState("");
    const [loanTenure, setLoanTenure] = useState("");
    const [chartData, setChartData] = useState([]);

    const calculateEMI = () => {
        const principal = Number(loanAmount);
        const monthlyInterestRate = Number(annualInterestRate) / 12 / 100;
        const numberOfMonths = Number(loanTenure);

        const emi =
            principal *
            monthlyInterestRate *
            Math.pow(1 + monthlyInterestRate, numberOfMonths) /
            (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1);

        const totalPayment = emi * numberOfMonths;
        const totalInterest = totalPayment - principal;

        setChartData([
            { name: "Principal", value: principal },
            { name: "Interest", value: totalInterest },
        ]);
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            calculateEMI();
        }
    };

    const COLORS = ["#0888FE", "#FF8042"];

    return (
        <div className="container">
            <p>Business Loan EMI Calculator</p>
            <div className="calculator">
                <div className="calculator_form" onKeyDown={handleKeyDown}>
                    <input
                        type="number"
                        placeholder="Loan Amount"
                        value={loanAmount}
                        onChange={(e) => setLoanAmount(Number(e.target.value))}
                    />
                    <input
                        type="number"
                        placeholder="Annual Interest Rate (%)"
                        value={annualInterestRate}
                        onChange={(e) => setAnnualInterestRate(Number(e.target.value))}
                    />
                    <input
                        type="number"
                        placeholder="Loan Tenure (In Months)"
                        value={loanTenure}
                        onChange={(e) => setLoanTenure(Number(e.target.value))}
                    />
                    <button onClick={calculateEMI}>Apply Now</button>
                </div>
                <div className="pieChart">
                    {chartData.length > 0 ? (
                        <PieChart width={200} height={200}>
                            <Pie
                                data={chartData}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={100}
                                fill="#8884d8"
                                label={false}
                            >
                                {chartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip
                                formatter={(value, name) => [`${value.toFixed(2)}`, name]}
                            />
                        </PieChart>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Calculator;
