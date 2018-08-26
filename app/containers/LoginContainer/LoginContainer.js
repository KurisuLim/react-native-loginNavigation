import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { View, StyleSheet, Platform } from 'react-native';
import { Card, Button, FormLabel, FormInput } from 'react-native-elements';
import { onSignIn } from '../../auth';

export default class LoginContainer extends React.Component {
    render() {
        return (
            <KeyboardAwareScrollView
                enableOnAndroid={true}
                enableAutoAutomaticScroll={(Platform.OS === 'ios')}
                extraHeight={130}
                extraScrollHeight={130}
            >
                <View style={styles.container}>
                    <Card title='Login'>
                        <FormLabel>Email</FormLabel>
                        <FormInput
                            placeholder='Email Address'
                            textContentType='email'
                            keyboardType='email-address'
                        />
                        <FormLabel>Password</FormLabel>
                        <FormInput
                            placeholder='Password'
                            secureTextEntry
                        />
                        <Button
                            style={styles.button}
                            backgroundColor='#3498db'
                            title='Login'
                            // onPress={()=>{
                            //     onSignIn().then(()=> navigation.navigate('SignedIn'));
                            // }}
                            onPress={()=> this.props.navigation.navigate('Home')}
                        />
                    </Card>
                </View>
            </KeyboardAwareScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 100
    },
    button:{
        marginTop: 20,
        borderRadius: 7
    }
})