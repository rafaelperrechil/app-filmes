import React, { useState, useEffect } from 'react'

import { ScrollView, View, Text} from 'react-native';
import { 
  Container,
  SearchContainer,
  Input, 
  SearchButton, 
  Title, 
  BannerButton,
  Banner,
  SliderMovie } from './styles';
import { Feather } from '@expo/vector-icons'

import Header from '../../components/Header';
import SliderMovieItem from '../../components/SliderMovieItem';

function Home() {
  return (
    <Container>

      <Header title="Home"/>

      <SearchContainer>
        <Input placeholder="Ex.: vingadores" />
        <SearchButton>
          <Feather name="search" size={36} color="#FFF" />
        </SearchButton>
      </SearchContainer>
      
      <ScrollView  showsVerticalScrollIndicator={false}> 
        <Title>Em Cartaz</Title>
        <BannerButton activeOpacity={0.9} onPress={() => alert('a')}>
          <Banner 
          resizedMethod="resize"
          source={{ uri: 'http://3.bp.blogspot.com/-9-u-xf9fnvA/T5g_s9BP_VI/AAAAAAAAB9g/BBhIg4ZfHhw/s1600/Vingadores-banner-14mar2012.jpg'}}/>
        </BannerButton>

        <SliderMovie
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={[1,2,3,4]}
          renderItem={ ({ item }) => <SliderMovieItem/>}
        />

        <Title>Populares</Title>
        <SliderMovie
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={[1,2,3,4]}
          renderItem={ ({ item }) => <SliderMovieItem/>}
        />

        <Title>Mais votados</Title>
        <SliderMovie
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={[1,2,3,4]}
          renderItem={ ({ item }) => <SliderMovieItem/>}
        />
      </ScrollView>

    </Container>
  )
}

export default Home;
