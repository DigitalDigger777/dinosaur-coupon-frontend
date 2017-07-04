/**
 * Created by korman on 03.06.17.
 */

import React from 'react';
import { Link } from 'react-router-dom';

export default class Menu extends React.Component {
    constructor(props){
        super(props);

        console.log('menu', window.location.hash);
        this.state = {
            active: 'coupon',
            activeCoupon: '',
            activeStores: '',
            activeMessages: ''
        }
    }

    componentWillMount(){

        switch (window.location.hash) {
            case '#/':
                    this.state.activeCoupon = 'zan-active';
                break;
            case '#/coupon/friend/list':
                    this.state.activeStores = 'zan-active';
                break;
            case '#/stores':
                    this.state.activeStores = 'zan-active';
                break;
            case '#/messages':
                    this.state.activeMessages = 'zan-active';
                break;
        }

        console.log('mmm', this.state);
    }

    render(){

        return (
            <div className="footer-menu footer-menu-light">
                <Link to="/"><i className={`fa zan-coupon ${this.state.activeCoupon}`}></i>Coupons</Link>
                <Link to="/stores"><i className={`fa zan-coupon ${this.state.activeStores}`}></i>Stores</Link>
                <Link to="/messages"><i className={`fa zan-coupon ${this.state.activeMessages}`}></i>Messages</Link>
                {/*<Link to="/profile"><i className="fa zan-coupon"></i>Profile</Link>*/}

                {/*<a href="main.html" className="zan-active" ><i className="fa zan-coupon"></i>Coupons</a>*/}
                {/*<a href="stores.html" ><i className="fa zan-store"></i>Stores</a>*/}
                {/*<a href="scan.html" ><i className="fa zan-scan"></i>Scan</a>*/}
                {/*<a href="messages.html" ><i className="fa zan-message"></i>Messages</a>*/}
                {/*<a href="profile.html" ><i className="fa zan-profile"></i>Profile</a>*/}
            </div>
        );
    }
}