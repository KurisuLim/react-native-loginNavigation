import React from 'react';
import RegisterContainer from '../containers/RegisterContainer/RegisterContainer';

export default class Register extends React.Component{
    render(){
        return(
            <RegisterContainer navigation={this.props.navigation} />
        )
    }
}