import React, { Component } from 'react';
import muiTheme from '../theme.js';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';

const topStyles = {
    tag:        {color: muiTheme.aside.hashtagTextColor},
    people:     {color: muiTheme.palette.primaryTextColor, fontSize: 'larger',
                 marginLeft: 30, lineHeight: 2.1},
    peopleView: {color: muiTheme.aside.hashtagTextColor, marginLeft: 425},
    smallCard:  {width: 275, height: 287, marginLeft: 15, backgroundColor: muiTheme.aside.backgroundColor, 
                 border:'1px solid #1a1a1a'},
    postCard:   {backgroundColor: muiTheme.aside.backgroundColor, border: '1px solid #1a1a1a', width:565},
    bigAvatar:  { marginLeft: 10, marginTop: -40, border: '3px solid #22244e'},
    verified:   {fontSize:'small', color: muiTheme.palette.primaryTextColor},
    buttonP:    {marginTop:5, marginLeft:35, borderRadius:40, width: 100, height: 30},
    buttonS:    {backgroundColor: muiTheme.button.backgroundSecondary, border: '1px solid',
                 borderRadius:40, borderColor: muiTheme.button.borderColor},
    more:       {marginTop: -3},
    links:      { marginLeft: 15, marginTop: -5},
    text:       {color: muiTheme.palette.primaryTextColor, marginLeft:15, marginRight: 15, fontSize: 14, 
                 lineHeight: 1.4},
    extra:      {marginLeft:15, fontSize:11, color: muiTheme.palette.subTextColor},
    smallAvatar:{marginTop:15, marginLeft:20, marginBottom:15, border:'1px solid rgba(0, 0, 0, 0.7)'},
    hint:       {color: muiTheme.palette.primaryTextColor},
    name:       {color: muiTheme.palette.primaryTextColor, fontSize:'large'},
    sub:        {color: muiTheme.palette.primaryTextColor, marginTop: 5},
    at:         {color: muiTheme.palette.subTextColor},
    img:        {width:200, minWidth:'83%', marginLeft:75, border: '1px solid rgba(0, 0, 0, 0.7)', borderRadius:5},
    count:      {color:muiTheme.palette.secondaryTextColor}
}
class TwitterAadhaarPost extends Component{
    render(){
        return(
            <div>
                <strong style={topStyles.people}>People</strong>
                <small style={topStyles.peopleView}>View all</small>
                <div style={{display:'flex', flexDirection:'row'}}>
                    <Paper style={topStyles.smallCard}>
                        <img width={topStyles.smallCard.width-2} src={require("../images/pb1.jpg")} />
                        <div style={{display:'flex', flexDirection:'row'}}>
                            <Avatar style={topStyles.bigAvatar} 
                                src={require("../images/a1.jpg")} size={70} />
                            <RaisedButton style={topStyles.buttonP} buttonStyle={topStyles.buttonS}
                                labelColor={muiTheme.button.borderColor} label="Follow" containerElement="label" backgroundColor={muiTheme.button.borderColorbackgroundSecondary} />
                            <IconMenu style={topStyles.more} iconStyle={{ color: muiTheme.palette.subTextColor}}
                                iconButtonElement=
                                {<IconButton><i class="material-icons">more_vert</i></IconButton>}
                                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                                    targetOrigin={{horizontal: 'right', vertical: 'top'}} >
                                    <MenuItem primaryText="Tweet to @UIDAI" />
                                    <MenuItem primaryText="Add or remove from lists…" />
                                    <Divider />
                                    <MenuItem primaryText="Mute @UIDAI" />
                                    <MenuItem primaryText="Block @UIDAI" />
                                    <MenuItem primaryText="Report @UIDAI" />
                                    <Divider />
                                    <MenuItem primaryText="Embed this Profile" />
                            </IconMenu>
                        </div>
                        <div style={topStyles.links}>
                            <strong style={topStyles.name}>Aadhaar&nbsp;
                                <i style={topStyles.verified} class="material-icons">check_circle</i> 
                                </strong><br/>
                            <span style={topStyles.at}>@UIDAI</span>
                        </div>
                        <p style={topStyles.text}>
                            Official Twitter account of the Unique Identification Authority of India. RTs are not endorsements.
                        </p>
                    </Paper>
                    <Paper style={topStyles.smallCard}>
                        <img width={topStyles.smallCard.width-2} src={require("../images/pb1.jpg")} />
                        <div style={{display:'flex', flexDirection:'row'}}>
                            <Avatar style={topStyles.bigAvatar} 
                                src={require("../images/a1.jpg")} size={70} />
                            <RaisedButton style={topStyles.buttonP} buttonStyle={topStyles.buttonS}
                                labelColor={muiTheme.button.borderColor} label="Follow" containerElement="label" backgroundColor={muiTheme.button.borderColorbackgroundSecondary} />
                            <IconMenu style={topStyles.more} iconStyle={{ color: muiTheme.palette.subTextColor}}
                                iconButtonElement=
                                {<IconButton><i class="material-icons">more_vert</i></IconButton>}
                                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                                    targetOrigin={{horizontal: 'right', vertical: 'top'}} >
                                    <MenuItem primaryText="Tweet to @UIDAI" />
                                    <MenuItem primaryText="Add or remove from lists…" />
                                    <Divider />
                                    <MenuItem primaryText="Mute @UIDAI" />
                                    <MenuItem primaryText="Block @UIDAI" />
                                    <MenuItem primaryText="Report @UIDAI" />
                                    <Divider />
                                    <MenuItem primaryText="Embed this Profile" />
                            </IconMenu>
                        </div>
                        <div style={topStyles.links}>
                            <strong style={topStyles.name}>Nandan Nilekani&nbsp;
                                <i style={topStyles.verified} class="material-icons">check_circle</i> 
                                </strong><br/>
                            <span style={topStyles.at}>@NandanNilekani</span>
                        </div>
                        <p style={topStyles.text}>
                            Co-founder of <tag style={topStyles.tag}>@Infosys</tag>. Worked on 
                            <tag style={topStyles.tag}>#Aadhaar</tag>. Co-author of @RebootingIndia. Author of …
                        </p>
                        <small style={topStyles.extra}>Followed by <tag style={topStyles.tag}>SmartIndiaHackathon</tag> and 1 other</small>
                    </Paper>
                </div>
                <br />
                <div style={{display:'flex', flexDirection:'column', marginLeft: 15}}>
                    <Card containerStyle={topStyles.postCard}>
                        <CardHeader 
                            title={<span>
                                        <b style={topStyles.name}>Atul Khatri </b>
                                        <i style={topStyles.verified} class="material-icons">check_circle</i>
                                        <a style={topStyles.at}> @one_by_two &middot; Dec 20 </a>
                                    </span>
                                  }
                            subtitleStyle={topStyles.sub}
                            subtitle={  <span>
                                            <tag style={topStyles.tag}>#Virushka</tag> submitting their 
                                            <b>Aadhaar</b> card &amp; KYC forms to Modiji directly
                                        </span>
                                     } 
                            avatar={require("../images/a3.jpeg")}
                            actAsExpander={false} showExpandableButton={true} />
                        <CardMedia expandable={false}>
                            <img style={topStyles.img} src={require("../images/ap1.jpg")} />
                        </CardMedia>
                        <CardActions>
                            <IconButton style={{marginLeft:80}} 
                                iconStyle={{color:muiTheme.palette.secondaryTextColor}} tooltip="ReTweet">
                                <i class="material-icons">chat_bubble_outline</i>
                            </IconButton>
                                <sup style={topStyles.count}>133</sup>
                            <IconButton style={{marginLeft:20}} 
                                iconStyle={{color:muiTheme.palette.secondaryTextColor}} tooltip="Reply">
                                <i class="material-icons">loop</i>
                            </IconButton>
                                <sup style={topStyles.count}>997</sup>
                            <IconButton style={{marginLeft:20}} iconStyle={{color:muiTheme.palette.liked}}     
                                tooltip="Undo Like">
                                <i class="material-icons">favorite</i>
                            </IconButton>
                                <sup style={topStyles.count}>4.9k</sup>
                            <IconButton style={{marginLeft:20}} 
                                iconStyle={{color:muiTheme.palette.secondaryTextColor}} tooltip="Direct Message">
                                <i class="material-icons">mail_outline</i>
                            </IconButton>
                    </CardActions>
                    </Card>
                    <Card containerStyle={topStyles.postCard}>
                        <CardHeader 
                            title={<span>
                                        <b style={topStyles.name}>WhenISpeak </b>
                                        <i style={topStyles.verified} class="material-icons">check_circle</i>
                                        <a style={topStyles.at}> @dramalover4er &middot; 1h </a>
                                    </span>
                                  }
                            subtitleStyle={topStyles.sub}
                            subtitle={  <span>
                                            <span style={{color:muiTheme.palette.subTextColor}}>Replying to </span>
                                            <tag style={topStyles.tag}>@sanjayuvacha</tag><br /><br />
                                            SC takes too long to respond.. it allowed the demonetiztion mayhem to playout rather than hold hearings before the deadline! 
                                            <tag style={topStyles.tag}>#Aadhaar</tag> is being used by many other central govt organizations to mark attendance
                                        </span>
                                     } 
                            avatar={require("../images/a4.jpg")}
                            actAsExpander={false} showExpandableButton={true} />
                        <CardActions>
                            <IconButton style={{marginLeft:80}} 
                                iconStyle={{color:muiTheme.palette.secondaryTextColor}} tooltip="ReTweet">
                                <i class="material-icons">chat_bubble_outline</i>
                            </IconButton>
                                <sup style={topStyles.count}>133</sup>
                            <IconButton style={{marginLeft:20}} 
                                iconStyle={{color:muiTheme.palette.secondaryTextColor}} tooltip="Reply">
                                <i class="material-icons">loop</i>
                            </IconButton>
                                <sup style={topStyles.count}>997</sup>
                            <IconButton style={{marginLeft:20}} iconStyle={{color:muiTheme.palette.liked}}     
                                tooltip="Undo Like">
                                <i class="material-icons">favorite</i>
                            </IconButton>
                                <sup style={topStyles.count}>4.9k</sup>
                            <IconButton style={{marginLeft:20}} 
                                iconStyle={{color:muiTheme.palette.secondaryTextColor}} tooltip="Direct Message">
                                <i class="material-icons">mail_outline</i>
                            </IconButton>
                    </CardActions>
                    </Card>
                    <Card containerStyle={topStyles.postCard}>
                        <CardHeader 
                            title={<span>
                                        <b style={topStyles.name}>Arun Jaitley </b>
                                        <i style={topStyles.verified} class="material-icons">check_circle</i>
                                        <a style={topStyles.at}> @arunjaitley &middot; Dec 23 </a>
                                    </span>
                                  }
                            subtitleStyle={topStyles.sub}
                            subtitle={  <span>
                                            Addressing at the launch of book “<b>Aadhaar</b>: A Biometric History of India’s 12-digit Revolution”, December 23, 2017 
                                        </span>
                                     } 
                            avatar={require("../images/a5.png")}
                            actAsExpander={false} showExpandableButton={true} />
                        <CardMedia expandable={false}>
                            <img style={topStyles.img} src={require("../images/ap5.jpg")} />
                        </CardMedia>
                        <CardActions>
                            <IconButton style={{marginLeft:80}} 
                                iconStyle={{color:muiTheme.palette.secondaryTextColor}} tooltip="ReTweet">
                                <i class="material-icons">chat_bubble_outline</i>
                            </IconButton>
                                <sup style={topStyles.count}>193</sup>
                            <IconButton style={{marginLeft:20}} 
                                iconStyle={{color:muiTheme.palette.secondaryTextColor}} tooltip="Reply">
                                <i class="material-icons">loop</i>
                            </IconButton>
                                <sup style={topStyles.count}>138</sup>
                            <IconButton style={{marginLeft:20}} iconStyle={{color:muiTheme.palette.liked}}     
                                tooltip="Undo Like">
                                <i class="material-icons">favorite</i>
                            </IconButton>
                                <sup style={topStyles.count}>3.0k</sup>
                            <IconButton style={{marginLeft:20}} 
                                iconStyle={{color:muiTheme.palette.secondaryTextColor}} tooltip="Direct Message">
                                <i class="material-icons">mail_outline</i>
                            </IconButton>
                    </CardActions>
                    </Card>
                </div>
                <br /><br /><br /><br /><br />
            </div>
        )
    }
}

export default TwitterAadhaarPost;