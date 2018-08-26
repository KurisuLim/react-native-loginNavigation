import React from 'react';
import LoginContainer from '../containers/LoginContainer/LoginContainer';

export default class Login extends React.Component{
    render(){
        return(
            <LoginContainer navigation={this.props.navigation} />
        )
    }
}