/**
 * Created by korman on 08.05.17.
 */

import React from 'react';
import { Redirect } from 'react-router';

export default class RedeemCouponPopup extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            redirect: false
        }

        this.redirect = this.redirect.bind(this);
    }

    redirect() {
        this.setState({redirect: true});
    }

    imSure() {

    }

    render() {
        return (
            <div className="modal fade" id="redeemCouponPopup" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        </div>
                        <div className="modal-body">
                            This coupon will be marked as redeemed. You can't use it any more!
                        </div>
                        <div className="modal-footer" >
                            <button type="button" className="default-btn btn btn-info" data-dismiss="modal">Go Back</button>
                            <button type="button" className="main-btn btn btn-success" onClick={this.imSure}>I'm Sure</button>
                        </div>
                    </div>
                </div>
                {this.state.redirect && (
                    <Redirect to="/"/>
                )}
            </div>
        );
    }
}
