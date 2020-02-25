import React, { Component } from 'react';
import { Image } from 'react-native';
import { Text, View, Button } from 'native-base';

export default class HomeTitle extends Component {
  render() {
    return (
      <View style={{ flexDirection: 'row', padding: 15, flex: 1 }}>
        <Image source={{ uri: this.props.imageUri }} style={{ height: 40, width: 40, alignSelf: 'flex-start', }} />
        <Text style={{ alignSelf: 'flex-start', flex: 6, paddingLeft: 8, paddingTop: 10 }} >{this.props.title}</Text>
        <Button transparent style={{ alignSelf: 'flex-end', flex: 3 }}>
          <Text style={{ color: "green" }}>View More</Text>
        </Button>

      </View>

    );
  }
}