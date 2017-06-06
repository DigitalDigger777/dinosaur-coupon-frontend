/**
 * Created by korman on 03.06.17.
 */

import React from 'react';
import PageLoader from '../parts/PageLoader';
import Header from '../parts/Header';
import Menu from '../parts/Menu';

export default class Profile extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <PageLoader/>
                <Header/>

                <div id="page-content" className="page-content fadeIn page-content show-containers">
                    <div id="page-content-scroll">
                        <div className="content-fullscreen zan-content-fullscreen">
                            <div className="page-profile">
                                <div className="page-profile-header">
                                    <div className="float-left">
                                        <a href="images/pictures/5.jpg" className="show-gallery" title="Profile Image!">
                                            <img data-original="images/zan-images/avatar.png" className="preload-image" alt="img" />
                                        </a>
                                        <div className="zan-change-button">
                                            <a href="#">Change</a>
                                        </div>
                                    </div>
                                    <div className="float-left">
                                        <h4>Superman</h4>
                                    </div>
                                    <div className="clear"></div>
                                </div>
                                <div className="zan-profile-coupons">
                                    <a href="#">
                                        <span>Valid <br/> Coupons</span><br/>
                                        <span>12</span>
                                    </a>
                                    <a href="#">
                                        <span>Linked<br/>Shoppers</span><br/>
                                        <span>15</span>
                                    </a>
                                    <a href="#">
                                        <span>Friends<br/>Coupon</span><br/>
                                        <span>3</span>
                                    </a>
                                    <a href="#">
                                        <span>Coupon<br/>Sent</span><br/>
                                        <span>18</span>
                                    </a>
                                    <div className="clear"></div>
                                </div>

                                <form action="#" id="zan-personal-data">
                                    <div>
                                        <label for="zan-name">
                                            First and Last Name:</label>
                                        <input type="text" id="zan-name" />
                                    </div>
                                    <div>
                                        <label for="zan-nick-name">
                                            Nick Name:</label>
                                        <input type="text" id="zan-nick-name"/>
                                    </div>
                                    <div>
                                        <label for="zan-gender">Gender:</label>
                                        <select name="gender" id="zan-gender">
                                            <option value="">Not Specified</option>
                                            <option value="">Male</option>
                                            <option value="">Female</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label for="zan-phone">
                                            Tel:</label>
                                        <input type="text" id="zan-phone"/>
                                    </div>
                                    <div>
                                        <label for="zan-post-code">
                                            Post Code:</label>
                                        <input type="text" id="zan-post-code"/>
                                    </div>
                                    <div>
                                        <p>
                                            <a href="profile-change-password.html">Change Password<i className="fa fa-chevron-right"></i></a>
                                        </p>
                                    </div>
                                </form>
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
    }
}