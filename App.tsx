import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigators/RootNavigator";
import { useEffect } from "react";
import favoriteUsersStore from "./src/store/FavoriteUsers";
import { observer } from "mobx-react";

const App = observer(() => {
 
  const getFavoriteUsers = async() => await favoriteUsersStore.loadFavoriteUsers()
  
  useEffect(() => {
    getFavoriteUsers()
  },[])


  console.log(favoriteUsersStore.favoriteUsers.length);
  
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
})

export default App
