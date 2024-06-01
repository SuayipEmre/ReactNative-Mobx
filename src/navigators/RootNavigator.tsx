import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerMenuStackParamList } from '../types/DrawerMenuStackParamList';
import CustomDrawerMenu from './CustomDrawerMenu';
import TodosScreen from '../screens/TodosScreen';
import UsersScreen from '../screens/UsersScreen';
import { PostsNavigator } from './PostsNavigator';
import FavoritesScreen from '../screens/FavoritesScreen';


const Drawer = createDrawerNavigator<DrawerMenuStackParamList>()

const RootNavigator = () => {

  return (
    <Drawer.Navigator
      initialRouteName="TodosScreen"
      screenOptions={{
        drawerType: 'front',
        drawerStyle: {
          width: 372,
          zIndex: 12,
          borderTopEndRadius : 50,
          borderBottomEndRadius : 50,
        },
        headerShown: false
      }}

      drawerContent={(props) => {
        const { routeNames, index, } = props.state
        const focused = routeNames[index]
        return <CustomDrawerMenu focused={focused} props={props} />
      }}
    >
      <Drawer.Screen name="TodosScreen" component={TodosScreen} />
      <Drawer.Screen name="UsersScreen" component={UsersScreen} />
      <Drawer.Screen name="PostsNavigator" component={PostsNavigator} />
      <Drawer.Screen name="FavoritesScreen" component={FavoritesScreen} />
    </Drawer.Navigator>
  );
}

export default RootNavigator