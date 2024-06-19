import React from "react";
function Arrows({nextQuote, prevQuote}) {
    return (
      <div className="arrows-container">    
        <a onClick={prevQuote} className="prev" id="prev">&#10094;</a>
        <a onClick={nextQuote} className="next" id="next">&#10095;</a>
      </div>
    )
  }
  export default Arrows