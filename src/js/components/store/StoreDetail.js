/**
 * Created by korman on 03.06.17.
 */

import Config from '../Config';
import React from 'react';
import PageLoader from '../parts/PageLoader';
import Header from '../parts/Header';
import Menu from '../parts/Menu';
import axios from 'axios';
import {Link} from 'react-router-dom';
import StoreDetailTabs from './store_detail_parts/StoreDetailTabs';

export default class StoreList extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            shopperId: props.match.params.id,
            item: null,
            tab: /\/store\/([\w\W]+)\/[0-9]+/.exec(props.match.url)[1]
        };



    }

    componentDidMount(props) {
        const config = new Config();

        axios.get(config.baseUrl + 'coupon/shopper/rest/' + this.state.shopperId).then(response => {
            this.setState({
                item: response.data
            });
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
                                <div className="zan-card zan-card-1 zan-container-content">
                                    <img className="preload-image"
                                         data-original="images/zan-images/the_loop_restaurant_logo_by_yasergrafix-d5f3q5p_PicViewer.jpg"
                                         alt="img" src="images/pictures/1t.jpg" style={{display: 'block'}}/>
                                    <div className="zan-wrap-content center-text">
                                        <strong>{this.state.item.name}</strong>
                                        <p className="address">{this.state.item.address}</p>
                                        <div className="center-text">
                                            <a href="#">
                                                <img src="images/zan-icon/call.png" alt="" width="32" height="32"/>
                                            </a>
                                            <a href="#">
                                                <img src="images/zan-icon/link.png" alt="" width="32" height="32"/>
                                            </a>
                                        </div>
                                        <div>
                                            <div className="float-left">Total Coupon <span>0</span></div>
                                            <div className="float-left">Your Coupon <span>0</span></div>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                </div>

                                <div className="home-tabs zan-filter-tabs">
                                    <Link to={`/store/all-coupons/${this.state.shopperId}`} className={`activate-tab-1 ${this.state.tab == 'all-coupons' ? 'active-home-tab' : ''}`}>
                                        All
                                    </Link>
                                    <Link to={`/store/your-coupons/${this.state.shopperId}`} className={`activate-tab-2 ${this.state.tab == 'your-coupons' ? 'active-home-tab' : ''}`}>
                                        Yous
                                    </Link>
                                    <div className="clear"></div>
                                </div>
                                <div id="tab-1">
                                    <StoreDetailTabs shopperId={this.state.shopperId} tab={this.state.tab}/>
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
                <div>Load...</div>
            );
        }
    }
}