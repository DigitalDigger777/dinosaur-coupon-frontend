/**
 * Created by korman on 08.05.17.
 */

import Config from '../Config';
import React from 'react';
import axios from 'axios';

export default class SentCouponToFriendPopup extends React.Component {

    constructor(props) {
        super(props);

        // this.state = {
        //     couponId: props.couponId,
        //     redeemStatus: props.redeemStatus
        // };

        this.imSure = this.imSure.bind(this);
    }

    imSure() {
        const config = new Config();
        const consumerId = window.localStorage.getItem('user_id');
        const couponId = this.state.couponId;

        axios.post(config.baseUrl + 'api/kankan/coupon/redeem', {
            consumerId: consumerId,
            couponId: couponId
        }).then(res => {
            $('#redeemPopup').modal('hide');
            this.props.changeRedeemStatus(0);
        });
    }

    render() {
        return (
            <div className="modal fade" id="sentCouponToFriendPopup" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        </div>
                        <div className="modal-body">
                            This coupon will be sent to your friend
                            <input type="text" placeholder="Enter friend ID" className="form-control" />
                        </div>
                        <div className="modal-footer" >
                            <button type="button" className="default-btn btn btn-info" data-dismiss="modal">Go Back</button>
                            <button type="button" className="main-btn btn btn-success" onClick={this.imSure}>I'm Sure</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}