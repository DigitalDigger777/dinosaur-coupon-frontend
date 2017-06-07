/**
 * Created by korman on 03.06.17.
 */

import React from 'react';
import CouponList from './CouponList';
import PageLoader from '../parts/PageLoader';
import Header from '../parts/Header';
import Menu from '../parts/Menu';
import {Link} from 'react-router-dom';

export default class BodyCoupon extends React.Component {

    constructor(props){
        super(props);

        let tab = 'received';

        if (props.location.pathname == '/coupon/friend/list') {
            tab = 'friends';
        }

        if (props.location.pathname == '/') {
            tab = 'received';
        }

        if (props.location.pathname == '/coupon/coupons/list') {
            tab = 'coupons';
        }

        this.state = {
            tab: tab
        }

        console.log(this.state);
    }

    render(){

        return (
            <div>
                <PageLoader/>
                <Header/>

                <div id="page-content" className="page-content fadeIn page-content show-containers">
                    <div id="page-content-scroll">
                        <div className="content">
                            <div className="home-tabs">
                                <Link to={'/'} className={`activate-tab-1 ${this.state.tab == 'received' ? 'active-home-tab' : ''}`}>Received</Link>
                                <Link to={'/coupon/coupons/list'} className={`activate-tab-2 ${this.state.tab == 'coupons' ? 'active-home-tab' : ''}`}>Coupons</Link>
                                <Link to={'/coupon/friend/list'} className={`activate-tab-3 ${this.state.tab == 'friends' ? 'active-home-tab' : ''}`}>Friend's</Link>
                                <div className="clear"></div>
                            </div>
                        </div>


                        <div className="content" id="tab-1">
                            <div className="zan-thumb-layout">
                                <CouponList tab={this.state.tab}/>
                            </div>
                        </div>


                        <div className="footer footer-light"></div>

                    </div>
                </div>

                <Menu/>

                <div className="background"></div>
            </div>
        );
    }
}

