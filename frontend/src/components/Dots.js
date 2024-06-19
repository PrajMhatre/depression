import React from "react";
function Dots({dotQty, current, dotPicksQuote}) {
    return (
      <div className="dot-container">
        {
          dotQty.map((dot, i) => {
            return <span id={i} className={current === i ? "dot active" : "dot"}
                          onClick={dotPicksQuote}></span>
          })
        }
      </div>
    )
  }
  export default Dots