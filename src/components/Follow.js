import React, {Component} from 'react';
import muiTheme from '../theme.js';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
    
const followStyles = {
    paper:      {backgroundColor: muiTheme.aside.backgroundColor, border: '1px solid #1a1a1a',
                 height: 550, width: 300, marginTop: 10, textAlign: 'left', 
                 display: 'inline-block'},
    subheader1: {color: muiTheme.palette.primaryTextColor, fontWeight: 900, fontSize: 'large'},
    subheader2: {color: muiTheme.aside.hashtagTextColor, fontWeight: 900},
    list:       {color: muiTheme.aside.hashtagTextColor, height:45, fontWeight: 600},
    chip:       {marginLeft:65, marginTop: -60, width:233},
    avatar:     {marginLeft:15, marginTop:5},
    name:       {color: muiTheme.palette.primaryTextColor, fontSize:'larger'},
    verified:   {color:'white', fontSize:15},
    at:         {color: muiTheme.palette.secondaryTextColor},
    divider:    {marginTop:8, marginLeft:20, marginBottom:5, backgroundColor:'rgba(9, 9, 9, 0.81)', 
                            align:'center', width:260},
    buttonP:    {marginLeft:80, borderRadius:40, width: 100, height: 30},
    buttonS:    {backgroundColor: muiTheme.button.backgroundSecondary, border: '1px solid',
                 borderRadius:40, borderColor: muiTheme.button.borderColor}    
};
const followData = {
    index : [1,2,3,4,5,6],
    name : {1:'Ben Halpern ',2:'Docker ',3:'Jaison Titus ',4:'Bootstrap ',5:'Elon Musk ', 6:'Node.js '},
    at :  {1:' @bendhal..',2:' @Docker',3:' @JaisonTi..',4:' @getbootstrap',5:' @elonmusk',6:' @nodejs'},
    avatar: {1:require("../images/f1.jpg"),2:require("../images/f2.jpg"),3:require("../images/f3.jpg"),
             4:require("../images/f4.jpg"),5:require("../images/f5.jpg"),6:require("../images/f6.png")},
    gap:   {1:10,2:62,3:5,4:5,5:20,6:60}
};

const ListPrint  = (props) => (
    <div>
        <div>
            <Avatar style={followStyles.avatar} src={followData.avatar[props.num]}  size={50} />
            <Chip backgroundColor={muiTheme.aside.backgroundColor} style={followStyles.chip}
                onRequestDelete={handleRequestDelete} onClick={handleClick}>
                <b style={followStyles.name}>{followData.name[props.num]}</b> 
                <i style={followStyles.verified} class="material-icons">check_circle</i> 
                <span style={followStyles.at}>{followData.at[props.num]}</span>
                <i style={{marginLeft:followData.gap[props.num]}}></i>
            </Chip>
            <RaisedButton style={followStyles.buttonP} buttonStyle={followStyles.buttonS}
                labelColor={muiTheme.button.borderColor} label="Follow" containerElement="label" 
                backgroundColor={muiTheme.button.borderColorbackgroundSecondary} />
        </div>
        <Divider style={followStyles.divider} />
    </div>
);
const ShowList = () => {
    const numbers = followData.index;
    return(
        <div>{numbers.map( (number) => (<ListPrint num={number} />) )}</div>
    );
};

function handleRequestDelete(){}
function handleClick(){}
class TwitterFollow extends Component{
    render(){
        return(
            <Paper style={followStyles.paper} zDepth={1} rounded={false} >
                <List>
                    <Subheader style={{height:30}}>
                        <span style={followStyles.subheader1}>Who to follow · </span>
                        <span style={followStyles.subheader2}> Refresh </span>
                        <span style={followStyles.subheader1}> · </span> 
                        <span style={followStyles.subheader2}> View all</span>
                    </Subheader><br />
                    <ShowList />
                    <div style={{color:muiTheme.aside.hashtagTextColor, marginTop:10, marginLeft:15}}>
                        <i class="material-icons">people_outline</i>
                        <sup> &nbsp; Find people you know</sup>
                    </div>
                </List>
            </Paper>
        );
    }
};

export default TwitterFollow;