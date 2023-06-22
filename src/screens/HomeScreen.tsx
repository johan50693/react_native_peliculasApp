import React from 'react';
import { View, ActivityIndicator, Dimensions, FlatList, ScrollView } from 'react-native';
import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradientBackground } from '../components/GradientBackground';
import { getImageColors } from '../helper/getColores';

const {width: windowsWidth} = Dimensions.get('window');

export const HomeScreen = () => {

  const { nowPlaying, popular, topRated, upcoming, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();
  
  const getPosterColors = async (index: number) => {
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const [primary,secondary] = await getImageColors(uri);
    
    console.log({primary,secondary});
  }

  if (isLoading) {
    return (
      <View style={{ flex:1, justifyContent: 'center', alignContent: 'center'}} >
        <ActivityIndicator color='red' size={100} />
      </View>
    )
  }

  return (

    <GradientBackground>
      <ScrollView>
        {/* Carousel principal  */}
        <View style={{marginTop: top+20 }} >
                {/* Carousel Principal */}
                <View style={{height: 440}}>
                  <Carousel
                    data={nowPlaying}
                    renderItem={ ({item}: any) => <MoviePoster movie={item} />}
                    sliderWidth={windowsWidth}
                    itemWidth={300}
                    inactiveSlideOpacity={0.9}
                    onSnapToItem={ index => getPosterColors(index)}
                  />
                </View>

                <HorizontalSlider title="Populares" movies={popular}  />
                <HorizontalSlider title="Top" movies={topRated}  />
                <HorizontalSlider title="Proximamente" movies={upcoming}  />
        </View>
      </ScrollView>
    </GradientBackground>
  );
};