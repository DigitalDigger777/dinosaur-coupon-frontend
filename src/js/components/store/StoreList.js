/**
 * Created by korman on 03.06.17.
 */

import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class StoreList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            countPages: 1,
            items: []
        }
    }

    componentDidMount(props){
        axios.get('http://coupon-backend.ppcgclub.com/coupon/shopper/rest/0', {
            params: {
                method:'LIST',
                page:1,
                items_on_page:5
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
            return (
                <div>
                    {
                        this.state.items.map(item =>
                            <div key={item.id} className="zan-card zan-card-1 zan-container-content">
                                <Link to={`store/${item.id}`}>
                                    <img className="preload-image" data-original="images/zan-images/shop-logo.gif"
                                         alt="img"
                                         src="images/pictures/1t.jpg" style={{display: 'block'}}/>
                                    <div className="zan-wrap-content">
                                        <strong>{item.name}</strong>
                                        <p>&nbsp;</p>
                                        <p>
                                            <i className="fa">
                                                <img className="footer-menu-icon" src="images/zan-icon/coupon.png"
                                                     width="24"
                                                     height="24" alt=""/>
                                            </i>
                                            <span className="qty">5</span>
                                            <i className="fa fa-chevron-right" aria-hidden="true"></i>
                                        </p>
                                    </div>
                                </Link>
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