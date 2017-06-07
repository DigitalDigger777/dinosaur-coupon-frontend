/**
 * Created by korman on 03.06.17.
 */

import React from 'react';
import PageLoader from '../parts/PageLoader';
import Header from '../parts/Header';

export default class Login extends React.Component {
    render(){
        return(
            <div>
                <PageLoader/>
                <Header/>

                <div id="page-content" className="page-content">
                    <div id="page-content-scroll">

                        <div className="content zan-login-content">
                            <div className="container">
                                <div className="page-login full-bottom zan-page-login">

                                    <a href="https://open.weixin.qq.com/connect/qrconnect?appid=wxfca7a5406897fa7b&redirect_uri=http://coupon-backend.ppcgclub.com/wechat/userinfo&response_type=code&scope=snsapi_login&state=123#wechat_redirect" className="login-button button button-blue button-fullscreen">Login</a>
                                    <a href={`http://coupon.ppcgclub.com/?user={"openid":"eKzoFrribDDwrJgraCEiignOvfMt","nickname":"Philip Neat","sex":0,"language":"en","city":"","province":"","country":"UA","headimgurl":"10_p.jpg","privilege":[],"unionid":"CEBthqovbXpmBMFwaPRkJKJmgtnz"}`} className="login-button button button-blue button-fullscreen">Mock Login</a>
                                    <div className="clear"></div>

                                </div>
                            </div>
                        </div>
                        <div className="zan-footer-text center-text">
                            {/*<p>Don't have an account? <a href="sign-up-step-1.html">Sign up</a></p>*/}
                        </div>
                        <div className="footer footer-light">

                        </div>
                    </div>
                </div>

                <div className="background"></div>
            </div>
        );
    }
}