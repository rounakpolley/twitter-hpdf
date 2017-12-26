import React, { Component } from 'react';
import muiTheme from './theme.js';
import TwitterAppBar from './components/AppBar.js';
import TwitterSubBar from './components/SubBar.js';
import TwitterUser from './components/User.js';
import TwitterTrends from './components/Trends.js';
import TwitterFollow from './components/Follow.js';
import TwitterMainPost from './components/MainPost.js';
import TwitterAadhaarPost from './components/AadhaarPost.js';
import TwitterRelatedSearches from './components/Related.js';

class TwitterBase extends Component{
    render(props){
        return(
            <div style={{backgroundColor: muiTheme.page.backgroundColor}}>
                {this.props.page === 0 
                    ?   <div>
                            <TwitterAppBar page={this.props.page} update1={this.props.update1} 
                                update2={this.props.update2} />
                            <div style={{display:'flex', flexDirection:'row', marginLeft:75}}>
                                <div style={{display:'flex', flexDirection:'column'}}>
                                    <TwitterUser />
                                    <TwitterTrends />
                                </div>
                                <TwitterMainPost />
                                <TwitterFollow />
                            </div>
                        </div>
                    :   <div>
                            <TwitterAppBar page={this.props.page} update1={this.props.update1} 
                                update2={this.props.update2} />
                            <TwitterSubBar />
                            <div style={{display:'flex', flexDirection:'row', marginLeft:75}}>
                                <div style={{display:'flex', flexDirection:'column'}}>
                                    <TwitterRelatedSearches />
                                    <TwitterFollow />
                                    <TwitterTrends />
                                </div>
                                <TwitterAadhaarPost />
                            </div>
                        </div>
                }
            </div>
        );
    }
}
//rearrange in compeletely<TwitterAadhaarPost />
export default TwitterBase;