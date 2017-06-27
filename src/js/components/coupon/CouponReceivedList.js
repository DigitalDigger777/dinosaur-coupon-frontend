/**
 * Created by korman on 03.06.17.
 *
 * Deprecated.
 */

import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import CouponListShopperName from './parts/CouponListShopperName';
import Config from '../Config';


export default class CouponReceivedList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            countPages: 1,
            items: [],
            status: 'Load...',
            user: null,
            page: props.page,
            lastPage: false
        }
    }

    componentDidMount(props){
        const config = new Config();
        const apiUrl = config.baseUrl;

        const userId = window.localStorage.getItem('user_id');


        axios.get(apiUrl + 'coupon/consumer-received/rest/0', {
            params: {
                method: 'LIST',
                page: this.state.page,
                items_on_page: 5,
                consumerId: userId
            }
        }).then(response => {
            console.log(response.data.items);
            this.setState({countPages: response.data.count_pages});
            this.setState({items: response.data.items});
            this.setState({status: 'List empty'});
            console.log(this.state);
        }).catch(function (error) {
            console.log(error);
        });

    }

    componentWillReceiveProps(props){
        const config = new Config();
        const apiUrl = config.baseUrl;
        const userId = window.localStorage.getItem('user_id');

        axios.get(apiUrl + 'coupon/consumer-received/rest/0', {
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
                //this.setState({items: response.data.items});
                this.setState({status: 'List empty'});
                console.log(this.state);
            } else {
                this.setState({lastPage:true});
            }
        }).catch(function (error) {
            console.log(error);
        });
    }

    render(){

        if (this.state.items.length > 0) {

            return (
                <div>
                    {
                        this.state.items.map((item, index) =>
                            <div key={index} className="zan-card zan-container-content">
                                <CouponListShopperName item={item}/>
                                <div className="zan-container zan-red">
                                    <h4>{item.issued_coupon.coupon.content}</h4>
                                    <b>Days left: {item.daysLeft}</b>
                                    <em>{ item.startTimeFormat } - { item.expiredTimeFormat }
                                        <Link to={`/coupon/${item.issued_coupon.id}`}>
                                            <img className="footer-menu-icon" src="images/zan-icon/info-white.png"
                                                 width="20" height="20" alt=""/>
                                        </Link>
                                    </em>
                                </div>
                                <div className="zan-action-button">
                                    {/*<a href="coupon-alert-setting.html">*/}
                                    {/*<img src="images/zan-icon/alert.png" alt="" width="36" height="36"/>*/}
                                    {/*</a>*/}

                                    {/*<a href="#">*/}
                                    {/*<img src="images/zan-icon/add-to-apple-wallet-logo.png" alt="" height="36"/>*/}
                                    {/*</a>*/}
                                </div>
                                <div className="decoration"></div>
                                <div className="zan-block">
                                    <span className="vertical-align-middle">Received from:</span>
                                    {
                                        JSON.parse(item.issued_coupon.source).headimgurl && (
                                            <img className="quote-image"
                                                 src={ JSON.parse(item.issued_coupon.source).headimgurl } alt=""/>
                                        )
                                    }

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