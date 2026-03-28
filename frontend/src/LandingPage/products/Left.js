import React from "react";

function Left({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row p-5">
        <div className="col-6"style={{marginLeft:"60px"}}>
          <img src={imageUrl} />
        </div>
        <div className="col-4 p-5" style={{marginLeft:"80px"}}>
          <h1 className="fs-3 text-muted">{productName}</h1>
          <p className="mt-4" style={{ lineHeight: "1.9" }}
    >{productDescription}</p>
          <div>
            <a href={tryDemo} style={{textDecoration:"none"}}>
              Try Demo &nbsp; <i class="fa fa-long-arrow-right"></i>
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href={learnMore} style={{marginLeft:"50px",textDecoration:"none"}}>
              Learn More &nbsp;<i class="fa fa-long-arrow-right"></i>
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="Media/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore}style={{marginLeft:"50px"}}>
              <img src="Media/images/appstoreBadge.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Left;
