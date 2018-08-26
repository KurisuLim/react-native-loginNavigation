import React from 'react';
import HomeContainer from '../containers/HomeContainer/HomeContainer';

export default class Home extends React.Component{
    render(){
        return(
            <HomeContainer navigation={this.props.navigation} />
        )
    }
}