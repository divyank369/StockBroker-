import React from "react";

function Footer() {
  return (
    <footer  style={{backgroundColor:"rgb(240, 240, 240)"}}>
    <div className="container border-top mt-5 p-4">
      <div className="row mt-5">
        <div className="col-3">
          <img src="/Media/images/logo.svg" alt="" style={{ width: "50%" }} />
          <p>&copy; 2010 - 2026, Zerodha Broking Ltd. All rights reserved.</p>
        </div>
        <div className="col-3">
          <h5>Company</h5>
          <a href="">Philosophy</a>
          <br />
          <a href="">Press & media</a>
          <br />
          <a href="">Careers</a>
          <br />
          <a href="">Zerodha Cares (CSR)</a>
          <br />
          <a href="">Zerodha.tech</a>
          <br />
          <a href="">Open source</a>
          <br />
          <a href="">Referral program</a>
          <br />
          <a href="">About</a>
        </div>
        <div className="col-3">
          <h5>Products</h5>
          <a href="">Stocks</a>
          <br />
          <a href="">Options</a>
          <br />
          <a href="">Futures</a>
          <br />
          <a href="">mutual funds</a>
          <br />
          <a href="">Direct mutual funds</a>
          <br />
        </div>
        <div className="col-3">
          <h5>Support</h5>
          <a href="">Contact us</a>
          <br />
          <a href="">Support portal</a>
          <br />
          <a href="">How to file a complaint?</a>
          <br />
          <a href="">Status of your complaints</a>
          <br />
          <a href="">Bulletin</a>
          <br />
          <a href="">Circular</a>
          <br />
          <a href="">Z-Connect blog</a>
          <br />
          <a href="">Downloads</a>
        </div>
        {/* <div className="col-2">
            <h5>Quick Links</h5>
            <a href="">Upcoming IPOs</a><br />
            <a href="">Brokerage charges</a><br />
            <a href="">Market holidays</a><br />
            <a href="">Economic calendar</a><br />
            <a href="">Calculators</a><br />
            <a href="">Markets</a><br />
            <a href="">Sectors</a><br />
            <a href="">Gift Nifty</a>
        </div> */}
      </div>
          <div className="mt-5 ">
               <p className="text-muted" style={{ fontSize: "12px", marginTop: "20px" }}>
        Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI Registration
        no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking
        Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha
        Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
        School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For
        any complaints pertaining to securities broking please write to
        complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure
        you carefully read the Risk Disclosure Document as prescribed by SEBI |
        ICF
      </p>

      <p  className="text-muted" style={{ fontSize: "12px", marginTop: "20px" }}>
        Procedure to file a complaint on SEBI SCORES: Register on SCORES portal.
        Mandatory details for filing complaints on SCORES: Name, PAN, Address,
        Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy
        redressal of the grievances
      </p>

      <p className="text-muted" style={{ fontSize: "12px", marginTop: "20px" }} >
        Smart Online Dispute Resolution | Grievances Redressal Mechanism
    </p>

      <p className="text-muted" style={{ fontSize: "12px", marginTop: "20px" }}>
        Investments in securities market are subject to market risks; read all
        the related documents carefully before investing.
      </p>
      <p className="text-muted" style={{ fontSize: "12px", marginTop: "20px" }}>
        Attention investors:<br/> 1) Stock brokers can accept securities as margins
        from clients only by way of pledge in the depository system w.e.f
        September 01, 2020. <br />2) Update your e-mail and phone number with your
        stock broker / depository participant and receive OTP directly from
        depository on your e-mail and/or mobile number to create pledge.<br /> 3)
        Check your securities / MF / bonds in the consolidated account statement
        issued by NSDL/CDSL every month.
      </p>

      <p className="text-muted" style={{ fontSize: "12px", marginTop: "20px" }}>
        India's largest broker based on networth as per NSE. NSE broker
        factsheet
      </p>
      <p className="text-muted" style={{ fontSize: "12px", marginTop: "20px" }}>
        "Prevent unauthorised transactions in your account. Update your mobile
        numbers/email IDs with your stock brokers. Receive information of your
        transactions directly from Exchange on your mobile/email at the end of
        the day. Issued in the interest of investors. KYC is one time exercise
        while dealing in securities markets - once KYC is done through a SEBI
        registered intermediary (broker, DP, Mutual Fund etc.), you need not
        undergo the same process again when you approach another intermediary."
        Dear Investor, if you are subscribing to an IPO, there is no need to
        issue a cheque. Please write the Bank account number and sign the IPO
        application form to authorize your bank to make payment in case of
        allotment. In case of non allotment the funds will remain in your bank
        account. As a business we don't give stock tips, and have not authorized
        anyone to trade on behalf of others. If you find anyone claiming to be
        part of Zerodha and offering such services, please create a ticket here.
      </p>

      <p className="text-muted"  style={{ fontSize: "12px", marginTop: "20px" }}>
        *Customers availing insurance advisory services offered by Ditto
        (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent
        (Composite) License No CA0738) will not have access to the exchange
        investor grievance redressal forum, SEBI SCORES/ODR, or arbitration
        mechanism for such products.
      </p>
      <div className="row border-top pt-3 mt-4 text-muted" style={{ fontSize: "13px" ,fontWeight:"500"}}>
  <div className="col text-center">
    <a href="" className="mx-2 text-decoration-none text-muted">NSE</a>
    <a href="" className="mx-2 text-decoration-none text-muted">BSE</a>
    <a href="" className="mx-2 text-decoration-none text-muted">MCX</a>
    <a href="" className="mx-2 text-decoration-none text-muted">Terms & conditions</a>
    <a href="" className="mx-2 text-decoration-none text-muted">Policies & procedures</a>
    <a href="" className="mx-2 text-decoration-none text-muted">Privacy policy</a>
    <a href="" className="mx-2 text-decoration-none text-muted">Disclosure</a>
    <a href="" className="mx-2 text-decoration-none text-muted">For investor's attention</a>
    <a href="" className="mx-2 text-decoration-none text-muted">Investor charter</a>
  </div>
</div>
          </div>
    </div>
    </footer>
  );
}

export default Footer;
