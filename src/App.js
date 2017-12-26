import React, { Component } from 'react';
import muiTheme from './theme.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import TwitterMain from './twitter_main.js';
import TwitterAadhaar from './twitter_aadhaar.js';
import TwitterBase from './twitter_base.js';

class App extends Component {
    constructor(){
        super();
        this.state = {page : 0}
    }
    homePage(){
        this.setState({page:0});
    }
    aadhaarPage(){
        this.setState({page:1});
    }
    render(){
        if(this.state.page === 0){
            return(
                <div className="App" >
                    <MuiThemeProvider muiTheme={muiTheme}>
                        <TwitterBase page={0} update1={this.homePage.bind(this)} 
                            update2={this.aadhaarPage.bind(this)} />
                    </MuiThemeProvider>
                </div>
            );
        }
        else{
            return(
                <div className="App">
                    <MuiThemeProvider muiTheme={muiTheme}>
                        <TwitterBase page={1} update1={this.homePage.bind(this)} 
                            update2={this.aadhaarPage.bind(this)} />
                    </MuiThemeProvider>
                </div>
            );
        }
    }
}

export default App;


