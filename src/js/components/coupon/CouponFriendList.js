/**
 * Created by korman on 03.06.17.
 */

import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import CouponListShopperName from './parts/CouponListShopperName';
import Config from '../Config';

export default class CouponFriendList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            countPages: 1,
            items: [],
            status: 'Load...'
        }
    }
    SentCouponToFriend(e, issuedCoupon){
        e.preventDefault();
        $('#sentCouponToFriendPopup').modal('show');
        console.log(JSON.stringify(issuedCoupon));
        window.localStorage.removeItem('issuedCoupon');
        window.localStorage.setItem('issuedCoupon', JSON.stringify(issuedCoupon));
        const key = $(e.currentTarget).closest('[key]').attr('key');
        console.log(key);
    }

    componentDidMount(props){
        const config = new Config();
        const apiUrl = config.baseUrl;
        const userId = window.localStorage.getItem('user_id');

        axios.get(apiUrl + 'coupon/consumer-issued-friend/rest/0', {
            params: {
                method: 'LIST',
                page: 1,
                items_on_page: 5,
                consumerId: userId
            }
        }).then(response => {
            console.log(response.data.items);
            this.setState({countPages:response.data.count_pages});
            this.setState({items: response.data.items});
            this.setState({status: 'List empty'});
            console.log(this.state);
        }).catch(function(error){
            console.log(error);
        });
    }

    render(){

        if (this.state.items.length > 0) {
            const config = new Config();
            const ownerUserId = window.localStorage.getItem('user_id');
            console.log(ownerUserId);
            return (
                <div>
                    {
                        this.state.items.map((item, index) =>
                            <div key={index} className="zan-card zan-container-content">

                                <CouponListShopperName item={item}/>
                                <div className="zan-container zan-red">
                                    <h4>{item.issued_coupon.coupon.content}</h4>
                                    <b>Days left: 15</b>
                                    <em>{item.startTimeFormat}-{item.expiredTimeFormat}
                                        <Link to={`/friend/coupon/${item.issued_coupon.coupon.id}/${item.issued_coupon.id}/${ownerUserId}`}>
                                            <img className="footer-menu-icon" src="images/zan-icon/info-white.png" width="20" height="20" alt=""/>
                                        </Link>
                                    </em>
                                </div>

                                <div className="zan-action-button">
                                    <a href="#" onClick={(e, issuedCoupon) => this.SentCouponToFriend(e, item.issued_coupon)}>
                                        <img src="images/zan-icon/send.png" alt="" width="36" height="36"/>
                                    </a>
                                </div>
                            </div>
                        )
                    }
                </div>
            );
        } else {
            return (
                <div>{this.state.status}</div>
            );
        }
    }
}