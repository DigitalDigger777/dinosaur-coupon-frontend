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
                                    <a href="http://coupon.ppcgclub.com/?user=%7B%22openid%22%3A%22eKzoFrribDDwrJgraCEiignOvfMt%22%2C%22nickname%22%3A%22Philip+Neat%22%2C%22sex%22%3A0%2C%22language%22%3A%22en%22%2C%22city%22%3A%22%22%2C%22province%22%3A%22%22%2C%22country%22%3A%22UA%22%2C%22headimgurl%22%3A%2210_p.jpg%22%2C%22privilege%22%3A%5B%5D%2C%22unionid%22%3A%22CEBthqovbXpmBMFwaPRkJKJmgtnz%22%7D" className="login-button button button-blue button-fullscreen">Mock Login</a>
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