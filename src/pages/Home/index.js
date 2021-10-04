import React, { useState, useEffect } from 'react'

import { ScrollView, ActivityIndicator ,View, Text} from 'react-native';
import { 
  Container,
  SearchContainer,
  Input, 
  SearchButton, 
  Title, 
  BannerButton,
  Banner,
  SliderMovie,
  LoadingContent,
  BannerTitle } from './styles';
  
import { getListMovies, randomBanner } from '../../utils/movie';
import Header from '../../components/Header';
import SliderMovieItem from '../../components/SliderMovieItem';
import api, { key } from '../../services/api';

import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core';


function Home() {

  const [nowMovies, setNowMovies] = useState([]);
  const [popularData, setPopularData] = useState([]);
  const [topData, setTopData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [bannerMovie, setBannerMovie] = useState({});

  const navigation = useNavigation();

  useEffect(() =>{
    let isActive = true;
    const ac = new AbortController();

    async function getMovies(){

      const [nowData, popularData, topData] = await Promise.all([
        api.get('movie/now_playing',{
          params:{
            api_key: key,
            language: 'pt-BR',
            page:1,
          }
        }),
        api.get('movie/popular',{
          params:{
            api_key: key,
            language: 'pt-BR',
            page:1,
          }
        }),
        api.get('movie/top_rated',{
          params:{
            api_key: key,
            language: 'pt-BR',
            page:1,
          }
        })
      ])

      if(isActive){
        const nowList = getListMovies(10, nowData.data.results);
        const popularList = getListMovies(10, popularData.data.results);
        const topList = getListMovies(10, topData.data.results);

        setBannerMovie(nowData.data.results[randomBanner(nowData.data.results)])
        setNowMovies(nowList)
        setPopularData(popularList)
        setTopData(topList)
        setLoading(false)
      }
    }

    getMovies();

    return() => {
      isActive = false;
      ac.abort();
    }

  }, [])


  function navigationDetailsPage(item){
    navigation.navigate('Detail', {id: item.id})
  }

  if(loading){
    return(
        <LoadingContent>
          <ActivityIndicator size="large" color="#FFF"/>
        </LoadingContent>
    )
  }

  return (
    <Container>

      <Header />

      <SearchContainer>
        <Input placeholder="Ex.: vingadores" />
        <SearchButton>
          <Feather name="search" size={36} color="#FFF" />
        </SearchButton>
      </SearchContainer>
      
      <ScrollView  showsVerticalScrollIndicator={false}> 
        
        <BannerButton activeOpacity={0.9} onPress={() => navigationDetailsPage(bannerMovie)}>
          <Banner 
          resizedMethod="resize"
          source={{ uri: `https://image.tmdb.org/t/p/original/${bannerMovie.poster_path}`}}/>
          <BannerTitle>{bannerMovie.title}</BannerTitle>
        </BannerButton>

        <Title>Em Cartaz</Title>
        <SliderMovie
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={nowMovies}
          renderItem={ ({ item }) => <SliderMovieItem data={item} navigatePage={ () => navigationDetailsPage(item) }/>}
          keyExtractor={ (item) => String(item.id) }
        />

        <Title>Populares</Title>
        <SliderMovie
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={popularData}
          renderItem={ ({ item }) => <SliderMovieItem data={item} navigatePage={ () => navigationDetailsPage(item) }/>}
          keyExtractor={ (item) => String(item.id) }
        />

        <Title>Mais votados</Title>
        <SliderMovie
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={topData}
          renderItem={ ({ item }) => <SliderMovieItem data={item} navigatePage={ () => navigationDetailsPage(item) }/>}
          keyExtractor={ (item) => String(item.id) }
        />
      </ScrollView>

    </Container>
  )
}

export default Home;
