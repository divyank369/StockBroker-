import React from "react";

function Right({ imageUrl, productName, productDescription, learnMore }) {
  return (
    <div className="container">
      <div className="row p-5 ">
        <div className="col-5 p-5 mt-5" style={{ marginLeft: "20px",marginRight: "80px" }}>
          <h1 className="fs-3 text-muted">{productName}</h1>
          <p className="mt-4" style={{ lineHeight: "1.9" }}>
            {productDescription}
          </p>
          <div>
            <a href={learnMore || "#"} style={{ textDecoration: "none" }}>
              Learn More &nbsp;<i className="fa fa-long-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="col-6 " >
          <img src={imageUrl} alt={productName} style={{width:"90%"}}/>
        </div>
      </div>
    </div>
  );
}

export default Right;
