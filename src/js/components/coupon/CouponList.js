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
            tab: props.tab,
            page: 1
        };
        console.log(props);
    }

    componentDidMount(props) {
        console.log('Coupon list init: ', props);

        $('#page-content-scroll').on('scroll', e => {
            const scrollHeight = $('#page-content-scroll')[0].scrollHeight;
            const scrollTop    = $('#page-content-scroll')[0].scrollTop;
            const height       = $('#page-content-scroll').height();

            let page = this.state.page;

            console.log((scrollHeight - scrollTop), ':', height);

            if ((scrollHeight - scrollTop) == height) {
                //console.log(e.currentTarget.scrollTop, contentHeight, contentOffset, cardHeight, visibleH, countVisibleCard, i);
                page++;
                this.setState({page: page});
            }
        });
    }

    render(){
        // if (this.state.tab == 'received') {
        //     return(
        //         <CouponReceivedList page={this.state.page} />
        //     )
        // }

        if (this.state.tab == 'coupons') {
            return(
                <CouponCouponsList page={this.state.page} />
            )
        }

        if (this.state.tab == 'friends') {
            return(
                <CouponFriendList page={this.state.page} />
            )
        }
    }
}