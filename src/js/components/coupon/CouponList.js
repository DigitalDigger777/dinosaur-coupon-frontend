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
        console.log(props);

        $('#page-content-scroll').on('scroll', e => {
            const pageContetnH      = $('#page-content-scroll').height();
            const footerMenuH       = $('.footer-menu').height();
            const visibleH          = pageContetnH - footerMenuH - $('.header').height();

            let page = this.state.page;

            if (e.currentTarget.scrollTop > (visibleH/2) * page) {
                //console.log(e.currentTarget.scrollTop, contentHeight, contentOffset, cardHeight, visibleH, countVisibleCard, i);
                page++;
                this.setState({page: page});

            }
        });
    }

    render(){
        if (this.state.tab == 'received') {
            return(
                <CouponReceivedList page={this.state.page} />
            )
        }

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