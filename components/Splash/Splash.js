import React, { Component } from 'react';
import { ImageBackground, Image } from 'react-native';
import { Container } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';

export default class Splash extends Component {
    static navigationOptions = {
        header: null,
    };
    settime = () => {
        setTimeout(() => {
            AsyncStorage.getItem('user').then((response) => {
                if (response === '1') {
                    this.props.navigation.navigate('Footer')

                } else {
                    this.props.navigation.navigate('Tutorial')
                }
            })

        }, 1000)
    }

    render() {
        return (
            <Container>
                <ImageBackground source={require('../../images/Backgrounds/splash-bg.png')} style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                    <Image source={require('../../images/Logo/khrogaty-logo.png')} style={{ width: 150, height: 150, flexDirection: "column" }} />
                </ImageBackground>
                {this.settime()}
            </Container>
        );
    }
}