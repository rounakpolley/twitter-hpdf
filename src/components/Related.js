import React, { Component } from 'react';
import muiTheme from '../theme.js';
import Paper from 'material-ui/Paper';

const relatedStyles = {
    paper : {backgroundColor: muiTheme.aside.backgroundColor, border: '1px solid #1a1a1a',
                 marginTop: 10, height: 'wrap-content', width:muiTheme.aside.width,
                 display: 'inline-block'},
    header: {color: muiTheme.palette.primaryTextColor, fontWeight: 700, fontSize:'large', marginLeft:20},
    text:   {color: muiTheme.aside.hashtagTextColor, fontWeight: 900, marginLeft:22, lineHeight: 1.8}
};

class TwitterRelatedSearches extends Component{
    render(){
        return(
            <Paper style={relatedStyles.paper} zDepth={1} rounded={false} >
                <br />
                <header style={relatedStyles.header}>Related searches</header>
                <p>
                    <div>
                        <b style={relatedStyles.text}>pv sindhu</b><br />
                        <b style={relatedStyles.text}>#amarnath</b><br />
                        <b style={relatedStyles.text}>#soniagandhi</b><br />
                        <b style={relatedStyles.text}>jbl and sunburn</b><br />
                        <b style={relatedStyles.text}>b16th odi</b><br />
                    </div>
                </p>
            </Paper>
        );
    };
};

export default TwitterRelatedSearches;