/**
 * Created by korman on 03.06.17.
 */

import React from 'react';
import { Link } from 'react-router-dom';

export default class Menu extends React.Component {

    render(){
        return (
            <div className="footer-menu footer-menu-light">
                <Link to="/"><i className="fa zan-coupon"></i>Coupons</Link>
                <Link to="/stores"><i className="fa zan-coupon"></i>Stores</Link>
                <Link to="/profile"><i className="fa zan-coupon"></i>Profile</Link>

                {/*<a href="main.html" className="zan-active" ><i className="fa zan-coupon"></i>Coupons</a>*/}
                {/*<a href="stores.html" ><i className="fa zan-store"></i>Stores</a>*/}
                {/*<a href="scan.html" ><i className="fa zan-scan"></i>Scan</a>*/}
                {/*<a href="messages.html" ><i className="fa zan-message"></i>Messages</a>*/}
                {/*<a href="profile.html" ><i className="fa zan-profile"></i>Profile</a>*/}
            </div>
        );
    }
}