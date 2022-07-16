import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import colors from '../assets/colors/colors';
import HomeHeader from '../components/HomeHeader';
import Search from '../components/Search';
import Category from '../components/Category';
import PopularCard from '../components/PopularCard';
import categoriesData from '../assets/data/categoriesData';
import popularData from '../assets/data/popularData';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}>
        <SafeAreaView>
          <HomeHeader />
          <View style={styles.titlesWrapper}>
            <Text style={styles.titlesSubtitle}>Food</Text>
            <Text style={styles.titlesTitle}>Delivery</Text>
          </View>
          <Search />
          <Category categoriesData={categoriesData} />
          <View style={styles.popularWrapper}>
            <Text style={styles.popularTitle}>Popular</Text>
            {popularData.map(item => (
              <TouchableOpacity
                key={item.id}
                onPress={() =>
                  navigation.navigate('Details', {
                    item: item,
                  })
                }>
                <PopularCard item={item} />
              </TouchableOpacity>
            ))}
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titlesWrapper: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  titlesSubtitle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    color: colors.textDark,
  },
  titlesTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
    color: colors.textDark,
    marginTop: 5,
  },
  popularWrapper: {
    paddingHorizontal: 20,
  },
  paddingTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
  },
  popularTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
  },
});
