import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerMenuStackParamList } from '../types/DrawerMenuStackParamList';
import CustomDrawerMenu from './CustomDrawerMenu';
import TodosScreen from '../screens/TodosScreen';
import UsersScreen from '../screens/UsersScreen';
import { PostsNavigator } from './PostsNavigator';
import FavoritesScreen from '../screens/FavoritesScreen';
import TrashIcon from '../icons/TrashIcon';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Alert } from 'react-native';
import favoriteUsersStore from '../store/FavoriteUsers';
import { COLORS } from '../styles/colors';


const Drawer = createDrawerNavigator<DrawerMenuStackParamList>()

const RootNavigator = () => {

  const handleClearFavoriteUsers = () => {
    if (favoriteUsersStore.favoriteUsers.length == 0) return Alert.alert('ReactNative - Task', 'Favori Listen Boş.')
    return (
      Alert.alert(
        'ReactNative - Task',
        'Bütün favori kullanıcılar silinecektir. Onaylıyor musunuz ?',
        [
          {
            text: 'Evet',
            style: 'destructive',
            onPress: () => favoriteUsersStore.clearAllFavoriteUsers()
          },
          {
            text: 'Hayır',
            style: 'cancel'
          }
        ]
      )
    )
  }


  return (
    <Drawer.Navigator
      initialRouteName="TodosScreen"
      screenOptions={{
        drawerType: 'front',
        drawerStyle: {
          width: 372,
          borderTopEndRadius: 50,
          borderBottomEndRadius: 50,
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
      <Drawer.Screen name="FavoritesScreen" component={FavoritesScreen} options={{
        headerShown: true,
        title: 'Favorilerim',
        headerTintColor: COLORS.text.secondary,
        headerRight: () => <TouchableOpacity style={{ marginHorizontal: 12, }} onPress={handleClearFavoriteUsers}>
          <TrashIcon />
        </TouchableOpacity>
      }} />
    </Drawer.Navigator>
  );
}

export default RootNavigator