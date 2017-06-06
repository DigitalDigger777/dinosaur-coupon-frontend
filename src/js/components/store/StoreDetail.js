/**
 * Created by korman on 03.06.17.
 */

import React from 'react';
import PageLoader from '../parts/PageLoader';
import Header from '../parts/Header';
import Menu from '../parts/Menu';

export default class StoreList extends React.Component {
    render(){
        return(
            <div>
                <PageLoader/>
                <Header/>

                <div id="page-content" className="page-content fadeIn page-content show-containers">
                    <div id="page-content-scroll">

                        <div className="content">
                            <div className="zan-card zan-card-1 zan-container-content">
                                <img className="preload-image" data-original="images/zan-images/the_loop_restaurant_logo_by_yasergrafix-d5f3q5p_PicViewer.jpg" alt="img" src="images/pictures/1t.jpg" style={{ display: 'block' }} />
                                    <div className="zan-wrap-content center-text">
                                        <strong>Le Chature Restaurant</strong>
                                        <p className="address">7957 Kings way, Burnaby</p>
                                        <div className="center-text">
                                            <a href="#"><img src="images/zan-icon/call.png" alt="" width="32" height="32" /></a>
                                            <a href="#"><img src="images/zan-icon/link.png" alt="" width="32" height="32" /></a>
                                        </div>
                                        <div>
                                            <div className="float-left">Total Coupon <span>15</span></div>
                                            <div className="float-left">Your Coupon <span>3</span></div>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                            </div>

                            <div className="home-tabs zan-filter-tabs">
                                <a className="activate-tab-1 active-home-tab" href="#">All</a>
                                <a className="activate-tab-2" href="#">Yous</a>
                                <div className="clear"></div>
                            </div>
                            <div id="tab-1">
                                <div className="zan-thumb-layout">
                                    <div className="zan-card zan-container-content">
                                        <a href="coupon-detail.html">
                                            <div className="zan-container zan-red">
                                                <h4>Spent over $20 get one free coffee</h4>
                                                <b>Days left: 15</b>
                                                <em>2016.09.12-2016.12.01</em>
                                            </div>
                                        </a>
                                        <div className="zan-action-button">
                                            <a href="#" className="show-dialog-add-coupon"><img src="images/zan-icon/coupon-add.png" alt="" width="28" height="28" /></a>
                                        </div>
                                    </div>
                                    <div className="zan-card zan-container-content">
                                        <a href="coupon-detail.html">
                                            <div className="zan-container zan-orange">
                                                <h4>Spent over $20 get one free coffee</h4>
                                                <b>Days left: 15</b>
                                                <em>2016.09.12-2016.12.01</em>
                                            </div>
                                        </a>
                                        <div className="zan-action-button">
                                            <a href="coupon-alert-setting.html"><img src="images/zan-icon/alert.png" alt="" width="36" height="36" /></a>

                                            <a href="#"><img src="images/zan-icon/add-to-apple-wallet-logo.png" alt="" height="36" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="tab-2">
                                <div className="zan-thumb-layout">
                                    <div className="zan-card zan-container-content">
                                        <a href="coupon-detail.html">
                                            <div className="zan-container zan-red">
                                                <h4>Spent over $20 get one free coffee</h4>
                                                <b>Days left: 15</b>
                                                <em>2016.09.12-2016.12.01</em>
                                            </div>
                                        </a>
                                        <div className="zan-action-button">
                                            <a href="coupon-alert-setting.html"><img src="images/zan-icon/alert.png" alt="" width="36" height="36"/></a>

                                            <a href="#"><img src="images/zan-icon/add-to-apple-wallet-logo.png" alt="" height="36" /></a>
                                        </div>
                                    </div>
                                    <div className="zan-card zan-container-content">
                                        <a href="coupon-detail.html">
                                            <div className="zan-container zan-orange">
                                                <h4>Spent over $20 get one free coffee</h4>
                                                <b>Days left: 15</b>
                                                <em>2016.09.12-2016.12.01</em>
                                            </div>
                                        </a>
                                        <div className="zan-action-button">
                                            <a href="coupon-alert-setting.html"><img src="images/zan-icon/alert.png" alt="" width="36" height="36"/></a>

                                            <a href="#"><img src="images/zan-icon/add-to-apple-wallet-logo.png" alt="" height="36" /></a>
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