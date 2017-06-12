/**
 * Created by korman on 03.06.17.
 */

import React from 'react';
import PageLoader from '../parts/PageLoader';
import Header from '../parts/Header';
import Config from '../Config';
import axios from 'axios';

export default class Login extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            user: ''
        };
    }

    componentDidMount(props){
        const config = new Config();
        const apiUrl = config.baseUrl;
        const userId = window.localStorage.getItem('user_id');

        axios.get(apiUrl + 'coupon/consumer-mock/rest/0').then(response => {
            console.log(JSON.stringify(response.data.socialDataProfile));
            this.setState({user: JSON.stringify(response.data.socialDataProfile)});

        }).catch(function(error){
            console.log(error);
        });
    }

    render(){
        const config = new Config();

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
                                    <a href={`${config.baseFrontUrl}?user=${this.state.user}`} className="login-button button button-blue button-fullscreen">Mock Login</a>
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