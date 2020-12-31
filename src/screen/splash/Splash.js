import React from 'react';
import {View, Text, Image} from 'react-native';

import {styles} from './styles';

export class Splash extends React.Component {
  render() {
    return (
      <View style={styles.parentView}>
        <Text style={styles.parentViewText}> Fitness Club</Text>
        <Image
          style={styles.image}
          resizeMode={'stretch'}
          source={require('../../assests/splash.jpg')}
        />
      </View>
    );
  }
}
