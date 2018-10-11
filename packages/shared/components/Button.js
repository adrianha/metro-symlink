import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default class Button extends Component {
  render() {
    return (
      <TouchableOpacity
        style={{ backgroundColor: '#ccc', padding: 10 }}
        onPress={this.props.onPress}
      >
        <Text>{this.props.title}</Text>
      </TouchableOpacity>
    )
  }
}