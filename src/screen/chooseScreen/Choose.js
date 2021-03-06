/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';

export class Choose extends React.Component {
  componentDidMount = () => {
    setTimeout(() => {
      this.props.navigation.navigate('FlatChoose');
    }, 3000);
  };
  markOk = () => {
    <Icon name={'fitness'} size={h('4%')} color={'black'} />;
  };

  render() {
    return (
      // PARENT VIEW
      <View
        style={{
          height: h('100%'),
          width: '100%',
          // backgroundColor: 'grey',
        }}>
        {/* SKIP VIEW */}
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
        {/* CHOOSE BUTTON MAIN VIEW */}
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'flex-end',
            marginTop: h('4%'),
          }}>
          <View
            style={{
              height: h('60%'),
              width: '90%',
              // backgroundColor: 'pink',
              //   alignItems: 'center',
              justifyContent: 'flex-end',
            }}>
            {/* Button 1 */}
            <TouchableOpacity
              style={{
                height: h('10%'),
                width: '100%',
                backgroundColor: '#fff1',
                borderRadius: h('7%'),
                alignItems: 'center',
                // justifyContent: 'center',
                flexDirection: 'row',
                borderWidth: h('0.1%'),
              }}>
              <View
                style={{
                  height: h('10%'),
                  width: '15%',
                  // backgroundColor: 'orange',
                  borderRadius: h('5%'),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon name={'fitness'} size={h('4%')} color={'black'} />
              </View>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>
                {' '}
                Lose weight & keep fit{' '}
              </Text>
              <View
                style={{
                  height: h('10%'),
                  width: '15%',
                  // backgroundColor: 'orange',
                  borderRadius: h('5%'),
                }}></View>
            </TouchableOpacity>
            {/* 2ND BUTTON */}
            <TouchableOpacity
              style={{
                height: h('10%'),
                width: '100%',
                backgroundColor: '#fff3',
                borderRadius: h('7%'),
                alignItems: 'center',
                // justifyContent: 'center',
                flexDirection: 'row',
                borderWidth: h('0.1%'),
              }}>
              <View
                style={{
                  height: h('10%'),
                  width: '15%',
                  // backgroundColor: 'orange',
                  borderRadius: h('5%'),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon name={'man'} size={h('4%')} color={'black'} />
              </View>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>
                {' '}
                Butt lift & tone{' '}
              </Text>
              <View
                style={{
                  height: h('10%'),
                  width: '15%',
                  // backgroundColor: 'orange',
                  borderRadius: h('5%'),
                }}></View>
            </TouchableOpacity>
            {/* Button 3 */}
            <TouchableOpacity
              style={{
                height: h('10%'),
                width: '100%',
                backgroundColor: '#fff3',
                borderRadius: h('7%'),
                alignItems: 'center',
                // justifyContent: 'center',
                flexDirection: 'row',
                borderWidth: h('0.1%'),
              }}>
              <View
                style={{
                  height: h('10%'),
                  width: '15%',
                  // backgroundColor: 'orange',
                  borderRadius: h('5%'),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon name={'man'} size={h('4%')} color={'black'} />
              </View>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>
                {' '}
                Lose belly fat{' '}
              </Text>
              <View
                style={{
                  height: h('10%'),
                  width: '15%',
                  // backgroundColor: 'orange',
                  borderRadius: h('5%'),
                }}></View>
            </TouchableOpacity>
            {/* Button 4 */}
            <TouchableOpacity
              style={{
                height: h('10%'),
                width: '100%',
                backgroundColor: '#fff3',
                borderRadius: h('7%'),
                alignItems: 'center',
                // justifyContent: 'center',
                flexDirection: 'row',
                borderWidth: h('0.1%'),
              }}>
              <View
                style={{
                  height: h('10%'),
                  width: '15%',
                  // backgroundColor: 'orange',
                  borderRadius: h('5%'),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon name={'fitness-outline'} size={h('4%')} color={'black'} />
              </View>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>
                {' '}
                Build muscle & strength{' '}
              </Text>
              <View
                style={{
                  height: h('10%'),
                  width: '15%',
                  // backgroundColor: 'orange',
                  borderRadius: h('5%'),
                }}></View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
