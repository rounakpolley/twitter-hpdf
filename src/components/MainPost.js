import React, { Component } from 'react';
import muiTheme from '../theme.js';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import TextField from 'material-ui/TextField';

const postStyles = {
    newPost:{marginTop:10, marginLeft:15, marginRight:15},
    postCard : {backgroundColor: muiTheme.aside.backgroundColor, border:'1px solid #1a1a1a', width:565, height:68},
    avatar: {marginTop:15, marginLeft:20, marginBottom:15, border:'1px solid rgba(0, 0, 0, 0.7)'},
    attach: {color: muiTheme.palette.hashtagTextColor},
    input : {marginLeft: 80, marginTop: -65, marginBottom: 5, borderRadius: 10, height: 38,
                 width: 460, border: '1px solid #0074d8', backgroundColor: muiTheme.page.backgroundColor},
    textfield : {marginLeft: 20, width:400},
    hint:   {color: muiTheme.palette.primaryTextColor},
    card:   {backgroundColor: muiTheme.aside.backgroundColor, border: '1px solid #1a1a1a', width:565},
    name:   {color: muiTheme.palette.primaryTextColor, fontSize:'large'},
    sub:    {color: muiTheme.palette.primaryTextColor, marginTop: 5},
    at:     {color: muiTheme.palette.subTextColor},
    img:    {width:200, minWidth:'83%',marginLeft:75, border: '1px solid rgba(0, 0, 0, 0.7)', borderRadius:5},
    count:  {color:muiTheme.palette.secondaryTextColor}
};
const postData = {
    index:  [1,2,3,4],
    titleP: {1:'Hasura ',2:'Hasura ',3:'The Practical Dev ',4:'The Practical Dev '},
    titleS: {1:' @HasuraHQ · 5h',2:' @HasuraHQ · 6h',3:' @ThePracticalDev · 6h',4:' @ThePracticalDev · 8h'},
    avatar: {1:require("../images/p1.jpg"),2:require("../images/p1.jpg"),3:require("../images/p2.jpg"),
             4:require("../images/p2.jpg")},
    text:   {1:
             'Wishing everyone a merry Christmas and happy holidays!  - from all of us at Hasura :) #Christmas #HappyHolidays #startuplife',
             2:
             'Get started with a #ReactNative application that uses Hasura #BaaS features. It also has a ready to deploy #nodejs #helloworld #microservice using the #express framework. Clone & Deploy this #quickstart in 3 steps: http://bit.ly/2BUymwT  #react #expressjs @nodejs @NodeFan',
             3:
             'May all my fellow on-call devs enjoy a peaceful, downtime-free holiday season ❄️❤️',
             4:
             'When you stored the naughty/nice data in the blockchain this year because one of the elves went to a conference talk but it was a terrible idea and now you-re spending launch night debugging and grumbling under your breath about how stable Postgres would have been.'
            },
    reply:  {1:' ',2:' ',3:5,4:20},
    retweet:{1:8,2:2,3:115,4:102},
    likes:  {1:12,2:24,3:234,4:256},
    img:    {1:require("../images/mp1.jpg"),2:require("../images/mp2.png"),3:'',
             4:require("../images/mp4.gif")},
    isLiked:{1:true,2:true,3:false,4:false}
};

const ListPost  = (props) => (
            <Card containerStyle={postStyles.card}>
                <CardHeader 
                    title={<span><b style={postStyles.name}>{postData.titleP[props.num]}</b>
                                <a style={postStyles.at}>{postData.titleS[props.num]}</a></span>} 
                    subtitleStyle={postStyles.sub}
                    subtitle={postData.text[props.num]} avatar={postData.avatar[props.num]}
                    actAsExpander={false} showExpandableButton={true} />
                <CardMedia expandable={false}>
                    {postData.img[props.num] ==='' 
                        ? <img /> : <img style={postStyles.img} src={postData.img[props.num]} />}
                </CardMedia>
                <CardActions>
                    <IconButton style={{marginLeft:80}} iconStyle={{color:muiTheme.palette.secondaryTextColor}} tooltip="ReTweet">
                        <i class="material-icons">chat_bubble_outline</i>
                    </IconButton>
                    <sup style={postStyles.count}>{postData.reply[props.num]}</sup>
                    <IconButton style={{marginLeft:20}} iconStyle={{color:muiTheme.palette.secondaryTextColor}} tooltip="Reply">
                        <i class="material-icons">loop</i>
                    </IconButton>
                    <sup style={postStyles.count}>{postData.retweet[props.num]}</sup>
                    {postData.isLiked[props.num] 
                        ?   <IconButton style={{marginLeft:20}} iconStyle={{color:muiTheme.palette.liked}} tooltip="Undo Like">
                                <i class="material-icons">favorite</i>
                            </IconButton>
                        :   <IconButton style={{marginLeft:20}} iconStyle={{color:muiTheme.palette.secondaryTextColor}} tooltip="Like">
                                <i class="material-icons">favorite_border</i>
                            </IconButton>
                    }
                    <sup style={postStyles.count}>{postData.likes[props.num]}</sup>
                    <IconButton style={{marginLeft:20}} iconStyle={{color:muiTheme.palette.secondaryTextColor}} tooltip="Direct Message">
                        <i class="material-icons">mail_outline</i>
                    </IconButton>
                </CardActions>
            </Card>
);
const ShowMainPosts = () => {
    const numbers = postData.index;
    return(
        <div>{numbers.map( (number) => (<ListPost num={number} />) )}</div>
    );
};

class TwitterMainPost extends Component{
    render(){
        return(
            <div style={postStyles.newPost}>
                <Card containerStyle={postStyles.postCard}>
                    <Avatar src={require("../images/my_avatar.jpg")} size={40} 
                        style={postStyles.avatar}/>
                    <div style={postStyles.input}>
                        <TextField style={postStyles.textfield} underlineShow={false} 
                            hintText="What's happening?" 
                            hintStyle={postStyles.hint} inputStyle={postStyles.hint}/>
                        <i tootip="Add photos or videos" style={postStyles.attach} 
                            class="material-icons">crop_original</i>
                    </div>
                </Card>
                <ShowMainPosts />
                <br /><br /><br /><br />
            </div>
        )
    }
}

export default TwitterMainPost;