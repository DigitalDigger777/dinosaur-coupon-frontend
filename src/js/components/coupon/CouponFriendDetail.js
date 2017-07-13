/**
 * Created by korman on 03.06.17.
 */

import React from 'react';
import axios from 'axios';
import PageLoader from '../parts/PageLoader';
// import Header from '../parts/Header';
import Menu from '../parts/Menu';
import Config from '../Config';
import AcceptCouponPopup from '../popup/AcceptCouponPopup';
import wx from 'weixin-jsapi';

export default class CouponFriendDetail extends React.Component {

    constructor(props){
        super(props);
        console.log(props);

        this.state = {
            couponId: props.match.params.id,
            issuedCouponId: props.match.params.issuedCouponId,
            ownerUserId: props.match.params.ownerUserId,
            userId: window.localStorage.getItem('user_id'),
            status: 'Load...',
            wxReady: false
        }
    }

    accept(e){
        e.preventDefault();
        const config = new Config();

        const user               = JSON.parse(window.localStorage.getItem('user'));

        const fromConsumerId     = this.state.ownerUserId;
        const toConsumerId       = window.localStorage.getItem('user_id');
        const couponId           = this.state.couponId;
        const issuedCouponId     = this.state.issuedCouponId;

        axios.post(config.baseUrl + 'coupon/issued-coupon-accept/rest/0', {
            consumerId: toConsumerId,
            fromConsumerId: fromConsumerId,
            couponId: couponId,
            issuedCouponId: issuedCouponId,
            sourceType: 2,
            source: JSON.stringify({
                fromConsumerId: fromConsumerId,
                issuedCouponId: issuedCouponId,
                headimgurl: user.headimgurl,
                nickname: user.nickname
            })
        }).then(res => {
            $('#acceptCouponPopup').modal('show');
        });
    }

    componentWillMount() {
        // const config = new Config();

        // wx.config({
        //     debug: true, // Enables debugging mode. Return values of all APIs called will be shown on the client. To view the sent parameters, open the log view of developer tools on a computer browser. The parameter information can only be printed when viewed from a computer.
        //     appId: config.weChatConfig.oa_appid, // Required, unique identifier of the official account
        //     timestamp: '1497742499', // Required, timestamp for the generated signature
        //     nonceStr: 'qMmvgVTJFAB0wkUt', // Required, random string for the generated signature
        //     signature: config.weChatConfig.signature, // Required, signature. See Appendix 1.
        //     jsApiList: [
        //         'onMenuShareTimeline',
        //         'onMenuShareAppMessage'
        //     ] // Required, list of JS APIs to be used. See Appendix 2 for the list of all JS APIs
        // });
        //
        // wx.ready(() => {
        //     this.state.wxReady = true;
        //
        //     wx.onMenuShareAppMessage({
        //         title: 'Test', // Sharing title
        //         desc: 'test test', // Sharing description
        //         link: 'http://coupon.ppcgcloub.com', // Sharing link
        //         imgUrl: '', // Sharing image URL
        //         type: 'link', // Sharing type, such as “music”, “video “ or “link”. It is “link” by default.
        //         dataUrl: null, // The data URL should be provided for items of type “music” or “video”. It is null by default.
        //         success: function () {
        //             // Callback function executed after a user confirms sharing
        //         },
        //         cancel: function () {
        //             // Callback function executed after a user cancels sharing
        //         }
        //     });
        // });
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
            // this.setState({status: 'Coupon not found'});
            console.log(this.state);
        }).catch(function(error){
            console.log(error);
        });
    }

    render(){
        if (this.state.item) {
            const config = new Config();

            return (
                <div>
                    <PageLoader/>
                    <AcceptCouponPopup/>

                    <div id="page-content" className="page-content fadeIn page-content show-containers">
                        <div id="page-content-scroll">

                            <div className="content">
                                <div className="zan-container-content">
                                    <div className="zan-content-header">
                                        <h2>
                                            { this.state.item.shopper.logo && (
                                                <img className="preload-image" data-original={`${config.baseImagePath}logos/${this.state.item.shopper.logo}`} alt="" width="40"/>
                                            )}

                                            { !this.state.item.shopper.logo && (
                                                <img className="preload-image" data-original="images/zan-images/u150.png" alt="img" width="40"/>
                                            )}

                                            { this.state.item.shopper.name }
                                        </h2>
                                        <h1 className="zan-red">{ this.state.item.title }</h1>
                                    </div>
                                    <div className="zan-content">
                                        <div className="zan-title-coupon">
                                            <img className="preload-image"
                                                 data-original="images/zan-images/friends-coupon.png" alt="img"
                                                 height="50" style={{margin: '0 auto'}}/>
                                            <span>Friend's coupon</span>
                                        </div>

                                        <div className="zan-container zan-container-detail">
                                            <h2>{ this.state.item.content }</h2>
                                            <b>Days left: {this.state.daysLeft < 0 ? 'expired' : this.state.daysLeft}</b><br/>
                                            <em>{this.state.startTime} - {this.state.expiredTime}</em>
                                        </div>
                                        <div className="center-text">

                                        </div>
                                        { this.state.userId != this.state.ownerUserId && (
                                            <div>
                                                <a href="#" onClick={e  => this.accept(e)} className="login-button button button-blue button-fullscreen">Accept</a>
                                            </div>
                                        )}

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