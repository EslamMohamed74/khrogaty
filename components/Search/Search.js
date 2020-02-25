import React, { Component } from "react";
import { SearchBar } from 'react-native-elements';
import { Container, Text, View, Button, CardItem, Left, Body, Icon, Item, Input } from 'native-base';
import { Image, StyleSheet, ScrollView, TouchableHighlight } from 'react-native'
import MyHeader from '../MyHeader/MyHeader';

export default class App extends Component {
  state = {
    search: '',
    dataSource: [],
    loaded: 0,
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

    fetch('http://reactnative.website/iti/wp-json/wp/v2/posts?categories=2')
      .then((response) =>
        response.json()
      )
      .then((responseJson) => {

        this.setState({
          dataSource: this.state.dataSource.concat(responseJson)
        })

      })
      .catch((error) => {
        console.error(error + " fetch error");
      });

    fetch('http://reactnative.website/iti/wp-json/wp/v2/posts?categories=3')
      .then((response) =>
        response.json()
      )
      .then((responseJson) => {

        this.setState({
          dataSource: this.state.dataSource.concat(responseJson)
        })

      })
      .catch((error) => {
        console.error(error + " fetch error");
      });

  }

  render() {

    return (
      <Container>
        <MyHeader title="Search" />

        {/* <SearchBar
            placeholder="Search here by place"
            onChangeText={search => this.setState({search})}
            value={this.state.search}
            lightTheme={true}
            round={true}
            containerStyle={styles.containerStyle}
            inputContainerStyle={styles.inputContainerStyle}
          /> */}

        <Item rounded style={{ margin: 30, marginLeft: 30 }}>
          <Icon name="ios-search" />
          <Input placeholder='Search here by place' onChangeText={search => this.setState({ search })} />
        </Item>
        <ScrollView showsVerticalScrollIndicator={false}>
          {this.displaydata(this.state.search)}
        </ScrollView>




      </Container>
    );
  }

  displaydata(search) {


    if (this.state.search.length === 0) {
      return (
        <View style={{ justifyContent: "center", alignItems: 'center' }}>
          <Image source={require('../../images/VectorIcons/nosearch-icon.png')} style={{ width: 125, height: 125, marginBottom: 10 }} />
          <Text style={{ color: "grey" }}>Search for any place</Text>
        </View>

      )
    } else {
      return (
        this.state.dataSource.map((item) => {
          if (item.title.rendered.includes(search)) {
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
                    <Text style={{ paddingVertical: 10 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Text>
                    <Button rounded success onPress={() => this.props.navigation.navigate('SingleRestaurant', { img: item.better_featured_image.source_url, title: item.title.rendered, content: item.content.rendered, place: item.acf.address, mobile: item.acf.phone_number, email: item.acf.email_address, id: item.better_featured_image.post, })}>
                      <Text>Details</Text>
                    </Button>
                  </Body>
                </CardItem>
              </View>
            )
          }
        })

      )
    }
  }
}


const styles = StyleSheet.create({
  containerStyle: {

    margin: 50,
    backgroundColor: "white",
    // borderTopWidth:0,
    // borderBottomWidth:0,


  },
  inputContainerStyle: {
    backgroundColor: "white",


  }
});




