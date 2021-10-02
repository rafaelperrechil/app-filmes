import React from 'react'

import { View, Text} from 'react-native';
import { Container, Title, BannerImage} from './styles';


function SliderMovieItem({data, navigatePage}) {
  return (
    <Container onPress={ () => { navigatePage(data) }}>
      <BannerImage
      source={{ uri: `https://image.tmdb.org/t/p/original/${data.poster_path}`}}
      />
      <Title numberOfLines={1}>{data.title}</Title>
    </Container>
  )
}
export default SliderMovieItem;