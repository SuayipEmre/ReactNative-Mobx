import { StyleSheet, Text, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import ChevronRightIcon from "../icons/ChevronRightIcon"
import { PADDING } from "../styles/ConstantValues"
import { COLORS } from "../styles/colors"


type CustomDrawerItemProps = {
    label: string,
    icon: React.JSX.Element,
    isFocused: boolean,
    onPress: () => void
}
const CustomDrawerItem: React.FC<CustomDrawerItemProps> = ({ icon, isFocused, label, onPress }) => {
    return (
        <View style={[
            styles.container,
            isFocused ? styles.active_bg : styles.inactive_bg
        ]}>
            <View style={styles.left_side}>
                {icon}

                <TouchableOpacity onPress={onPress}>
                    <Text style={[isFocused ? styles.active_text : styles.inactive_text]}>
                        {label}
                    </Text>
                </TouchableOpacity>
            </View>

            <ChevronRightIcon />
        </View>
    )
}


export default CustomDrawerItem
export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'red',
        justifyContent: 'space-between',
        padding: PADDING.large,
        borderBottomWidth : 1,
        borderBottomColor : '#0000001F'
    },
    left_side:{
        flexDirection:'row',
        alignItems:'center',
        gap:10,
    },
    active_bg: {
        backgroundColor:  COLORS.drawerMenu.active_bg,
    },
    inactive_bg: {
        backgroundColor:  COLORS.drawerMenu.inactive_bg
    },

    active_text: {
        color:  COLORS.drawerMenu.active_text,

    },
    inactive_text: {
        color: COLORS.drawerMenu.inactive_text,
    },
})