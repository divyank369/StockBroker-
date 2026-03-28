import React from 'react';

function Stats() {
    return (  
        <div className="container p-3 mb-5">
            <div className="row text-center p-3">
               <div className='col-6 p-5'>
                <h1 className='fs-2 mb-5 text-muted' style={{textAlign:"left"}}>Trust with confidence</h1>

                <h2 className='fs-4'style={{textAlign:"left"}}>Customer-first always</h2>
                <p className="text-muted"style={{textAlign:"left"}}>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>

                <h2 className='fs-4' style={{textAlign:"left"}}>No spam or gimmicks</h2>
                <p className="text-muted"style={{textAlign:"left"}}>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>

                <h2 className='fs-4' style={{textAlign:"left"}}>The Zerodha universe</h2>
                <p className="text-muted"style={{textAlign:"left"}}>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                <h2 className='fs-4' style={{textAlign:"left"}}>Do better with money</h2>
                <p className="text-muted"style={{textAlign:"left"}}>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
               </div>
                <div className='col-6 p-3 '>
                    <div className='text-center'>
                        <img src="Media/images/ecosystem.png" style={{width:"85%"}}/>
                    <a href="#" className='mx-5' style={{textDecoration:"none"}}>ExploreProducts<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <a href="#" style={{textDecoration:"none"}}>Try Kite<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Stats;