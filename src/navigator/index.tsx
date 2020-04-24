import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FeatherIcon from 'react-native-vector-icons/Feather';

import Home from '../containers/Home';
import Constants from '../constants';
import Utils from '../utils';
// import Utils from "../utils";

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

//@ts-ignore
const HomeNavigator = ({navigation, route}) => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name={'Home'}
        component={Home}
        options={{
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  );
};

/**
 * define bottom tab navigator
 */
export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: Constants.Colors.appYellow,
        }}>
        <Tab.Screen
          name="Home"
          component={HomeNavigator}
          options={{
            tabBarLabel: 'HOME',

            tabBarIcon: ({focused, size}) =>
              focused ? (
                <FeatherIcon
                  size={25}
                  name={'home'}
                  color={Constants.Colors.appYellow}
                />
              ) : (
                <FeatherIcon
                  size={25}
                  name={'home'}
                  color={Constants.Colors.grey}
                />
              ),
          }}
        />
        <Tab.Screen
          name="Tickets"
          component={HomeNavigator}
          options={{
            tabBarLabel: 'Tickets',
            tabBarIcon: ({focused, size}) =>
              focused ? (
                <FeatherIcon
                  size={25}
                  name={'home'}
                  color={Constants.Colors.appYellow}
                />
              ) : (
                <FeatherIcon
                  size={25}
                  name={'home'}
                  color={Constants.Colors.grey}
                />
              ),
          }}
        />
        <Tab.Screen
          name="Center"
          component={Home}
          options={{
            tabBarButton: () => (
              <View style={styles.tabBarButtonContainer}>
                <Image
                  source={Constants.Images.bitCoin}
                  style={styles.tabBarButtonImage}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Movies"
          component={HomeNavigator}
          options={{
            tabBarLabel: 'Movies',
            tabBarIcon: ({focused, size}) =>
              focused ? (
                <FeatherIcon
                  size={25}
                  name={'home'}
                  color={Constants.Colors.appYellow}
                />
              ) : (
                <FeatherIcon
                  size={25}
                  name={'home'}
                  color={Constants.Colors.grey}
                />
              ),
          }}
        />
        <Tab.Screen
          name="Cinemas"
          component={HomeNavigator}
          options={{
            tabBarLabel: 'Cinemas',
            tabBarIcon: ({focused, size}) =>
              focused ? (
                <FeatherIcon
                  size={25}
                  name={'home'}
                  color={Constants.Colors.appYellow}
                />
              ) : (
                <FeatherIcon
                  size={25}
                  name={'home'}
                  color={Constants.Colors.grey}
                />
              ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBarButtonContainer: {
    height: 90,
    width: 90,
    borderRadius: 100,
    borderBottomColor: 'transparent',
    borderBottomWidth: 50,
    bottom: 40,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  tabBarButtonImage: {
    width: Utils.Dimensions.vw(60),
    height: Utils.Dimensions.vw(60),
    top: 40,
  },
});
