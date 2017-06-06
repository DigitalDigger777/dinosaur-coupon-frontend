/**
 * Created by korman on 03.06.17.
 */

import React from 'react';
import CouponReceivedList from './CouponReceivedList';
import CouponCouponsList from './CouponCouponsList';
import CouponFriendList from './CouponFriendList';

export default class CouponList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: props.tab
        };
        console.log(props);
    }

    componentWillReceiveProps(props) {
        console.log(props);
    }

    render(){
        if (this.state.tab == 'received') {
            return(
                <CouponReceivedList/>
            )
        }

        if (this.state.tab == 'coupons') {
            return(
                <CouponCouponsList/>
            )
        }

        if (this.state.tab == 'friends') {
            return(
                <CouponFriendList/>
            )
        }
    }
}