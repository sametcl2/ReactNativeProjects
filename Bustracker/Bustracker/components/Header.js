import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {COLORS, FONTS} from '../constants';

const Header = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>Bir Hat Seçmelisin</Text>
    </TouchableOpacity>
  );
};

export default Header;

const styles = StyleSheet.create({
  button: {
    height: 60,
    marginTop: 10,
    borderRadius: 8,
    backgroundColor: COLORS.blue,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('screen').width - 50,
    shadowColor: COLORS.blue,
    shadowOpacity: 0.8,
    shadowOffset: {width: 4, height: 8},
    shadowRadius: 20,
    elevation: 10,
  },
  text: {...FONTS.h4, color: 'white'},
});
