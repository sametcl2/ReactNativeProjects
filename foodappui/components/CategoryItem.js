import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import colors from '../assets/colors/colors';

const CategoryItem = ({item}) => {
  return (
    <View
      style={[
        styles.categoryItemWrapper,
        {
          backgroundColor: item.selected ? colors.primary : colors.white,
          marginLeft: item.id == 1 ? 20 : 0,
        },
      ]}>
      <Image source={item.image} style={styles.categoryItemImage} />
      <Text style={styles.categoryItemTitle}>{item.title}</Text>
      <View
        style={[
          styles.categoryItemSelectWrapper,
          {backgroundColor: item.selected ? colors.white : colors.secondary},
        ]}>
        <Feather
          style={styles.categoryItemSelect}
          color={item.selected ? colors.black : colors.white}
          name="chevron-right"
          size={16}
        />
      </View>
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  categoryItemWrapper: {
    marginRight: 20,
    borderRadius: 20,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 2,
  },
  categoryItemImage: {
    width: 60,
    height: 60,
    marginTop: 25,
    alignSelf: 'center',
    marginHorizontal: 20,
  },
  categoryItemTitle: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    marginTop: 10,
  },
  categoryItemSelectWrapper: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: 26,
    height: 26,
    borderRadius: 26,
    marginBottom: 20,
  },
  categoryItemSelect: {
    alignSelf: 'center',
  },
});
