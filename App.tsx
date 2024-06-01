import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigators/RootNavigator";
import { useEffect } from "react";
import favoriteUsersStore from "./src/store/FavoriteUsers";
import AsyncStorage from "@react-native-async-storage/async-storage";

const App = () => {
  const getFavoriteUsers = async() => await favoriteUsersStore.loadFavoriteUsers()
  
  useEffect(() => {
    getFavoriteUsers()
  },[])
  
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

export default App
