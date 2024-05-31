import { NavigatorScreenParams } from "@react-navigation/native"
import { PostsNavigatorStackParamList } from "./PostsNavigatorStackParamLists"

export type DrawerMenuStackParamList = {
  TodosScreen: undefined,
  UsersScreen: undefined,
  PostsNavigator: NavigatorScreenParams<PostsNavigatorStackParamList>
}


