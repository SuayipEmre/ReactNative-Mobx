import { TouchableOpacity, View } from 'react-native'
import React from 'react'
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { DrawerMenuStackParamList } from '../../types/DrawerMenuStackParamList';
import MenuIcon from '../../icons/MenuIcon';
import SearchInput from '../searchInput';
import UserIcon from '../../icons/UserIcon';
import styles from './styles';
import CustomHeaderBottomContent from './headerBottomContent';
import Animated, { FadeInUp } from 'react-native-reanimated';
import { COLORS } from '../../styles/colors';

type TodosScreenNavigationProp = DrawerNavigationProp<DrawerMenuStackParamList>

type CustomScreenHeaderProps = {
    navigation: TodosScreenNavigationProp
    inputPlaceHolder: string,
    inputValue: string,
    setInputValue: (value: string) => void

}

const CustomScreenHeader: React.FC<CustomScreenHeaderProps> = ({ navigation, inputPlaceHolder, inputValue, setInputValue }) => {
    return (
        <Animated.View
            entering={FadeInUp.delay(100).duration(100).springify().damping(12)}>
            <View
                style={styles.container}>
                <View style={styles.content_wrapper}>
                    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                        <MenuIcon />
                    </TouchableOpacity>
                    <SearchInput searchValue={inputValue} setSearchValue={setInputValue} placeholder={inputPlaceHolder} />
                    <UserIcon color={COLORS.text.primary} />

                </View>

            </View>

            <CustomHeaderBottomContent />
        </Animated.View>
    )
}

export default CustomScreenHeader

