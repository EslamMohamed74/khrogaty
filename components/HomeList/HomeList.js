import React, { Component } from 'react';
import { Image, ScrollView } from 'react-native';
import { Spinner, Text, View } from 'native-base';

export default class HomeList extends Component {
  state = {
    dataSource: [],
    loaded: 0,
    text: ''
  }
  static navigationOptions = {
    header: null,
  };
  componentDidMount() {

    fetch('http://reactnative.website/iti/wp-json/wp/v2/posts?categories=4')
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
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
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

            <View key={item.id} style={{ padding: 15, width: 175 }}>
              <Image source={{ uri: item.better_featured_image.source_url }} style={{ height: 150, width: 150, borderRadius: 10 }} />
              <Text style={{ paddingTop: 5 }} >{item.title.rendered}</Text>
              <View style={{ flexDirection: 'row' }}>
                <Image source={require('../../images/Icons/map-marker.png')} style={{ height: 15, width: 15 }} />
                <Text style={{ color: "gray", fontSize: 11 }}>{item.acf.address}</Text>
              </View>
            </View>

          )
        })

      )
    }
  }

}