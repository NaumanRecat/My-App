/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';

export class FlatChoose extends React.Component {
  state = {
    data: [
      {
        name: 'Book',
        price: 16.0,
        quantity: 1,
        sum: 16.0,
      },
      {
        name: 'Book1',
        price: 16.0,
        quantity: 1,
        sum: 16.0,
      },
      {
        name: 'Book2',
        price: 16.0,
        quantity: 1,
        sum: 16.0,
      },
      {
        name: 'Book3',
        price: 16.0,
        quantity: 1,
        sum: 16.0,
      },
      {
        name: 'Book4',
        price: 16.0,
        quantity: 1,
        sum: 16.0,
      },
      {
        name: 'Book5',
        price: 16.0,
        quantity: 1,
        sum: 16.0,
      },
      {
        name: 'Book6',
        price: 16.0,
        quantity: 1,
        sum: 16.0,
      },
      {
        name: 'Book7',
        price: 16.0,
        quantity: 1,
        sum: 16.0,
      },
      {
        name: 'Book8',
        price: 16.0,
        quantity: 1,
        sum: 16.0,
      },
      {
        name: 'Book9',
        price: 16.0,
        quantity: 1,
        sum: 16.0,
      },
      {
        name: 'Book10',
        price: 16.0,
        quantity: 1,
        sum: 16.0,
      },
      {
        name: 'Book11',
        price: 16.0,
        quantity: 1,
        sum: 16.0,
      },
    ],
  };

  design = (item) => (
    <View
      style={{
        height: h('10%'),
        width: '90%',
        // backgroundColor:'#ada',
        flexDirection: 'row',
        borderColor: 'green',
        borderRadius: h('2%'),
      }}>
      <SafeAreaView />
      <TouchableOpacity
        style={{
          height: h('10%'),
          width: '15%',
          // backgroundColor: '#ada',
          alignItems: 'center',
          justifyContent: 'center',
        }}></TouchableOpacity>
      <View
        style={{
          height: h('10%'),
          width: '5%',
          // backgroundColor: '#ada',
          justifyContent: 'center',
        }}>
        <Text>{item.quantity}</Text>
      </View>
      <TouchableOpacity
        style={{
          height: h('10%'),
          width: '10%',
          alignItems: 'center',
          // backgroundColor:'#ada',
          justifyContent: 'center',
        }}></TouchableOpacity>
      <View
        style={{
          height: h('10%'),
          width: '50%',
          alignItems: 'center',
          // backgroundColor:'#fda',
          justifyContent: 'center',
        }}>
        <Text>{item.name}</Text>
      </View>
      <View
        style={{
          height: h('10%'),
          width: '20%',
          // backgroundColor:'#ada',
          justifyContent: 'center',
        }}>
        <Text style={{marginLeft: h('2%')}}>$: {item.sum}.00</Text>
      </View>
    </View>
  );
  render() {
    return (
      <View
        style={{
          flex: 1,
          // backgroundColor: 'brown',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <SafeAreaView />
        <View
          style={{
            height: h('90%'),
            // backgroundColor: 'green',
            borderWidth: h('.1%'),
            borderRadius: h('2%'),
          }}>
          <FlatList
            data={this.state.data}
            renderItem={({item}) => this.design(item)}
            keyExtractor={(item) => item.name}
          />
        </View>
      </View>
    );
  }
}
