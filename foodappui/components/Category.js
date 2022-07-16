import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

import CategoryItem from './CategoryItem';

const Category = ({categoriesData}) => {
  return (
    <View style={styles.categoriesWrapper}>
      <Text style={styles.categoriesTitle}>Categories</Text>
      <View style={styles.categoriesListWrapper}>
        <FlatList
          data={categoriesData}
          renderItem={CategoryItem}
          keyExtractor={item => item.id}
          horizontal={true}
        />
      </View>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  categoriesWrapper: {
    marginTop: 30,
  },
  categoriesTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    paddingHorizontal: 20,
  },
  categoriesListWrapper: {
    paddingTop: 15,
    paddingBottom: 20,
  },
});
