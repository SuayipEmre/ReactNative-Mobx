import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text } from 'react-native';
import { DrawerMenuStackParamList } from '../types/DrawerMenuStackParamList';
import CustomDrawerMenu from './CustomDrawerMenu';
import TodosScreen from '../screens/TodosScreen';






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