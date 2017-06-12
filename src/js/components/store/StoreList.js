/**
 * Created by korman on 03.06.17.
 */

import Config from '../Config';
import React from 'react';
import axios from 'axios';
import StoreListItem from './StoreListItem';

export default class StoreList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            countPages: 1,
            items: [],
            status: 'Load...'
        }
    }

    componentDidMount(props){
        const config = new Config();

        axios.get(config.baseUrl + 'coupon/shopper/rest/0', {
            params: {
                method:'LIST',
                page:1,
                items_on_page:5
            }
        }).then(response => {
            //console.log(response.data.items);
            this.setState({countPages:response.data.count_pages});
            this.setState({items: response.data.items});
            this.setState({status: 'List empty'});
            //console.log(this.state);
        }).catch(function(error){
            console.log(error);
        });
    }

    render(){
        if (this.state.items.length > 0) {
            console.log(this.state.items);
            return (
                <div>
                    {
                        this.state.items.map((item, index) =>
                            <StoreListItem key={index} item={item} />
                        )
                    }
                </div>
            );
        } else {
            return (
                <div>{this.state.status}</div>
            );
        }
    }
}