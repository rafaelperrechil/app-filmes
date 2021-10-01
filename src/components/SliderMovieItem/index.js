import React from 'react'

import { View, Text} from 'react-native';
import { Container, Title, BannerImage} from './styles';


function SliderMovieItem() {
  return (
    <Container>
      <BannerImage
      source={{ uri: 'http://3.bp.blogspot.com/-9-u-xf9fnvA/T5g_s9BP_VI/AAAAAAAAB9g/BBhIg4ZfHhw/s1600/Vingadores-banner-14mar2012.jpg'}}
      />
      <Title numberOfLines={1}>Vingadores VingadoresVingadores</Title>
    </Container>
  )
}
export default SliderMovieItem;