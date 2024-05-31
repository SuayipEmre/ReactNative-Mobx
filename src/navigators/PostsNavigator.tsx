import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { PostsNavigatorStackParamList } from '../types/PostsNavigatorStackParamLists';
import PostsScreen from '../screens/PostsScreen';
import PostDetailScreen from '../screens/PostDetailScren';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LeftArrowIcon from '../icons/LeftArrow';
import MoreVerticalIcon from '../icons/MoreVerticalIcon'
const Stack = createNativeStackNavigator<PostsNavigatorStackParamList>()

export const PostsNavigator: React.FC = () => {
    const navigation = useNavigation<NavigationProp<PostsNavigatorStackParamList>>()

    return (
        <Stack.Navigator initialRouteName='PostsScreen'>
            <Stack.Screen
                name='PostsScreen'
                component={PostsScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name='PostDetailScreen'
                component={PostDetailScreen}
                options={{
                    headerLeft : () => <TouchableOpacity onPress={() => navigation.navigate('PostsScreen')}>
                        <LeftArrowIcon />
                    </TouchableOpacity>,

                    headerRight : () => <MoreVerticalIcon />,
                    title : 'Detail'
                }}
            />
        </Stack.Navigator>
    )
}
