import React, {Component} from 'react';
import muiTheme from '../theme.js';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

const userStyles = {
    paper : { backgroundColor: muiTheme.aside.backgroundColor, border: '1px solid #1a1a1a',
              height: 'wrap-content', width: muiTheme.aside.width, marginTop: 10, 
              textAlign: 'left', display: 'inline-block'},
    avatar: { marginLeft: 8, marginTop: -40, border: '3px solid #22244e'},
    links:  {marginTop: -35, marginLeft: 95},
    name:   { fontSize: 'larger', color: muiTheme.palette.primaryTextColor, fontWeight: 700 },
    at:     { color: muiTheme.palette.subTextColor},
    startsN:{ color: muiTheme.palette.secondaryTextColor, marginLeft:20},
    startsV:{ color: muiTheme.palette.hashtagTextColor, fontWeight:900, textAlign:'center', fontSize:'large',
                marginLeft:20, marginRight: 45}
};

class TwitterUser extends Component{
    render(){
        return(
            <Paper style={userStyles.paper}>
                <img width={userStyles.paper.width-2} src={require("../images/my_banner.jpg")} />
                <Avatar style={userStyles.avatar} src={require("../images/my_big_avatar.jpg")} size={70} />
                <div style={userStyles.links}>
                    <strong style={userStyles.name}>Rounak Polley</strong><br/>
                    <span style={userStyles.at}>@polley_rounak</span>
                </div><br />
                <span style={userStyles.startsN}>Tweets &nbsp; </span>
                <span style={userStyles.startsN}>Following</span>
                <span style={userStyles.startsN}>Followers</span><br/>
                <span style={userStyles.startsV}>21</span>
                <span style={userStyles.startsV}>11</span>
                <span style={userStyles.startsV}>1</span><br /><br />
            </Paper>
        )
    }
}

export default TwitterUser;