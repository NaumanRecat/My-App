import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
export const styles = StyleSheet.create({
  parentView: {
    height: h('100%'),
    width: w('100%'),
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  parentViewText: {
    color: 'black',
    fontSize: 35,
  },
  image: {
    height: h('85%'),
    width: w('87%'),
    borderRadius: h('2%'),
    marginBottom: h('5%'),
  },
});
