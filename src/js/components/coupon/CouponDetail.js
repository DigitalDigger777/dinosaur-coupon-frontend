/**
 * Created by korman on 03.06.17.
 */

import React from 'react';
import axios from 'axios';
import PageLoader from '../parts/PageLoader';
import Header from '../parts/Header';
import Menu from '../parts/Menu';
import Config from '../Config';

export default class CouponDetail extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            couponId: props.match.params.id,
            status: 'Load...'
        }
    }

    componentDidMount(props){
        const config = new Config();
        const apiUrl = config.baseUrl;


        axios.get(apiUrl + 'coupon/rest/' + this.state.couponId).then(response => {
            console.log(response.data);
            this.setState({item:response.data[0]});
            this.setState({expiredTime: response.data.expiredTimeFormat});
            this.setState({startTime: response.data.startTimeFormat});
            this.setState({daysLeft: response.data.daysLeft});

            $(".preload-image").lazyload({
                threshold : 100,
                effect : "fadeIn",
                container: $("#page-content-scroll")
            });
            this.setState({status: 'Coupon not found'});
            console.log(this.state);
        }).catch(function(error){
            console.log(error);
        });
    }

    render(){
        if (this.state.item) {
            return (
                <div>
                    <PageLoader/>
                    <Header/>

                    <div id="page-content" className="page-content fadeIn page-content show-containers">
                        <div id="page-content-scroll">

                            <div className="content">
                                <div className="zan-container-content">
                                    <div className="zan-content-header">
                                        <h2>
                                            <img className="preload-image" data-original="images/zan-images/u150.png"
                                                 alt="img" width="40"/>
                                            { this.state.item.shopper.name }
                                        </h2>
                                        <h1 className="zan-red">{ this.state.item.title }</h1>
                                    </div>
                                    <div className="zan-content">
                                        <div className="zan-title-coupon">
                                            <img className="preload-image"
                                                 data-original="images/zan-images/friends-coupon.png" alt="img"
                                                 height="50" style={{margin: '0 auto'}}/>
                                            <span>{this.state.item.title}</span>
                                        </div>

                                        <div className="zan-container zan-container-detail">
                                            <h2>{ this.state.item.content }</h2>
                                            <b>Days left: {this.state.daysLeft}</b><br/>
                                            <em>{this.state.startTime}-{this.state.expiredTime}</em>
                                        </div>
                                        <div className="center-text">
                                            {/*<div className="zan-qr-code">*/}
                                                {/*<img className="preload-image"*/}
                                                     {/*data-original="images/zan-images/qr-code.png" alt="img"*/}
                                                     {/*width="100"/>*/}
                                            {/*</div>*/}
                                            {/*<div className="zan-coupon-number">172891</div>*/}
                                        </div>
                                        <div className="zan-content-footer">
                                            <div className="center-text">
                                                Offer expires December 4, 2016. Offer not valid on Value Deals menu
                                                items. Cannot be combined with any other promotional offer. One coupon
                                                can be redeemed per guest per visit. No cash value.
                                                <br/>Welcomed at part cipaning A&W Restaurants in Canada.
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="footer footer-light">

                            </div>
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