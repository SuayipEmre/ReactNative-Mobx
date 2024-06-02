import { StyleSheet } from "react-native"
import { MARGIN, RADIUS, TEXT_SIZE } from "../../styles/ConstantValues"
import { COLORS } from "../../styles/colors"

export default StyleSheet.create({
  
    top_content: {
        flexDirection: 'row',
        width: 385,
        marginTop:MARGIN.xLarge,
        borderWidth: 1,
        borderColor: COLORS.border.secondary,
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 32,
        borderRadius: RADIUS.medium,
    },
    top_content_item: {
        width: 192.5,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 12,

    },
    top_content_item_text: {
        fontSize: TEXT_SIZE.small,
        fontWeight: '400',
        textAlign: 'center',
        color : COLORS.text.primary,
    },

})