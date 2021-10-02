import React from 'react'
import { createDrawerNavigator} from '@react-navigation/drawer'

import { MaterialCommunityIcons } from '@expo/vector-icons'
import Movies from '../pages/Movies';

import StackRoutes from './stackRoutes';

const Drawer = createDrawerNavigator();

function Routes(){

  return(
    <Drawer.Navigator
      screenOptions={{
        headerShown:false, //remove o header
        drawerStyle:{
          backgroundColor: '#ad0a0f',
          paddingTop: 20,
        },       
        drawerActiveBackgroundColor: '#000',
        drawerActiveTintColor: '#FFF',
        drawerInactiveBackgroundColor: '#FFF'
      }}
    >
      <Drawer.Screen 
      name="Home" 
      component={StackRoutes} 
      options={{
        title: 'Inicio',
        drawerIcon: ({focused, size, color}) => (
          <MaterialCommunityIcons 
          name={focused ? "movie-open"  : "movie-outline" }
          size={size} 
          color={color}/>
        )
      }}
      />
      <Drawer.Screen 
      name="Movies" 
      component={Movies} 
      options={{
        title: 'Meus Filmes',
        drawerIcon: ({focused, size, color}) => (
          <MaterialCommunityIcons 
          name={focused ? "archive"  : "archive-outline" }
          size={size} 
          color={color}/>
        )
      }}
      />
    </Drawer.Navigator>
  );
}

export default Routes;