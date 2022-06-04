import React from "react";
import "../styles/CardRound.css";

const CardRound = () => {
  const cardText = {
    fontSize: "5rem",
    lineHeight: 2,
  };
  return (
    <>
      <div className="container-fluid cardRound py-5">
        <div className="container">
          <h2 className="text-center">Title 1</h2>

          <div className="row text-center py-5">
            <div className="col-12 col-md-4 RoundCard card_one">
              <div className="w-100 h-100">
              <h2 style={cardText}>1 BN+</h2>
              <h4>Daily Impressions</h4>
              </div>
            </div>
            <div className="col-12 col-md-4 RoundCard card_two">
              <h2 style={cardText}>$500K+</h2>
              <h4>Paid</h4>
            </div>
            <div className="col-12 col-md-4 RoundCard card_three">
              <h2 style={cardText}>8K+</h2>
              <h4>Global Publishers</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardRound;
