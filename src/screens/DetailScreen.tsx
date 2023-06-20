import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
import { RootStackParams } from '../navigattion/Navigation';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { useMovieDetail } from '../hooks/useMovieDetail';
import { MovieDetails } from '../components/MovieDetails';

interface Props extends StackScreenProps<RootStackParams,'DetailScreen'>{};

const screenHeight = Dimensions.get('screen').height;

export const DetailScreen = ( {route, navigation} : Props) => {

  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const {isLoading, movieFull, cast} = useMovieDetail(movie.id);

  return (

    <ScrollView>
      <View style={styles.imageContainer} >
          <View style={styles.imageBorder} >
            <Image 
              source={{uri}}
              style={styles.posterImage}
            />
          </View>
      </View>

      <View style={styles.marginContainer} >
        <Text style={styles.subTitle} >{movie.original_title}</Text>
        <Text style={styles.title} >{movie.title}</Text>
      </View>


        {
          isLoading 
            ? <ActivityIndicator size={30} color="grey" style={{marginTop: 20}} />
            : <MovieDetails movieFull={movieFull!} cast={cast}/>
          
        }

        {/* Boton para cerrar  */}

        <View  style= {styles.backBotton}>
          <TouchableOpacity 
            onPress={ () => navigation.pop()}
          >
            <Icon 
              color="white"
              name="arrow-back-outline"
              size={60}
              
            />
          </TouchableOpacity>
        </View>

    </ScrollView>
  );
};


const styles = StyleSheet.create({
  imageBorder: {
    flex: 1,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
    overflow: 'hidden',
  },
  posterImage: {
    flex:1,
    backgroundColor: 'red'
  },
  imageContainer: {
    width: '100%',
    // overflow: 'hidden',
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
  },
  backBotton: {
    position: 'absolute',
    zIndex: 999,
    elevation: 9,
    top: 30,
    left: 5,
  }
});