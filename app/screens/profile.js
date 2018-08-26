import React from 'react';
import ProfileContainer from '../containers/ProfileContainer/ProfileContainer';

export default class Profile extends React.Component{
    render(){
        return(
            <ProfileContainer navigation={this.props.navigation} />
        )
    }
}