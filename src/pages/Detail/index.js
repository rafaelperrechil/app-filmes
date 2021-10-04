import React from 'react'
import { 
  Container, 
  Header,
  HeaderButton,
  Banner,
  ButtonLink,
  Title,
  ContentStars,
  Rate,
  ListGenres,
  Description,
  LoadingContent
 } from './style';

import api, { key } from '../../services/api';

import Genres from '../../components/Genres';

import { Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute} from '@react-navigation/native';
import { useEffect, useState } from 'react/cjs/react.development';

import Stars from 'react-native-stars';
import { ScrollView, ActivityIndicator} from 'react-native';

function index() {
  const navigation = useNavigation();
  const route = useRoute();

  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  
  useEffect(() =>{
    let isActive = true;

    async function getMovie(){

      const response = await api.get (`/movie/${route.params?.id}`,{
        params:{
          api_key: key,
          language: 'pt-BR'
        }
      })
      .catch((err) => {
        console.log(err);
      })

      if(isActive){
        setMovie(response.data);
        setLoading(false)
      }

    }

    if(isActive){
      getMovie();
    }

    return () => {
      isActive = false;
    }

  }, [])

  if(loading){
    return(
        <LoadingContent>
          <ActivityIndicator size="large" color="#FFF"/>
        </LoadingContent>
    )
  }

  return (
    <Container>
      <Header>
        <HeaderButton activeOpacity={0.7} onPress={ () => navigation.goBack() }>
          <Feather
            name="arrow-left"
            size={28}
            color="#FFF"
          />
        </HeaderButton>
        <HeaderButton>
          <Ionicons
            name="bookmark"
            size={28}
            color="#FFF"
          />
        </HeaderButton>
      </Header>
      <Banner
      resizeMethod="resize"
      source={{ uri: `https://image.tmdb.org/t/p/original/${movie.poster_path}`}}
      />
      <ButtonLink>
        <Feather name="link" size={24} color="#FFF" />
      </ButtonLink>
      <Title>{movie.title}</Title>
      <ContentStars>
        <Stars
          default={movie.vote_average}
          count={10}
          half={true}
          starSize={20}
          fullStar={ <Ionicons name="md-star" size={24} color="#DFAD21" />}
          emptyStar={ <Ionicons name="md-star-outline" size={24} color="#DFAD21" />}
          halfStar={ <Ionicons name="md-star-half" size={24} color="#DFAD21" />}
          disable={true}
        />
        <Rate>{movie.vote_average}/10</Rate>
      </ContentStars>
      <ListGenres 
        data={movie?.genres}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={ (item) => String(item.id) }
        renderItem={({item}) => <Genres data={item} />}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Title>Descrição</Title>
        <Description>{movie.overview}</Description>
      </ScrollView>
    </Container>
  )
}

export default index;