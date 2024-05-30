import {TouchableOpacity, View } from 'react-native'
import React from 'react'
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { DrawerMenuStackParamList } from '../../types/DrawerMenuStackParamList';
import MenuIcon from '../../icons/MenuIcon';
import SearchInput from '../searchInput';
import UserIcon from '../../icons/UserIcon';
import styles from './styles';

type TodosScreenNavigationProp = DrawerNavigationProp<DrawerMenuStackParamList>

type CustomScreenHeaderProps = {
  navigation: TodosScreenNavigationProp;

}

const CustomScreenHeader : React.FC<CustomScreenHeaderProps> = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.content_wrapper}>
                <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                    <MenuIcon />
                </TouchableOpacity>

                <SearchInput />
                <UserIcon />
            
            </View>

        </View>
    )
}

export default CustomScreenHeader

