import Config from './components/Config';
import React from 'react';
import ReactDOM from 'react-dom';
import BodyCoupon from './components/coupon/BodyCoupon';
import BodyStore from './components/store/BodyStore';
import Profile from './components/user/Profile';
import Login from './components/user/Login';
import LoginWechat from './components/user/LoginWechat';
import CouponDetail from './components/coupon/CouponDetail';
import CouponFriendList from './components/coupon/CouponFriendList';
import CouponReceivedList from './components/coupon/CouponReceivedList';
import StoreDetail from './components/store/StoreDetail';
import CouponFriendDetail from './components/coupon/CouponFriendDetail';

//
// import BodyEvent from './components/event/BodyEvent';
// import BodyEventDetail from './components/event/detail/BodyEventDetail';
// import CouponDetail from './components/coupon/CouponDetail';
// import CouponRedeem from './components/coupon/CouponRedeem';
// import Login from './components/user/Login';


// import { Router } from 'react-router';
import { HashRouter,Route, hashHistory } from 'react-router-dom'
import axios from 'axios';
// import BodyEventDetailFriend from './components/event/detail/BodyEventDetailFriend';

export default class Index extends React.Component{
    constructor(){
        super();
        this.state = {
            url: ''
        };
    }

    componentDidMount()
    {
        const config = new Config();
        const apiUrl = config.baseUrl;

        //get login url
        axios.get(apiUrl + 'wechat/build-get-code-url').then(response => {
            console.log(response.data.url);

            this.setState({url: response.data.url});
            //window.location = response.data.url;

        }).catch(error => {
            console.log(error);
        });
    }

    render(){

        const userJsonStr = window.localStorage.getItem('user');
        const matchUser = /\?user=([\w\W]+)/.exec(window.location.search);

        const user      = matchUser ? JSON.parse(decodeURI(matchUser[1])) : null;
        //console.log(user);
        if (!userJsonStr && user == null) {
            if (this.state.url != '') {
                window.location = this.state.url;
            }
        }

        if (user != null) {
            let config = new Config();

            axios.post(config.baseUrl + 'coupon/consumer/rest/0', {
                socialId: user.unionid,
                socialDataProfile: user
            }).then(result => {

                window.localStorage.setItem('user_id', result.data.id);
                window.localStorage.setItem('user', JSON.stringify(user));
                window.location = '/';
            }).catch(error => {
                console.log(error);
            });



        }
        //console.log('root');

        return (
            <HashRouter history={hashHistory}>
                <div>
                    <Route exact path="/coupon/coupons/list" component={BodyCoupon} />
                    <Route exact path="/" component={BodyCoupon} />
                    <Route exact path="/coupon/friend/list" component={BodyCoupon} />
                    <Route exact path="/coupon/:id" component={CouponDetail} />
                    <Route exact path="/friend/coupon/:id" component={CouponFriendDetail} />
                    <Route exact path="/friend/coupon/:id/:issuedCouponId/:ownerUserId" component={CouponFriendDetail} />

                    <Route exact path="/stores" component={BodyStore} />
                    <Route exact path="/store/:id" component={StoreDetail} />
                    <Route exact path="/store/all-coupons/:id" component={StoreDetail} />
                    <Route exact path="/store/your-coupons/:id" component={StoreDetail} />

                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/login-wechat" component={LoginWechat} />
                    {/*<Route exact path="/event/:page" component={BodyEvent}></Route>*/}
                    {/*<Route exact path="/coupon/:page" component={BodyCoupon}></Route>*/}
                    {/*<Route exact path="/event/detail/:id/:tab" component={BodyEventDetail}></Route>*/}
                    {/*<Route exact path="/event/detail-friend/:id/:tab" component={BodyEventDetailFriend}></Route>*/}

                    {/*<Route path="/coupon/detail/:id" component={CouponDetail}></Route>*/}
                    {/*<Route exact path="/coupon/redeem/:id" component={CouponRedeem}></Route>*/}
                    {/*<Route exact path="/login" component={Login}></Route>*/}
                </div>
            </HashRouter>
        )
    }
}
ReactDOM.render(<Index/>,document.getElementById('page-transitions'));