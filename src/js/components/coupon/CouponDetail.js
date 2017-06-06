/**
 * Created by korman on 03.06.17.
 */

import React from 'react';
import PageLoader from '../parts/PageLoader';
import Header from '../parts/Header';
import Menu from '../parts/Menu';

export default class CouponDetail extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <PageLoader/>
                <Header/>

                <div id="page-content" className="page-content fadeIn page-content show-containers">
                    <div id="page-content-scroll">

                        <div className="content">
                            <div className="zan-container-content">
                                <div className="zan-content-header">
                                    <h2>
                                        <img className="preload-image" data-original="images/zan-images/u150.png" alt="img" width="40" />
                                        Shop name
                                    </h2>
                                    <h1 className="zan-red">Free Coffee</h1>
                                </div>
                                <div className="zan-content">
                                    <div className="zan-title-coupon">
                                        <img className="preload-image" data-original="images/zan-images/friends-coupon.png" alt="img" height="50" style={{margin:'0 auto'}} />
                                        <span>Friend's Coupon</span>
                                    </div>

                                    <div className="zan-container zan-container-detail">
                                        <h2>Spent over $20 get one free coffee</h2>
                                        <b>Days left: 15</b><br/>
                                        <em>2016.09.12-2016.12.01</em>
                                    </div>
                                    <div className="center-text">
                                        <div className="zan-qr-code">
                                            <img className="preload-image" data-original="images/zan-images/qr-code.png" alt="img" width="100" />
                                        </div>
                                        <div className="zan-coupon-number">172891</div>
                                    </div>
                                    <div className="zan-content-footer">
                                        <div className="center-text">
                                            Offer expires December 4, 2016. Offer not valid on Value Deals menu items. Cannot be combined with any other promotional offer. One coupon can be redeemed per guest per visit. No cash value.
                                            <br/>Welcomed at part cipaning A&W Restaurants in Canada.
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="footer footer-light">

                        </div>
                    </div>
                </div>

                <Menu/>

                <div className="background"></div>
            </div>
        );
    }
}