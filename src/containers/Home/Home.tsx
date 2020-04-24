import React, {PureComponent} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchHeader from '../../components/SearchHeader';
import CinemaCard from '../../components/CinemaCard';
import MovieCard from '../../components/MovieCard';
import {HomeState} from 'src/modules/Home/types';
import {ScrollView, FlatList} from 'react-native-gesture-handler';
import Constants from '../../constants';
import Loader from '../../components/Loader';

interface Props extends HomeState {
  navigation: any;
  getMovies: Function;
}
export default class Home extends PureComponent<Props> {
  componentDidMount() {
    this.props.getMovies();
  }

  render() {
    return (
      <View style={styles.container}>
        <SearchHeader />
        {this.props.isLoading ? (
          <Loader />
        ) : (
          <ScrollView
            style={styles.scrollContainer}
            bounces={false}
            showsVerticalScrollIndicator={false}>
            <>
              <View>
                <Text style={styles.title}>Cinema around your area</Text>
                <FlatList
                  data={[
                    'IOI CITY',
                    'PAVILLION',
                    'NU CENTRAL',
                    'IOI CITY',
                    'PAVILLION',
                  ]}
                  horizontal={true}
                  keyExtractor={(item: any, index: any) => index.toString()}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({item, index}) => <CinemaCard title={item} />}
                />
              </View>
              <View>
                <Text style={styles.title}>New Releases</Text>
                <FlatList
                  data={this.props.movies}
                  horizontal={true}
                  keyExtractor={(item: any, index: any) => index.toString()}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({item, index}) => <MovieCard {...item} />}
                />
              </View>
              <View>
                <Text style={styles.title}>You might want to see this</Text>
                <FlatList
                  data={this.props.movies}
                  horizontal={true}
                  keyExtractor={(item: any, index: any) => index.toString()}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({item, index}) => <MovieCard {...item} />}
                />
              </View>
            </>
          </ScrollView>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constants.Colors.white,
  },
  scrollContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    marginVertical: 20,
    paddingHorizontal: 10,
  },
});
