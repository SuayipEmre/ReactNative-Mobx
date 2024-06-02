import { StyleSheet } from "react-native";
import { GAP, MARGIN, PADDING, RADIUS, TEXT_SIZE } from "../../styles/ConstantValues";
import { COLORS } from "../../styles/colors";
import { commonStyles } from "../../styles/CommonStyles";

export default StyleSheet.create({
    container: {
      ...commonStyles.rowSpaceBetween,
        borderRadius: RADIUS.medium,
        padding: PADDING.medium,
        borderWidth: 1,
        borderColor: COLORS.border.secondary,
        width: 386,
        height: 90,
        marginTop: MARGIN.medium,
    },
    left_side_content: {
       ...commonStyles.centerElementsInRow,
        gap: GAP.small,

    },
    name: {
        fontSize: TEXT_SIZE.medium,
        fontWeight: 400,
        lineHeight: 20,
        color : COLORS.text.primary

    },
    email: {
        fontSize: TEXT_SIZE.xSmall,
        fontWeight: 400,
        lineHeight: 16,
        color: COLORS.text.secondary
    },
    phone: {
        fontWeight: 300,
        fontSize: TEXT_SIZE.small,
        lineHeight: 16,
        marginTop: MARGIN.medium,
        color: COLORS.text.secondary
    },
})

