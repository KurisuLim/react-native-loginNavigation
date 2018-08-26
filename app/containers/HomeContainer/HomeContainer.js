import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { View, StyleSheet, Platform, Text, Linking } from 'react-native';
import { Card, Button } from 'react-native-elements';

const images = [
    {
        key: 1,
        name: 'My Hero Academia',
        description: 'A boy who wants to be a hero',
        image: require('../../images/1.jpg'),
        url: 'http://www.crunchyroll.com/my-hero-academia'
    },
    {
        key: 2,
        name: 'Overlord',
        description: 'A man got stuck in a VR world',
        image: require('../../images/2.jpg'),
        url: 'http://www.crunchyroll.com/overlord'
    },
    {
        key: 3,
        name: 'Stein Gate',
        description: 'A man who time travels to save his friends',
        image: require('../../images/3.jpg'),
        url: 'http://www.crunchyroll.com/steinsgate'
    },
    {
        key: 4,
        name: 'The Master of Ragnarok & Blesser of Einherjar',
        description: 'A boy who got lost in the past',
        image: require('../../images/4.jpg'),
        url: 'http://www.crunchyroll.com/the-master-of-ragnarok-blesser-of-einherjar'
    },
]

export default class HomeContainer extends React.Component {
    render() {
        return (
            <KeyboardAwareScrollView
                enableOnAndroid={true}
                enableAutoAutomaticScroll={(Platform.OS === 'ios')}
                extraHeight={130}
                extraScrollHeight={130}
            >
                <View style={styles.container}>
                    {images.map(({ name,description, image, url, key })=>(
                        <Card 
                            title={`${name}`}
                            image={image}
                            key={key}
                        >
                        <Text style={styles.text}>
                            Description: {description}.
                        </Text>
                            <Button
                                style={styles.button}
                                backgroundColor='#3498db'
                                title='More Details'
                                onPress={()=> Linking.openURL(url)}
                            />
                        </Card>
                    ))}
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
    text:{
        marginBottom: 10,
    },
    button:{
        marginTop: 20,
        borderRadius: 7
    }
})