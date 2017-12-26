import React, { Component } from 'react';
import muiTheme from '../theme.js';
import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';

const subStyles = {
    filter :    {backgroundColor: muiTheme.aside.backgroundColor, border: '1px solid #1a1a1a',
                 marginTop: 10, marginLeft:75, height: 50, width:muiTheme.aside.width,
                 display: 'inline-block'},
    results :   {backgroundColor: muiTheme.aside.backgroundColor, border: '1px solid #1a1a1a',
                  display: 'inline-block', height:40,marginTop: 10, marginLeft:15, width:565},
    filterMargin:   {marginTop: 12,  marginLeft:20},
    filterSearch:   {fontSize:20, color: muiTheme.palette.primaryTextColor},
    filterShow:     {fontSize:14, color: muiTheme.palette.hashtagTextColor},
    resultsNo:      {marginTop: 10, textAlign: 'center', color: muiTheme.palette.hashtagTextColor, 
                     fontSize:14}
};
class TwitterSubBar extends Component{
    render(){
        return(
            <div>
                <div style={{backgroundColor:muiTheme.subheader.backgroundColor, height:60}}>
                    <br />
                    <h2 style={{marginLeft:90, marginTop:0, color: muiTheme.palette.primaryTextColor}}>aadhaar</h2>
                </div>
                <div>
                    <Tabs initialSelectedIndex={1} inkBarStyle={{backgroundColor:muiTheme.tabs.inkBarStyle}} >
                        <Tab disabled={true} />
                        <Tab label={<b style={{textTransform: 'none',
                                        color:muiTheme.subheader.backgroundColor}}>Top</b>} />
                        <Tab label={<b style={{textTransform: 'none'}}>Latest</b>} />
                        <Tab label={<b style={{textTransform: 'none'}}>People</b>} />
                        <Tab label={<b style={{textTransform: 'none'}}>Photos</b>} />
                        <Tab label={<b style={{textTransform: 'none'}}>Videos</b>} />
                        <Tab label={<b style={{textTransform: 'none'}}>News</b>} />
                        <Tab label={<b style={{textTransform: 'none'}}>Broadcasts</b>} />
                        <Tab disabled={true} /><Tab disabled={true} /><Tab disabled={true} />
                        <Tab disabled={true} /><Tab disabled={true} /><Tab disabled={true} />
                        <Tab disabled={true} /><Tab disabled={true} /><Tab disabled={true} />
                    </Tabs>
                    <div style={{display:'flex', flexDirection:'row'}}>
                        <Paper style={subStyles.filter} zDepth={1} rounded={false} >
                            <div style={subStyles.filterMargin}>
                                <b style={subStyles.filterSearch}>Search filters ·</b>  
                                <span style={subStyles.filterShow}> Show</span>
                            </div>
                        </Paper>
                        <Paper style={subStyles.results} zDepth={1} rounded={false} >
                            <div style={subStyles.resultsNo}>
                                144 &nbsp; new &nbsp; results
                            </div>
                        </Paper>
                    </div>
                    
                </div>
            </div>
        );
    };
};

export default TwitterSubBar;