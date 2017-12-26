import React, { Component } from 'react';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import muiThemeable from 'material-ui/styles/muiThemeable';

import {    grey50, grey200, grey300, grey400, grey900, indigoA700, blueA700, blueA400,
            blueGrey900, blueGrey800, blueGrey700, blueGrey600, blueGrey400, blue500, lightBlue600, lightBlue500, blue900, blue800, blue700, blue600, red400
       } from 'material-ui/styles/colors';


const muiTheme = getMuiTheme({
    palette:    { primaryTextColor: grey50, secondaryTextColor: grey300, subTextColor: blueGrey400,
                  hashtagTextColor: blue600, liked : red400, disabled: grey200},
    subheader:     { backgroundColor : lightBlue500},
    page:       { backgroundColor: blueGrey900, border: grey900},
    appBar:     { height: 46, color: blueGrey700, hover: blueGrey700},
    tabs:       { height: 20, backgroundColor: blueGrey700, inkBarStyle:blueA400},
    tab:        { textTransform:'none'},
    list:       { color: blueGrey800 },
    aside:      { backgroundColor: blueGrey800, hashtagTextColor: lightBlue600, width: 300},
    button:     { backgroundPrimary: lightBlue600, backgroundSecondary: blueGrey800, borderColor: blue600 },
    raisedButton: { textTransform: 'none' },
    flatButton: { textTransform: 'none' },
});

export default muiTheme;