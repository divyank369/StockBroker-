import React from 'react';

function Hero() {
    return (  
      <section className="container-fluid" id='supportHero'>
        <div className=" p-5 mb-3"id='supportWrapper'>
            <h3 >Support Portal</h3>
            <a href="">Track tickets</a>  
        </div>
        <div className="row p-5">
            <div className="col-6 p-5 ">
                <h1 className='fs-3'>Search for an answer or browse help topics to create</h1>
                <input placeholder='Eg. how do I activate F&O '/><br />
                <a href="">Track Account Opening </a>&nbsp;&nbsp;
                <a href="">Track Segment Activation</a>&nbsp;&nbsp;
                <a href="">Intraday Margins</a>&nbsp;&nbsp;
                <a href="">Kite User Manual</a>&nbsp;&nbsp;

            </div>
            <div className="col-6 p-5" >
                <h1 style={{marginLeft:"120px"}}>Featured</h1> <br />
               <ol>
                <li style={{marginLeft:"100px"}}> <a href="">Current Takeovers and Delisting-January 2024</a>
                </li>
                <li style={{marginLeft:"100px"}}><a href="">Track Segment activated</a></li>
               </ol>
            </div>
                
            </div>
      </section>
    );
}

export default Hero;