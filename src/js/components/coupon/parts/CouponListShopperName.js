/**
 * Created by korman on 03.06.17.
 */

import React from 'react';
import Config from '../../Config';

export default class CouponListShopperName extends React.Component {

    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            item: props.item
        }
    }

    componentDidMount(props){
        $(".preload-image").lazyload({
            threshold : 100,
            effect : "fadeIn",
            container: $("#page-content-scroll")
        });
    }

    render(){
        const config = new Config();

        if (this.state.item.issued_coupon.coupon.shopper.logo != "") {
            return (

                    <img className="preload-image" data-original={`${config.baseImagePath}images/logo/${this.state.item.issued_coupon.coupon.shopper.logo}`} alt="img"/>

            );
        } else {
            return (
                    <img className="preload-image" data-original={`images/zan-images/u150.png`} alt="img" />

            );
        }
    }
}