import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
import { RootStackParams } from '../navigattion/Navigation';
import { ScrollView } from 'react-native-gesture-handler';

interface Props extends StackScreenProps<RootStackParams,'DetailScreen'>{};

const screenHeight = Dimensions.get('screen').height;

export const DetailScreen = ( {route} : Props) => {

  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (

    <ScrollView>
      <View style={styles.imageContainer} >
        <Image 
          source={{uri}}
          style={styles.posterImage}
        />
      </View>

      <View style={styles.marginContainer} >
        <Text style={styles.subTitle} >{movie.original_title}</Text>
        <Text style={styles.title} >{movie.title}</Text>
      </View>

    </ScrollView>
  );
};


const styles = StyleSheet.create({
  posterImage: {
    flex:1,
    backgroundColor: 'red'
  },
  imageContainer: {
    width: '100%',
    overflow: 'hidden',
    height: screenHeight*0.7,
    shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 10,
      borderBottomEndRadius: 25,
      borderBottomStartRadius: 25,
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20
  },
  subTitle: {
    fontSize: 16,
    opacity: 0.8
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});