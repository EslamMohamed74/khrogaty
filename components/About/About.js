import React, { Component } from "react";
import MyHeader from '../MyHeader/MyHeader';
import { Container, Content, Card, CardItem, Text, Body, Button } from "native-base";
import AsyncStorage from '@react-native-community/async-storage';
export default class About extends Component {

  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Container style={{ backgroundColor: 'lightgreen' }}>
        <MyHeader title="About" />
        <Content padder>
          <Card>
            <CardItem header bordered>
              <Text>Rosary</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  Rosary is a free and open source framework that enable
                  developers to build
                  high-quality mobile apps using React Native iOS and Android
                  apps
                  with a fusion of ES6.
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Text>Githup</Text>
            </CardItem>
          </Card>
        </Content>
        {this.saveUser()}
        <Button style={{ alignItems: 'center', justifyContent: 'center' }} rounded onPress={() => this.props.navigation.navigate('Counter')} ><Text>Go to Home</Text></Button>
      </Container>
    );
  }
  saveUser() {
    AsyncStorage.setItem('user', '1');
  }
}