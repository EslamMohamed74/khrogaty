import React, { Component } from 'react';
import { Text } from 'native-base';
import { ImageBackground, Dimensions } from 'react-native';
export default class MyHeader extends Component {
  render() {
    return (


      <ImageBackground source={require('../../images/Backgrounds/theme-header.png')} style={{ height: 80, justifyContent: "center", alignItems: "flex-start" }}>

        <Text style={{ color: 'white', paddingLeft: 20, fontSize: 20 }}>{this.props.title}</Text>

      </ImageBackground>


    );
  }
}