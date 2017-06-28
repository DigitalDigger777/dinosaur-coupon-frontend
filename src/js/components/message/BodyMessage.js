/**
 * Created by korman on 03.06.17.
 */

import React from 'react';
import PageLoader from '../parts/PageLoader';
// import Header from '../parts/Header';
import Menu from '../parts/Menu';
import {Link} from 'react-router-dom';
import Bootstrap from 'bootstrap';
import SentCouponToFriendPopup from '../popup/SentCouponToFriendPopup';
import Config from '../Config';
import axios from 'axios';

export default class BodyMessage extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            user: true,
            status: 'Load messages...'
        };

    }

    componentWillMount() {

    }


    render(){

        if (this.state.user) {
            return (
                <div>
                    <PageLoader/>
                    {/*<Header/>*/}
                    <SentCouponToFriendPopup/>

                    <div id="page-content" className="page-content fadeIn page-content show-containers">
                        <div id="page-content-scroll">

                            <div className="zan-list-messages">
                                <a className="zan-contact-title" href="#">
                                    <img src="images/pictures/1t.jpg" alt="img" />
                                    <div className="zan-message-content">
                                        <strong>Zan Rewards</strong><br />
                                        <em>Your friend Luca accept your coupon</em>
                                    </div>
                                    <div className="zan-message-details">
                                        <span className="zan-time-ago">1h ago</span>
                                    </div>
                                </a>
                                <div className="decoration"></div>
                                <a className="zan-contact-title" href="#">
                                    <img src="images/pictures/1t.jpg" alt="img" />
                                    <div className="zan-message-content">
                                        <strong>Zan Rewards</strong><br />
                                        <em>Your friend Luca accept your coupon</em>
                                    </div>
                                    <div className="zan-message-details">
                                        <span className="zan-time-ago">2h ago</span>
                                    </div>
                                </a>
                                <div className="decoration"></div>
                                <a className="zan-contact-title" href="#">
                                    <img src="images/pictures/1t.jpg" alt="img" />
                                    <div className="zan-message-content">
                                        <strong>Zan Rewards</strong><br />
                                        <em>Buy one get one free from LE Cheture expiered in 3 days Use it before it gone away</em>
                                    </div>
                                    <div className="zan-message-details">
                                        <i className="fa fa-chevron-right"></i>
                                        <span className="zan-time-ago">4h ago</span>
                                    </div>

                                </a>
                                <div className="decoration no-visibility"></div>

                            </div>

                            <div className="footer footer-light"></div>

                        </div>
                    </div>

                    <Menu/>

                    <div className="background"></div>
                </div>
            );
        } else {
            return (
                <div>{this.state.status}</div>
            );
        }
    }
}

