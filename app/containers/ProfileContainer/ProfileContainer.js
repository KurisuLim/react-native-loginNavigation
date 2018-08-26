import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { View, StyleSheet, Platform } from 'react-native';
import { Card, Button, Text } from 'react-native-elements';
import { onSignOut } from '../../auth';

export default class ProfileContainer extends React.Component {
    render() {
        return (
            <KeyboardAwareScrollView
                enableOnAndroid={true}
                enableAutoAutomaticScroll={(Platform.OS === 'ios')}
                extraHeight={130}
                extraScrollHeight={130}
            >
                <View style={styles.container}>
                    <Card title='Kurisu Lim'>
                        <View style={styles.cardBody}>
                        <Text style={styles.text}>KL</Text>
                        </View>
                        <Button
                            title="Logout"
                            style={styles.button}
                            // onPress={()=> onSignOut().then(()=> navigation.navigate('SignedOut'))}
                            onPress={()=> this.props.navigation.navigate('Register')}
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
        paddingVertical: 100,
    },
    cardBody:{
        backgroundColor: '#bcbec1',
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 80,
        borderRadius: 40,
        alignSelf: 'center',
        marginBottom: 20
    },
    text:{
        color: '#ecf0f1',
        fontSize: 28
    },
    button:{
        marginTop: 20,
        borderRadius: 7,
        backgroundColor: '#3498db'
    }
})