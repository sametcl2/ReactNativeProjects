import React from 'react';
import {View, StyleSheet, SafeAreaView, Text} from 'react-native';
import DetailHeader from '../components/DetailHeader';

import colors from '../assets/colors/colors';
import Info from '../components/Info';
import Ingredients from '../components/Ingredients';
import Button from '../components/Button';

const Details = ({navigation, route}) => {
  const {item} = route.params;
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <DetailHeader navigation={navigation} />
        <View style={styles.titlesWrapper}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <View style={styles.priceWrapper}>
          <Text style={styles.priceText}>${item.price}</Text>
        </View>
        <Info item={item} />
        <Ingredients item={item} />
        <Button />
      </SafeAreaView>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titlesWrapper: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
    color: colors.textDark,
    width: '50%',
  },
  priceWrapper: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  priceText: {
    color: colors.price,
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
  },
});
