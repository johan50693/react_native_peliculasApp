import React from 'react';
import { View, Text, ActivityIndicator, Dimensions, FlatList, ScrollView } from 'react-native';
import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';

const {width: windowsWidth} = Dimensions.get('window');

export const HomeScreen = () => {

  const {peliculasEnCine, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={{ flex:1, justifyContent: 'center', alignContent: 'center'}} >
        <ActivityIndicator color='red' size={100} />
      </View>
    )
  }

  return (

    <ScrollView>
      {/* Carousel principal  */}
      <View style={{marginTop: top+20 }} >
              {/* Carousel Principal */}
              <View style={{height: 440}}>
                <Carousel
                  data={peliculasEnCine!}
                  renderItem={ ({item}: any) => <MoviePoster movie={item} />}
                  sliderWidth={windowsWidth}
                  itemWidth={300}
                />
              </View>

              {/* Peliculas populares */}
              <View style={{backgroundColor: 'red', height: 260}} >
                <Text style={{fontSize: 30, fontWeight: 'bold'}} >En cine</Text>
                <FlatList 
                  data= {peliculasEnCine}
                  renderItem={ 
                    ({item}):any => <MoviePoster movie={item} width={140} height={200} /> 
                  }
                  keyExtractor={ (item) => item.id.toString() }
                  horizontal= {true}
                  showsHorizontalScrollIndicator={false}
                />
              </View>

        </View>
    </ScrollView>
  );
};