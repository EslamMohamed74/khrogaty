import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

export default class MyWeb extends Component {
  render() {
    return (
      <WebView
        source={{ uri: this.props.navigation.getParam('map') }}
        style={{ marginTop: 20 }}
      />
    );
  }
}