/**
 * Created by korman on 03.06.17.
 */

import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Config from '../Config';

export default class CouponCouponsList extends React.Component {

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

        axios.get(apiUrl + 'coupon/rest/0', {
            params: {
                method: 'LIST',
                page: 1,
                items_on_page: 5
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
                                         style={{display: 'block', height: '100%'}}
                                         alt="img"/>
                                    <strong>{item.coupon.shopper.name}</strong>
                                </div>
                                <div className="zan-container zan-red">
                                    <h4>{item.coupon.content}</h4>
                                    <b>Days left: 15</b>
                                    <em>{ item.startTimeFormat }-{ item.expiredTimeFormat }
                                        <Link to={`/coupon/${item.coupon.id}`}>
                                            <img className="footer-menu-icon" src="images/zan-icon/info-white.png" width="20" height="20" alt=""/>
                                        </Link>
                                    </em>
                                </div>

                                <div className="zan-action-button">
                                    <a href="#">
                                        <img src="images/zan-icon/alert.png" alt="" width="36" height="36"/>
                                    </a>

                                    <a href="#">
                                        <img src="images/zan-icon/add-to-apple-wallet-logo.png" alt="" height="36"/>
                                    </a>
                                </div>
                            </div>
                        )

                    }

                </div>
            );
        } else {
            return(
                <div>Load...</div>
            );
        }
    }
}