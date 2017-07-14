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
import MessageList from './MessageList';

export default class BodyMessage extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            user: true,
            status: <img src="http://dev.coupon-mobile/images/preload.gif" style={{ margin: '0 auto'}} width={'50px'} alt=""/>
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
                                <MessageList page={1}/>
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

