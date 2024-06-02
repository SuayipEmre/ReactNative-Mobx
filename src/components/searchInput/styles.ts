import { StyleSheet } from "react-native";
import { COLORS } from "../../styles/colors";
import { PADDING, RADIUS } from "../../styles/ConstantValues";

export default StyleSheet.create({
    container: {
        width: 310,
        height: 40,
        borderRadius: RADIUS.medium,
        flexDirection: 'row',
        alignItems: 'center',
        gap:10,
        paddingLeft:PADDING.small,
        backgroundColor: COLORS.background.secondary,
    },
    
})