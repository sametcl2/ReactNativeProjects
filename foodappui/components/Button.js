import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import colors from '../assets/colors/colors';

Feather.loadFont();

const Button = () => {
  return (
    <TouchableOpacity onPress={() => alert('Your order has been placed!')}>
      <View style={styles.orderWrapper}>
        <Text style={styles.orderText}>Place an order</Text>
        <Feather name="chevron-right" size={18} color={colors.black} />
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  orderWrapper: {
    marginTop: 40,
    marginHorizontal: 20,
    backgroundColor: colors.primary,
    borderRadius: 50,
    paddingVertical: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  orderText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    marginRight: 10,
  },
});
