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

                                    <a href="#" className="login-button button button-blue button-fullscreen">Login</a>
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