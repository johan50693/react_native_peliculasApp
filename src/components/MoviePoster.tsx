import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
  movie: Movie;
  width?: number;
  height?: number;
}

export const MoviePoster = ( {movie, height = 420, width = 300}: Props) => {
  
  // console.log(movie.poster_path);
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const navigation = useNavigation();

  return (
      <TouchableOpacity 
        onPress={ () =>  navigation.navigate('DetailScreen', movie)}
        activeOpacity={0.6}
        style={{
          width,
          height,
          marginHorizontal: 2,
          paddingBottom: 20,
          paddingHorizontal: 7
          // backgroundColor: 'red'
        }} 
      >

        <View style={styles.imageContainer} >
          <Image 
            source={{uri}}
            style={styles.image}
          />
        </View>
      </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
    image: {
      flex: 1,
      borderRadius: 20,
    },
    imageContainer: {
      flex:1,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 10,
      borderRadius: 20,
    }
});