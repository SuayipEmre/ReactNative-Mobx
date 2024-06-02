import { StyleSheet } from "react-native";
import { COLORS } from "../../styles/colors";
import { GAP, PADDING, RADIUS } from "../../styles/ConstantValues";
import { commonStyles } from "../../styles/CommonStyles";

export default StyleSheet.create({
    container: {
        ...commonStyles.centerElementsInRow,
        width: 310,
        height: 40,
        borderRadius: RADIUS.medium,
        gap:GAP.small,
        paddingLeft:PADDING.small,
        backgroundColor: COLORS.background.secondary,
    },
    
})