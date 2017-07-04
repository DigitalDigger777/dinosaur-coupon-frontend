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
            status: 'Load...',
            page: props.page,
            lastPage: false
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
                page: this.state.page,
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

    componentWillReceiveProps(props){
        const config = new Config();
        const apiUrl = config.baseUrl;
        const userId = window.localStorage.getItem('user_id');

        axios.get(apiUrl + 'coupon/consumer-issued-friend/rest/0', {
            params: {
                method: 'LIST',
                page: props.page,
                items_on_page: 5,
                consumerId: userId
            }
        }).then(response => {
            if (response.data.items.length > 0 && !this.state.lastPage) {
                console.log(response.data.items);
                response.data.items.map(item => {
                    this.state.items.push(item);
                });

                this.setState({countPages: response.data.count_pages});
                // this.setState({items: response.data.items});
                this.setState({status: 'List empty'});
                console.log(this.state);
            } else {
                this.setState({lastPage: true});
            }
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
                            <div key={index} className="zan-card zan-card-1 zan-container-content">
                                <Link to={`/friend/coupon/${item.issued_coupon.coupon.id}/${item.issued_coupon.id}/${ownerUserId}`}>
                                    <CouponListShopperName item={item}/>

                                    <div className="zan-wrap-content">
                                        <strong>{item.issued_coupon.coupon.shopper.name} <span className="label label-success" style={{backgroundColor: '#887650'}}>Friend's coupon</span></strong>
                                        <p>{item.issued_coupon.coupon.title}</p>
                                        <div>

                                            <span className="qty">{ item.startTimeFormat } - { item.expiredTimeFormat }</span>
                                            <hr style={{marginTop: '0px', marginBottom: '0px'}}/>
                                            <p style={{width: '50px'}}>
                                                详情
                                                <span style={{paddingTop: '3px'}} className="fa fa-chevron-right" aria-hidden="true"></span>
                                            </p>
                                        </div>
                                    </div>
                                </Link>
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