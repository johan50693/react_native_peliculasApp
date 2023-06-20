import React from 'react';
import { View, ActivityIndicator, Dimensions, FlatList, ScrollView } from 'react-native';
import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradientBackground } from '../components/GradientBackground';

const {width: windowsWidth} = Dimensions.get('window');

export const HomeScreen = () => {

  const { nowPlaying, popular, topRated, upcoming, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();

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