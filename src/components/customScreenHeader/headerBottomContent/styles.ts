import { StyleSheet } from "react-native"
import { GAP, MARGIN, RADIUS, TEXT_SIZE } from "../../../styles/ConstantValues"
import { COLORS } from "../../../styles/colors"
import { commonStyles } from "../../../styles/CommonStyles"

export default StyleSheet.create({
  
    top_content: {
        ...commonStyles.centerSpaceBetweenRow,
        width: 385,
        marginTop:MARGIN.xLarge,
        borderWidth: 1,
        borderColor: COLORS.border.secondary,
        height: 32,
        borderRadius: RADIUS.medium,
    },
    top_content_item: {
        width: 192.5,
        ...commonStyles.centerAll,
        gap: GAP.medium,

    },
    top_content_item_text: {
        fontSize: TEXT_SIZE.small,
        fontWeight: '400',
        textAlign: 'center',
        color : COLORS.text.primary,
    },

})