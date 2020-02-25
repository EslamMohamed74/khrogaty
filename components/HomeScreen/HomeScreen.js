import React, { Component } from 'react';
import { Image, ImageBackground, ScrollView } from 'react-native';
import { Container, Content, View } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import HomeTitle from '../HomeTitle/HomeTitle';
import HomeList from '../HomeList/HomeList';
import HomeList1 from '../HomeList1/HomeList1';
import HomeList2 from '../HomeList2/HomeList2';

export default class CardShowcaseExample extends Component {
  render() {
    return (
      <Container>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ImageBackground source={require('../../images/Backgrounds/home-header.png')} style={{ flex: 1, justifyContent: "center", alignItems: 'center', height: 150 }}>
            <Image source={require('../../images/Logo/khrogaty-logo.png')} style={{ width: 100, height: 100, }} />
          </ImageBackground>

          <Content>

            <View>
              <HomeTitle imageUri='https://i.imgur.com/iABteOU.png' title="Place For Going Out" />
              <HomeList />
            </View>
            <View>
              <HomeTitle imageUri='https://i.imgur.com/BctHKeP.png' title="Restaurants & Coffe Shops" />
              <HomeList1 />
            </View>
            <View>
              <HomeTitle imageUri='https://i.imgur.com/0Vhlq0X.png' title="What Do I Do?" />
              <HomeList2 />
            </View>
            {this.saveUser()}
          </Content>
        </ScrollView>
      </Container>
    );
  }
  saveUser() {
    AsyncStorage.setItem('user', '1');
  }
}
