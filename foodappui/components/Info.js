import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import InfoItem from './InfoItem';

const Info = ({item}) => {
  return (
    <View style={styles.infoWrapper}>
      <View style={styles.infoLeftWrapper}>
        <InfoItem title="Size" text={`${item.sizeName} ${item.sizeNumber}`} />
        <InfoItem title="Crust" text={`${item.crust} `} />
        <InfoItem title="Delivery in" text={`${item.deliveryTime} `} />
      </View>
      <View>
        <Image source={item.image} style={styles.itemImage} />
      </View>
    </View>
  );
};

export default Info;

const styles = StyleSheet.create({
  infoWrapper: {
    marginTop: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoLeftWrapper: {
    paddingLeft: 20,
  },
  itemImage: {
    resizeMode: 'contain',
    marginLeft: 50,
  },
});
