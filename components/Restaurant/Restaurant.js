import React, { Component } from 'react';
import { Image, ScrollView } from 'react-native';
import { View, Button, CardItem, Text, Left, Body, Spinner } from 'native-base';
export default class Restaurant extends Component {

  state = {
    dataSource: [],
    loaded: 0,
    text: ''
  }
  static navigationOptions = {
    header: null,
  };
  componentDidMount() {

    fetch('http://reactnative.website/iti/wp-json/wp/v2/posts?categories=3')
      .then((response) =>
        response.json()
      )
      .then((responseJson) => {
        this.setState({
          dataSource: responseJson,
          loaded: 1
        });
      })
      .catch((error) => {
        console.error(error + " fetch error");
      });

  }
  render() {

    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        {this.displaydata()}

      </ScrollView>

    );
  }

  displaydata() {


    if (this.state.loaded === 0) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Spinner color="#008000" />
        </View>

      )
    } else {
      return (
        this.state.dataSource.map((item) => {
          return (
            <View key={item.id} style={{ borderRadius: 10, borderWidth: 2, margin: 20, borderColor: 'white', elevation: 10 }}>
              <CardItem >
                <Left style={{ flex: 1 }}>
                  <Image source={{ uri: item.better_featured_image.source_url }} style={{ height: 200, width: 120, borderRadius: 10 }} />
                </Left>
                <Body style={{ flex: 1.5 }}>
                  <Text style={{ paddingBottom: 10, fontWeight: 'bold' }}>{item.title.rendered}</Text>
                  <View style={{ flexDirection: 'row' }}>
                    <Image source={require('../../images/Icons/map-marker.png')} style={{ height: 20, width: 20 }} />
                    <Text style={{ color: "green", }}>{item.acf.address}</Text>
                  </View>
                  <Text style={{ paddingVertical: 10 }}>{item.excerpt.rendered} </Text>
                  <Button rounded success onPress={() => this.props.navigation.navigate('SingleRestaurant',
                    {
                      img: item.better_featured_image.source_url,
                      title: item.title.rendered,
                      content: item.content.rendered,
                      place: item.acf.address,
                      mobile: item.acf.phone_number,
                      email: item.acf.email_address,
                      id: item.better_featured_image.post,
                      map: item.acf.map_location
                    })}>
                    <Text>Details</Text>
                  </Button>
                </Body>
              </CardItem>
            </View>
          )
        })

      )
    }
  }
}

