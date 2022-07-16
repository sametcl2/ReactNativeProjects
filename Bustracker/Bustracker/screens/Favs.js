import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

import Header from '../components/Header';

const Favs = () => {
  return (
    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
      <SafeAreaView>
        <Text>Favs</Text>
      </SafeAreaView>
    </View>
  );
};

export default Favs;

const styles = StyleSheet.create({});
