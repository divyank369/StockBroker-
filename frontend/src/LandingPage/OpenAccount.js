import React from "react";

function OpenAccount() {
  return (
    <div className="container p-5 ">
      <div className="row text-center">
        <h1 className="fs-2 text-muted mb-3">Open a Zerodha Account</h1>
        <p className="text-muted mb-2">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.{" "}
        </p>
        <button
          className="p-2 btn btn-primary fs-5 mt-3"
          style={{ width: "15%", margin: "0 auto" }}
        >
          Sign Up for free
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
