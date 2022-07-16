import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

import colors from '../assets/colors/colors';

const IngredientsItem = ({item}) => {
  return (
    <View
      style={[
        styles.ingredientItemWrapper,
        {
          marginLeft: item.id === '1' ? 20 : 0,
        },
      ]}>
      <Image source={item.image} style={styles.ingredientImage} />
    </View>
  );
};

export default IngredientsItem;

const styles = StyleSheet.create({
  ingredientItemWrapper: {
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginRight: 15,
    borderRadius: 15,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  ingredientImage: {
    resizeMode: 'contain',
  },
});
