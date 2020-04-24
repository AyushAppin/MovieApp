import * as React from 'react';
import {
  View,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Utils from '../../utils';
import Constants from '../../constants';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Colors from 'src/constants/Colors';

export default function SearchHeader() {
  return (
    <>
      <View style={styles.container}>
        <>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={Constants.Colors.headerGradient}
            style={styles.linear}
          />
          <View style={styles.topContainer}>
            <TouchableOpacity>
              <MaterialIcons
                color={Constants.Colors.white}
                size={Utils.Dimensions.vw(25)}
                name={'sort'}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={Constants.Images.profile} />
            </TouchableOpacity>
          </View>
        </>

        <View style={styles.searchContainer}>
          <MaterialIcons size={Utils.Dimensions.vw(20)} name={'search'} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search movie title.."
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Utils.Dimensions.vh(125),
  },
  topContainer: {
    height: Utils.Dimensions.vh(50),
    marginTop: Utils.Dimensions.vh(20),
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingRight: Utils.Dimensions.vw(20),
    paddingLeft: Utils.Dimensions.vw(20),
    alignItems: 'center',
  },
  searchContainer: {
    height: Utils.Dimensions.vh(38),
    backgroundColor: Constants.Colors.white,
    borderRadius: Utils.Dimensions.vh(110),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Utils.Dimensions.vh(16),
    position: 'absolute',
    width: '90%',
    bottom: Utils.Dimensions.vh(10),
    left: Utils.Dimensions.vw(20),
    shadowColor: 'lightgray',
    shadowOpacity: 0.5,
    shadowOffset: {
      height: Utils.Dimensions.vh(2),
      width: Utils.Dimensions.vh(1.5),
    },
    elevation: 3,
  },
  searchInput: {
    flex: 1,
    marginHorizontal: Utils.Dimensions.vh(10),
    height: '100%',
    fontSize: Utils.Dimensions.vh(13),
  },
  linear: {
    width: '130%',
    height: Utils.Dimensions.vh(110),
    borderBottomLeftRadius: Utils.Dimensions.vw(100),
    borderBottomRightRadius: Utils.Dimensions.vw(100),
    position: 'absolute',
    left: Utils.Dimensions.vw(-60),
  },
});
