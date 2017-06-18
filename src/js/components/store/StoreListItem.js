/**
 * Created by korman on 03.06.17.
 */

import Config from '../Config';
import React from 'react';
import {Link} from 'react-router-dom';


export default class StoreListItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            item: props.item
        }
        console.log(props);
    }

    componentDidMount() {
        $(".preload-image").lazyload({
            threshold : 100,
            effect : "fadeIn",
            container: $("#page-content-scroll")
        });
    }

    render(){
         const config = new Config();
         let logo = <img className="preload-image" data-original="images/zan-images/shop-logo.gif"
                          alt="img"
                          style={{display: 'block'}}/>;

         console.log(this.state.item.logo);
         if (this.state.item.logo) {

             logo = <img className="preload-image" data-original={`${config.baseImagePath}images/logo/${this.state.item.logo}`}
                               alt="img"
                               style={{display: 'block'}}/>;
         }

         return(
             <div className="zan-card zan-card-1 zan-container-content">
                 <Link to={`store/all-coupons/${this.state.item.id}`}>
                     {logo}

                     <div className="zan-wrap-content">
                         <strong>{this.state.item.name}</strong>
                         <p>&nbsp;</p>
                         <p>
                             <i className="fa">
                                 <img className="footer-menu-icon" src="images/zan-icon/coupon.png"
                                      width="24"
                                      height="24" alt=""/>
                             </i>
                             <span className="qty">5</span>
                             <i className="fa fa-chevron-right" aria-hidden="true"></i>
                         </p>
                     </div>
                 </Link>
             </div>
         );
    }
}