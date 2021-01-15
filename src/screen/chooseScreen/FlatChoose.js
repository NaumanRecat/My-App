/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {View, Text, FlatList, SafeAreaView} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';

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
    data1: [
      {
        name: 'A',
        class: 12,
      },
      {
        name: 'B ',
        class: 112,
      },
      {
        name: 'C ',
        class: 12,
      },
      {
        name: 'D',
        class: 112,
      },
      {
        name: 'E',
        class: 12,
      },
      {
        name: 'F',
        class: 112,
      },
      {
        name: 'G',
        class: 12,
      },
      {
        name: 'H',
        class: 112,
      },
      {
        name: 'I',
        class: 12,
      },
      {
        name: 'J',
        class: 112,
      },
      {
        name: 'K',
        class: 12,
      },
      {
        name: 'L',
        class: 112,
      },
      {
        name: 'M',
        class: 12,
      },
      {
        name: 'N',
        class: 112,
      },
    ],
  };

  design = (item) => (
    <View
      style={{
        height: h('8%'),
        // backgroundColor:'#ada',
        flexDirection: 'row',
        borderRadius: h('2%'),
        borderWidth: h('0.1%'),
      }}>
      <SafeAreaView />
      <View
        style={{
          width: '20%',
          // backgroundColor: '#ada',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>{item.quantity}</Text>
      </View>
      <View
        style={{
          width: '50%',
          alignItems: 'center',
          // backgroundColor: '#fda',
          justifyContent: 'center',
        }}>
        <Text>{item.name}</Text>
      </View>
      <View
        style={{
          width: '30%',
          // backgroundColor: '#ada',
          justifyContent: 'center',
        }}>
        <Text style={{marginLeft: h('2%')}}>$: {item.sum}.00</Text>
      </View>
    </View>
  );

  design1 = (item) => (
    <View
      style={{
        height: h('9%'),
        width: w('20%'),
        // backgroundColor: 'brown',
        borderRadius: h('2%'),
        borderWidth: h('0.1%'),
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text> {item.name}</Text>
    </View>
  );
  render() {
    return (
      <View
        style={{
          flex: 1,
          // backgroundColor: 'brown',
          alignItems: 'center',
        }}>
        <View
          style={{
            height: h('8%'),
            width: '100%',
            // backgroundColor: 'pink',
            alignItems: 'flex-end',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              marginRight: h('2%'),
              fontSize: 15,
            }}>
            SKIP
          </Text>
        </View>
        {/* CHOOSE YOUR PLAN */}
        <View
          style={{
            height: h('5%'),
            width: '100%',
            // backgroundColor: '#fff3',
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              // marginLeft: h('2%'),
              fontSize: 29,
              fontWeight: 'bold',
              color: 'pink',
            }}>
            CHOOSE
          </Text>
        </View>
        {/* CHOOSE YOUR PLAN 2ND */}
        <View
          style={{
            height: h('5%'),
            width: '100%',
            // backgroundColor: 'white',
            alignItems: 'flex-start',
            justifyContent: 'center',
            // marginBottom: h('5%'),
          }}>
          <Text
            style={{
              fontSize: 29,
              fontWeight: 'bold',
              color: 'pink',
            }}>
            YOUR PLAN
          </Text>
        </View>
        <View
          style={{
            height: h('8%'),
            width: '100%',
            // backgroundColor: 'blue',
          }}>
          <Text
            style={{
              fontSize: 16,
            }}>
            {' '}
            Lose weight with the plan that suits you best
          </Text>
        </View>
        <SafeAreaView />
        <View
          style={{
            height: h('50%'),
            width: '90%',
            // backgroundColor: 'green',
          }}>
          <FlatList
            data={this.state.data}
            renderItem={({item}) => this.design(item)}
            keyExtractor={(item) => item.name}
          />
        </View>
        <View
          style={{
            height: h('9%'),
            width: w('90%'),
            // backgroundColor: 'red',
            marginTop: h('4%'),
            borderWidth: h('0.1%'),
          }}>
          <FlatList
            data={this.state.data1}
            renderItem={({item}) => this.design1(item)}
            keyExtractor={(item) => item.name}
            horizontal={true}
          />
        </View>
      </View>
    );
  }
}
