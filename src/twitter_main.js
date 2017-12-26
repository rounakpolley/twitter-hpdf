import React, { Component } from 'react';
import muiTheme from './theme.js';
import TwitterBase from './twitter_base.js';

class TwitterMain extends Component {
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                <TwitterBase />
            </div>
        )
    }
}

export default TwitterMain;
