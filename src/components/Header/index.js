import React from 'react'
import { View, Text} from 'react-native';
import { Feather } from '@expo/vector-icons'
import {Container, MenuButton, Title} from './styles';
import { useNavigation } from '@react-navigation/native'

function Header({ title }) {

  const navigation = useNavigation();

  return (
    <Container>
      <MenuButton onPress={ ()=> navigation.openDrawer() }>
        <Feather name="menu" size={36} color="#FFF" />
        <Title>{title}</Title>
      </MenuButton>
    </Container>
  )
}

export default Header;