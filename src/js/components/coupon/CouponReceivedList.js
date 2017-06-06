/**
 * Created by korman on 03.06.17.
 */

import React from 'react';
import {Link} from 'react-router-dom';

export default class CouponReceivedList extends React.Component {
    render(){
        return(
            <div className="zan-card zan-container-content">
                <div className="zan-content-header">
                    <img className="preload-image" data-original="images/zan-images/the_loop_restaurant_logo_by_yasergrafix-d5f3q5p_PicViewer.jpg" alt="img" />
                    <strong>ABC Restaurant</strong>
                </div>
                <div className="zan-container zan-red">
                    <h4>Spent over $20 get one free coffee</h4>
                    <b>Days left: 15</b>
                    <em>2016.09.12-2016.12.01
                        <Link to={'coupon/1'}>
                            <img className="footer-menu-icon" src="images/zan-icon/info-white.png" width="20" height="20" alt="" />
                        </Link>
                    </em>
                </div>
                <div className="zan-action-button">
                    <a href="coupon-alert-setting.html"><img src="images/zan-icon/alert.png" alt="" width="36" height="36" /></a>

                    <a href="#"><img src="images/zan-icon/add-to-apple-wallet-logo.png" alt="" height="36" /></a>
                </div>
                <div className="decoration"></div>
                <div className="zan-block">
                    <span className="vertical-align-middle">Received from:</span>
                    <img className="quote-image" src="images/zan-images/Circle_Staats_Terry-01.png" alt="" />
                </div>
            </div>
        );
    }
}