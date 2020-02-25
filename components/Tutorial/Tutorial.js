import React from 'react';
import { ImageBackground, View, Image, StyleSheet } from 'react-native';
import { Container, Text } from 'native-base';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    key: 'onboard-first',
    title: 'Places For Going Out',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum',
    backGround: require('../../images/Backgrounds/onboarding-bg-left.png'),
    icon: require('../../images/VectorIcons/onboard-first-icon.png'),
  },
  {
    key: 'onboard-second',
    title: 'Restaurants & Coffee Shops',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum',
    backGround: require('../../images/Backgrounds/onboarding-bg-right.png'),
    icon: require('../../images/VectorIcons/onboard-second-icon.png'),

  },
  {
    key: 'onboard-third',
    title: 'What Do I Do',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum',
    backGround: require('../../images/Backgrounds/onboarding-bg-left.png'),
    icon: require('../../images/VectorIcons/onboard-third-icon.png'),

  }
];

export default class Tutorial extends React.Component {
  static navigationOptions = {
    header: null,
  };

  _renderItem = ({ item }) => {
    return (
      <Container>
        <ImageBackground source={item.backGround} style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
          <Image source={require('../../images/Logo/khrogaty-logo.png')} style={{ width: 125, height: 125, marginBottom: 125, marginTop: 150 }} />
          <View style={{ justifyContent: "center", alignItems: 'center', }}>
            <Image source={item.icon} style={{ width: 55, height: 55, marginBottom: 10 }} />
            <Text style={{ fontWeight: 'bold', fontSize: 17 }}>{item.title}</Text>
            <Text style={{ fontSize: 14, padding: 5, textAlign: 'center' }}>{item.text}</Text>
          </View>
        </ImageBackground>
      </Container>
    );
  }
  _onDone = () => {
    this.props.navigation.navigate('Footer')

  }
  render() {

    return <AppIntroSlider renderItem={this._renderItem} slides={slides} onDone={this._onDone}

      showPrevButton={true}

      nextLabel={"Next >"}
      prevLabel={"< Prev"}
      doneLabel={"START"}

      buttonStyle={styles.buttonStyle} buttonTextStyle={styles.buttonTextStyle} dotStyle={styles.dotStyle} activeDotStyle={styles.activeDotStyle} />;
  }
}


const styles = StyleSheet.create({
  dotStyle: {
    height: 0,
    width: 0,

  },



  buttonTextStyle: {
    color: 'green',
  },
});