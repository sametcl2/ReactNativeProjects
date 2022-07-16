import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import colors from '../assets/colors/colors';

const InfoItem = ({title, text}) => {
  return (
    <View style={styles.infoItemWrapper}>
      <Text style={styles.infoItemTitle}>{title}</Text>
      <Text style={styles.infoItemText}>{text}</Text>
    </View>
  );
};

export default InfoItem;

const styles = StyleSheet.create({
  infoItemWrapper: {
    marginBottom: 20,
  },
  infoItemTitle: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    color: colors.textLight,
  },
  infoItemText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 18,
    color: colors.textDark,
  },
});
