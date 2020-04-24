import React from 'react';
import {View, StyleSheet, Text, ImageBackground} from 'react-native';
import Constants from '../../constants';
import Utils from '../../utils';

interface Props {
  title: string;
}

export default function CinemaCard(props: Props) {
  return (
    <>
      <ImageBackground
        source={Constants.Images.cinema}
        style={styles.imageBackGround}
        imageStyle={styles.image}>
        <View style={styles.overlay} />
        <Text style={styles.title}>{props.title}</Text>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    borderRadius: 15,
  },
  title: {
    fontSize: 16,
    color: Constants.Colors.white,
    fontWeight: '700',
    position: 'absolute',
    marginHorizontal: Utils.Dimensions.vw(10),
  },
  imageBackGround: {
    alignItems: 'center',
    borderRadius: 15,
    justifyContent: 'center',
    width: Utils.Dimensions.vw(100),
    height: Utils.Dimensions.vw(90),
    overflow: 'hidden',
    marginHorizontal: Utils.Dimensions.vw(10),
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
});
