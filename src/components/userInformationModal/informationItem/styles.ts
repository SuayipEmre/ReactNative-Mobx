import { StyleSheet } from "react-native";
import { GAP, PADDING, TEXT_SIZE } from "../../../styles/ConstantValues";
import { COLORS } from "../../../styles/colors";
import { commonStyles } from "../../../styles/CommonStyles";

export default StyleSheet.create({
    content_item:{
        borderBottomWidth : 1,
        borderBottomColor : COLORS.border.secondary,
        paddingVertical : PADDING.medium,
        paddingHorizontal : PADDING.small,
        height : 81,
        gap:GAP.small,
    },
    content_item_header:{
       ...commonStyles.centerElementsInRow,
        gap:GAP.small,
    },
    title:{
        fontWeight:'500',
        fontSize:TEXT_SIZE.normal,
        letterSpacing : 0.1,
        lineHeight : 20,
    },
    subtext:{
        fontWeight:'300',
        fontSize:TEXT_SIZE.normal,
        lineHeight : 20,
        letterSpacing : 0.1,
        color :COLORS.text.secondary,
    },
})