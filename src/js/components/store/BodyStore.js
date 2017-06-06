/**
 * Created by korman on 03.06.17.
 */

import React from 'react';
import StoreList from './StoreList';
import PageLoader from '../parts/PageLoader';
import Header from '../parts/Header';
import Menu from '../parts/Menu';

export default class BodyStore extends React.Component {
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

                        <div className="content">
                            <StoreList />
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