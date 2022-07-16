import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Alert, Platform} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {check, PERMISSIONS, request} from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';

const Home = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const [initialLocation, setInitialLocation] = useState(null);

  useEffect(() => {
    if (Platform.OS === 'ios') {
      check(PERMISSIONS.IOS.LOCATION_ALWAYS)
        .then(result => {
          if (result === 'denied') {
            request(PERMISSIONS.IOS.LOCATION_ALWAYS).then(result => {
              setHasPermission(true);
              console.log(result);
            });
          } else if (request === 'blocked' || request === 'unavailable') {
            Alert.alert('NO');
          } else if (result === 'granted') {
            setHasPermission(true);
          }
        })
        .catch(error => {
          console.log(error);
        });
    } else if (Platform.OS === 'android') {
      check(PERMISSIONS.ANDROID.LOCATION_ALWAYS)
        .then(result => {
          if (result === 'denied') {
            request(PERMISSIONS.ANDROID.LOCATION_ALWAYS).then(result => {
              setHasPermission(true);
              console.log(result);
            });
          } else if (request === 'blocked' || request === 'unavailable') {
            Alert.alert('NO');
          } else if (result === 'granted') {
            setHasPermission(true);
          }
        })
        .catch(error => {
          console.log(error);
        });
    }

    hasPermission &&
      Geolocation.getCurrentPosition(
        position => {
          setInitialLocation({
            latitude: position?.coords?.latitude,
            longitude: position?.coords?.longitude,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          });
        },
        error => {
          // See error code charts below.
          console.log(error.code, error.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
  }, [hasPermission]);
  return (
    <View style={styles.container}>
      {initialLocation && (
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={initialLocation}
          showsUserLocation={true}
          loadingEnabled={true}
        />
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
