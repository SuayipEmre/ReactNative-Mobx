import { StyleSheet, Text, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import ChevronRightIcon from "../icons/ChevronRightIcon"


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
        padding: 18,
        borderBottomWidth : 1,
        borderBottomColor : '#0000001F'
    },
    left_side:{
        flexDirection:'row',
        alignItems:'center',
        gap:10,
    },
    active_bg: {
        backgroundColor: '#4F359B1A',
    },
    inactive_bg: {
        backgroundColor: '#FFFFFF'
    },

    active_text: {
        color: '#4F359B',

    },
    inactive_text: {
        color: '#4F359B',
    },
})