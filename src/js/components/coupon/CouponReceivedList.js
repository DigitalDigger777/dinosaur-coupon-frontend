/**
 * Created by korman on 03.06.17.
 */

import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Config from '../Config';

export default class CouponReceivedList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            countPages: 1,
            items: []
        }
    }

    componentDidMount(props){
        const config = new Config();
        const apiUrl = config.baseUrl;
        const userId = window.localStorage.getItem('user_id');

        axios.get(apiUrl + 'coupon/consumer-received/rest/0', {
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
            console.log(this.state);
        }).catch(function(error){
            console.log(error);
        });
    }

    render(){
        if (this.state.items.length > 0) {
            const config = new Config();

            return (
                <div>
                {
                    this.state.items.map((item, index) =>
                        <div key={index} className="zan-card zan-container-content">
                            <div className="zan-content-header">
                                <img className="preload-image"
                                     src={`${config.baseImagePath}images/logo/${item.coupon.shopper.logo}`}
                                     alt="img"
                                     style={{display: 'block', height: '100%'}}/>
                                <strong>ABC Restaurant</strong>
                            </div>
                            <div className="zan-container zan-red">
                                <h4>Spent over $20 get one free coffee</h4>
                                <b>Days left: 15</b>
                                <em>2016.09.12-2016.12.01
                                    <Link to={'coupon/1'}>
                                        <img className="footer-menu-icon" src="images/zan-icon/info-white.png" width="20"
                                             height="20" alt=""/>
                                    </Link>
                                </em>
                            </div>
                            <div className="zan-action-button">
                                <a href="coupon-alert-setting.html"><img src="images/zan-icon/alert.png" alt="" width="36"
                                                                         height="36"/></a>

                                <a href="#"><img src="images/zan-icon/add-to-apple-wallet-logo.png" alt="" height="36"/></a>
                            </div>
                            <div className="decoration"></div>
                            <div className="zan-block">
                                <span className="vertical-align-middle">Received from:</span>
                                <img className="quote-image" src="images/zan-images/Circle_Staats_Terry-01.png" alt=""/>
                            </div>
                        </div>
                    )
                }
                </div>
            );
        } else {
            return (
                <div>Load...</div>
            );
        }
    }
}