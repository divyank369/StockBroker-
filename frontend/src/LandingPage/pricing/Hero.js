function Hero() {
  return (
    <div className="container">
      <div className="row mt-5 p-5 text-center mb-5 border-bottom">
        <h1 className="p-2 text-muted">Pricing</h1>
        <h3 className=" fs-5 mt-3 text-muted mb-5 ">
          Free equity investments and flat ₹20 intraday and F&O trades
        </h3>
      </div>
      <div className="row p-5 mt-5 text-center"style={{marginLeft:"25px",marginRight:"25px"}}>
        <div className="col-4 p-4">
          <img src="Media/images/pricing0.svg"className="text-muted mb-3" alt=""style={{width:"90%"}} />
          <h1 className="fs-2">Free equity delivery</h1>
          <p className="text-muted mt-3"style={{ lineHeight: "1.8"}}>
            {" "}
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="Media/images/intradayTrades.svg"className="text-muted mb-3"  alt="" style={{width:"90%"}} />
          <h1 className="fs-2"> Intraday and F&O trades</h1>
          <p className="text-muted mt-3" style={{ lineHeight: "1.8"}}>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="Media/images/pricingMF.svg"className="text-muted mb-3"  alt=""style={{width:"90%"}}  />
          <h1 className="fs-2">Free direct MF</h1>
          <p className="text-muted mt-3"style={{ lineHeight: "1.8"}}>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
