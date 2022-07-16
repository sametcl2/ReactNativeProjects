import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import colors from '../assets/colors/colors';

Feather.loadFont();

const Header = () => {
  return (
    <View style={styles.headerWrapper}>
      <Image
        source={require('../assets/images/profile.png')}
        style={styles.profileImage}
      />
      <Feather name="menu" size={24} color={colors.textDark} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
});
