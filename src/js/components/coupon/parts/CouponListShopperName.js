/**
 * Created by korman on 03.06.17.
 */

import React from 'react';


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
        if (this.state.item.issued_coupon.coupon.shopper.logo != "") {
            return (

                <div className="zan-content-header">
                    <img className="preload-image"
                         data-original={`${config.baseImagePath}images/logo/${this.state.item.issued_coupon.coupon.shopper.logo}`}
                         style={{display: 'block', height: '100%'}}
                         alt="img"/>
                    <strong>{this.state.item.issued_coupon.coupon.shopper.name}</strong>
                </div>
            );
        } else {
            return (
                <div className="zan-content-header">
                    <img className="preload-image"
                         data-original={`images/zan-images/u150.png`}
                         style={{display: 'block', width: '80px'}}
                         alt="img" />
                    <strong>{this.state.item.issued_coupon.coupon.shopper.name}</strong>
                </div>
            );
        }
    }
}