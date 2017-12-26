import React, {Component} from 'react';
import muiTheme from '../theme.js';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
    
const trendStyles = {
    paper:      {backgroundColor: muiTheme.aside.backgroundColor, border: '1px solid #1a1a1a',
                    height: 'wrap-content', width: muiTheme.aside.width, marginTop: 10, 
                    textAlign: 'left', display: 'inline-block'},
    subheader1: {color: muiTheme.palette.primaryTextColor, fontWeight: 900, fontSize: 'large'},
    subheader2: {color: muiTheme.aside.hashtagTextColor, fontWeight: 900},
    list:       {color: muiTheme.aside.hashtagTextColor, height:45, fontWeight: 600, 
                 ':hover': {textDecoration: 'underline', color: "red",} }
};
const trendData = {
    index : [0,1,2,3,4,5,6,7,8,9],
    ptext : {0:'#RIL40',1:'#LetsFootball',2:'#LaluVerdict',3:'#ElClasico',4:'#QaizKhaninBollywood',
             5:'#PulseTheVenture',6:'JCon Gujarat',7:'#FirstImpactOn1stJan',8:'#Dhirubhai',9:'Army Major'},
    stext : {0:'16.6K Tweets',1:'5,962 Tweets',2:'5,055 Tweets',
             3:'Messi makes history, again and again and again',5:'2,424 Tweets',
             7:'1,205 Tweets',8:'4,536 Tweets',9:'2,600 Tweets'}
};
const ListPrint  = (props) => (
    <ListItem style={trendStyles.list} primaryText={trendData.ptext[props.num]} 
        secondaryText={trendData.stext[props.num]} />
);
const ShowList = () => {
    const numbers = trendData.index;
    return(
        <div>{numbers.map( (number) => (<ListPrint num={number} />) )}</div>
    );
};
class TwitterTrends extends Component{
    render(){
        return(
            <Paper style={trendStyles.paper} zDepth={1} rounded={false} >
                <List>
                    <Subheader style={{height:30}}>
                        <span style={trendStyles.subheader1}>Trends for you · </span>
                        <span style={trendStyles.subheader2}>Change</span>
                    </Subheader>
                    <ShowList />
                    <br />
                </List>
            </Paper>
        );
    }
};

export default TwitterTrends;