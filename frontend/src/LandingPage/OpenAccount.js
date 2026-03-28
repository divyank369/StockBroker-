import React from "react";

function OpenAccount() {
  return (
    <div className="container px-3 px-md-4 py-4 py-md-5">
      <div className="row text-center">
        <h1 className="fs-2 text-muted mb-3">Open a Zerodha Account</h1>
        <p className="text-muted mb-2">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&amp;O trades.
        </p>
        <div className="col-12 d-flex justify-content-center">
          <button className="open-account-cta p-2 btn btn-primary fs-5 mt-3">
            Sign Up for free
          </button>
        </div>
      </div>
    </div>
  );
}

export default OpenAccount;
