
import React from 'react';
import ReactDOM from 'react-dom';
import BodyCoupon from './components/coupon/BodyCoupon';
import BodyStore from './components/store/BodyStore';
import Profile from './components/user/Profile';
import Login from './components/user/Login';
import LoginWechat from './components/user/LoginWechat';
import CouponDetail from './components/coupon/CouponDetail';
import StoreDetail from './components/store/StoreDetail';
import CouponFriendDetail from './components/coupon/CouponFriendDetail';
import { HashRouter,Route, hashHistory } from 'react-router-dom'

export default class Index extends React.Component{
    constructor(){
        super();

    }

    render(){


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