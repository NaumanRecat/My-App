/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export class Signup extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'green',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            console.warn('i am ready');
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
            }}>
            {' '}
            Navigation
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
