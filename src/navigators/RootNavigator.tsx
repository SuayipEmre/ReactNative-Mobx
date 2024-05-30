import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerContentScrollView, DrawerItem, createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DrawerMenuStackParamList } from '../types/DrawerMenuStackParamList';
import CustomDrawerMenu from './CustomDrawerMenu';
import TodosScreen from '../screens/TodosScreen';
import MenuIcon from '../icons/MenuIcon';
import SearchInput from '../components/searchInput';
import UserIcon from '../icons/UserIcon';





function UserScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Kullanıcı Sayfası</Text>
    </View>
  );
}

function PostsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Gönderiler Sayfası</Text>
    </View>
  );
}


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
          borderRadius: 50,
        },
        headerShown: false
      }}

      drawerContent={(props) => {
        const { routeNames, index, } = props.state
        const focused = routeNames[index]
        return <CustomDrawerMenu focused={focused} props={props} />
      }}
    >
      <Drawer.Screen
        name="TodosScreen"
        component={TodosScreen}
      />
      <Drawer.Screen name="UserScreen" component={UserScreen} />
      <Drawer.Screen name="PostsScreen" component={PostsScreen} />
    </Drawer.Navigator>
  );
}

export default RootNavigator