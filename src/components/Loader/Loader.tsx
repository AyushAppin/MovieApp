import React from 'react';
import {View, StyleSheet, Dimensions, ActivityIndicator} from 'react-native';
//@ts-ignore
import Constants from '../../constants';

export default function Loader() {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        size={'large'}
        animating={true}
        color={Constants.Colors.appYellow}
      />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Constants.Colors.loaderBack,
    position: 'absolute',
  },
});
