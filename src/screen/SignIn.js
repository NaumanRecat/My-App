/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export class SignIn extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'blue',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            console.warn('i am ready 2');
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
            }}>
            {' '}
            Navigation 1
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
