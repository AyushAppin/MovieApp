import React, {memo} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import Utils from '../../utils';
import Constants from '../../constants';
import StarRating from 'react-native-star-rating';
import {Movie} from 'src/modules/Home/types';
interface Props extends Movie {}

export default function MovieCard(props: Props) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: `${Utils.APIConstants.IMAGE_BASE_URL}${props.poster_path}`,
        }}
      />
      <Text numberOfLines={1} style={styles.subTitle}>
        {props.original_title}
      </Text>
      <StarRating
        disabled={false}
        maxStars={5}
        rating={3.5}
        starSize={20}
        fullStarColor={Constants.Colors.appYellow}
        emptyStarColor={Constants.Colors.appYellow}
        containerStyle={styles.starContainer}
        buttonStyle={styles.starBtn}
      />
      <Text numberOfLines={2} style={styles.title}>
        {props.title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    marginHorizontal: 10,
    width: Utils.Dimensions.vw(180),
    height: Utils.Dimensions.vw(285),
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 5,
  },
  subTitle: {
    fontSize: 16,
    marginVertical: 5,
  },
  image: {
    width: Utils.Dimensions.vw(170),
    height: Utils.Dimensions.vw(170),
    borderRadius: 20,
  },
  starContainer: {
    width: Utils.Dimensions.vw(160),
  },
  starBtn: {
    paddingLeft: 5,
    paddingRight: 5,
  },
});
