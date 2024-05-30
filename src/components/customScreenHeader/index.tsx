import { TouchableOpacity, View } from 'react-native'
import React from 'react'
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { DrawerMenuStackParamList } from '../../types/DrawerMenuStackParamList';
import MenuIcon from '../../icons/MenuIcon';
import SearchInput from '../searchInput';
import UserIcon from '../../icons/UserIcon';
import styles from './styles';
import TodosScreenTopContent from '../todosScreenTopContent';

type TodosScreenNavigationProp = DrawerNavigationProp<DrawerMenuStackParamList>

type CustomScreenHeaderProps = {
    navigation: TodosScreenNavigationProp
    inputPlaceHolder: string,
    inputValue: string,
    setInputValue: (value: string) => void

}

const CustomScreenHeader: React.FC<CustomScreenHeaderProps> = ({ navigation, inputPlaceHolder, inputValue, setInputValue }) => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.content_wrapper}>
                    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                        <MenuIcon />
                    </TouchableOpacity>
                    <SearchInput searchValue={inputValue} setSearchValue={setInputValue} placeholder={inputPlaceHolder} />
                    <UserIcon />

                </View>

            </View>

            <TodosScreenTopContent />
        </>
    )
}

export default CustomScreenHeader

