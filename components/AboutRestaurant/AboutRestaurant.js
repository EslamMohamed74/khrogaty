import React, { Component } from 'react';
import { Image, ScrollView, Dimensions, TouchableHighlight } from 'react-native';
import { View, CardItem, Text, Left, Body, Item, Input, Spinner } from 'native-base';
import Comment from '../Comment/Comment';

export default class Restaurant extends Component {


    render() {
        return (
            <View>

                <ScrollView showsVerticalScrollIndicator={false}>
                    <Image source={{ uri: this.props.navigation.getParam('img') }} style={{ height: 300, width: Dimensions.get('window').width, marginBottom: 25 }} />
                    <View style={{ borderRadius: 10, borderWidth: 2, margin: 20, borderColor: 'white', elevation: 10 }}>
                        <CardItem >

                            <Body style={{ flex: 1.5 }}>
                                <Text style={{ fontWeight: 'bold' }}>{this.props.navigation.getParam('title')}</Text>
                                <Text style={{ paddingVertical: 10 }}>{this.props.navigation.getParam('content')} </Text>
                            </Body>
                        </CardItem>
                    </View>

                    <Text style={{ fontWeight: 'bold', marginLeft: 30 }}>More Informations</Text>

                    <View style={{ borderRadius: 10, borderWidth: 2, margin: 20, borderColor: 'white', elevation: 10 }}>
                        <CardItem >

                            <Body style={{ flex: 1.5 }}>
                                <View style={{ flexDirection: 'row', margin: 10 }}>
                                    <Image source={require('../../images/Icons/map-marker.png')} style={{ height: 20, width: 20 }} />
                                    <Text style={{ color: "gray", marginLeft: 10 }}>{this.props.navigation.getParam('place')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', margin: 10 }}>
                                    <Image source={require('../../images/Icons/call.png')} style={{ height: 20, width: 20 }} />
                                    <Text style={{ color: "gray", marginLeft: 10 }}>{this.props.navigation.getParam('mobile')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', margin: 10 }}>
                                    <Image source={require('../../images/Icons/mail.png')} style={{ height: 20, width: 20 }} />
                                    <Text style={{ color: "gray", marginLeft: 10 }}>{this.props.navigation.getParam('email')}</Text>
                                </View>

                            </Body>
                        </CardItem>
                    </View>
                    <Text style={{ fontWeight: 'bold', marginLeft: 30 }}>Leave a Comment</Text>


                    <Comment id={this.props.navigation.getParam('id')} />


                </ScrollView>
            </View>
        );
    }



}

