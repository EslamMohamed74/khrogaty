import React, { Component } from 'react';
import { Image, TouchableHighlight } from 'react-native';
import { View, CardItem, Text, Left, Body, Spinner, Item, Input, } from 'native-base';

export default class Comment extends Component {


    state = {
        dataSource: [],
        loaded: 0,
        text: ''
    }
    static navigationOptions = {
        header: null,
    };
    componentDidMount() {

        fetch('http://reactnative.website/iti/wp-json/wp/v2/comments?post=' + this.props.id)
            .then((response) =>
                response.json()
            )
            .then((responseJson) => {
                console.log(responseJson);
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
        this.componentDidMount()
        return (
            <View>
                <View style={{ borderRadius: 10, borderWidth: 2, margin: 20, borderColor: 'white', elevation: 10 }}>

                    {this.displaydata()}

                </View>
                <View>
                    <Item rounded>
                        <Input placeholder='Write Here ........' onChangeText={text => this.setState({ text })} />
                        <TouchableHighlight onPress={() => { this.CreateComment(this.state.text) }} activeOpacity={1} >
                            <Image source={require('../../images/Icons/telegram.png')} style={{ height: 30, width: 30, margin: 10 }} />
                        </TouchableHighlight>
                    </Item>
                </View>
            </View>
        );
    }

    CreateComment(Comment) {


        fetch('http://reactnative.website/iti/wp-json/wp/v2/comments?author_name=EslamMohamed&author_email=eslamm7amed123@gmail.com&content=' + Comment + '&post=' + this.props.id, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })

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

                        <CardItem key={item.id} style={{ borderBottomWidth: .5, borderColor: '#808080' }}>
                            <Left style={{ flex: 1 }}>
                                <Image source={require('../../images/Icons/profile.png')} style={{ height: 50, width: 50, }} />
                            </Left>
                            <Body style={{ flex: 4 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ fontWeight: 'bold' }}>{item.author_name}</Text>
                                    <Text style={{ color: "gray", fontSize: 10, marginLeft: 10, marginTop: 8 }}>{item.date}</Text>
                                </View>
                                <Text style={{ paddingVertical: 10 }}>{item.content.rendered} </Text>
                            </Body>
                        </CardItem>

                    )
                })

            )
        }
    }
}

