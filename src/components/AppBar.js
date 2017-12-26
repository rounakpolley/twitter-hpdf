import React, { Component } from 'react';
import muiTheme from '../theme.js';
import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import AutoComplete from 'material-ui/AutoComplete';
import Avatar from 'material-ui/Avatar';

const searchTexts = ['Adhar','Adhaar','Aadhar','Aadhaar','Adhare'];
const searchProps = {desktop: true, disableAutoFocus: true, fullWidth: false, animated: true  };
class Search extends Component{
    constructor(props){
        super(props);
        this.state = { searchText: '' };
    };
    handleUpdateInput = (searchText) => {
        this.setState({ searchText: searchText});
    };
    handleNewRequest = () => {
        if(this.state.searchText === "Aadhaar"){
            this.setState({ searchText: ''});
            this.props.update2();
        }
    };
    render(){
        return(
            <AutoComplete
                leftIcon={<i class="material-icons">search</i>}
                hintText=" &nbsp; Search twitter " hintStyle={{color: muiTheme.palette.subTextColor}}
                dataSource={searchTexts} menuProps={searchProps}
                searchText={this.state.searchText} onUpdateInput={this.handleUpdateInput}
                onNewRequest={this.handleNewRequest}
                filter={(searchText, key) => (key.indexOf(searchText) !== -1)}
                openOnFocus={true} underlineShow={false}
                inputStyle={{color: muiTheme.palette.primaryTextColor}}
                textFieldStyle =
                {{paddingLeft:10, paddingRight:10, width:230, height:35, border:'1px solid #00094d', borderRadius: '20px', backgroundColor:muiTheme.page.backgroundColor, textTransform: 'none'}}
            />
        );
  }
}

const TwitterTabs = (props) => (
    <Tabs inkBarStyle={{backgroundColor:muiTheme.tabs.inkBarStyle,width:100, marginLeft:-10}} 
        tabItemContainerStyle={{width: '1300px'}}>
        <Tab icon={<FlatButton hoverColor={muiTheme.appBar.hover} onClick={props.update1}
                       label="Home" labelStyle={{color: muiTheme.tabs.inkBarStyle, fontWeight:900}}
                       icon={<i style={{color: muiTheme.tabs.inkBarStyle}} class="material-icons">home</i>} />}
            style={{width:100}}/>
        <Tab icon={<FlatButton hoverColor={muiTheme.appBar.hover} labelStyle={{fontWeight:900}}
                       icon={<i class="material-icons">flash_on</i>} label="Moments" />} />
        <Tab icon={<FlatButton hoverColor={muiTheme.appBar.hover}  labelStyle={{fontWeight:900}}
                       icon={<i class="material-icons">notifications_none</i>} label="Notifications" />} />
        <Tab icon={<FlatButton hoverColor={muiTheme.appBar.hover}  labelStyle={{fontWeight:900}}
                       icon={<i class="material-icons">mail_outline</i>} label="Messages" />} />
            <Tab disabled={true} />
        <Tab disabled={true} icon={<img height="30" src={require("../images/twitter.png")} />} />
            <Tab disabled={true} />
        <Tab style={{width:230}} disabled={true} icon={<Search update2={props.update2} />}></Tab>
        <Tab disabled={true} icon={<Avatar src={require("../images/my_avatar.jpg")} size={35} 
                                       style={{marginLeft: 0}} />} />
        <Tab buttonStyle={{backgroundColor: muiTheme.button.backgroundPrimary, border: '2px solid ',       
                            borderRadius:40, borderColor: muiTheme.button.borderColor, height:30, width:80,     color:muiTheme.palette.primaryTextColor}}
            label={<b style={{textTransform:'none'}}>Tweet</b>} />
    </Tabs>
);

class TwitterAppBar extends Component{
    render(props){
        return(
            <AppBar titleStyle={{flex:0}} style={{borderButtomColor:'#1a1a1a'}} showMenuIconButton={false}>
                <TwitterTabs update1={this.props.update1} update2={this.props.update2} />
            </AppBar>
        )
    }
}

export default TwitterAppBar;