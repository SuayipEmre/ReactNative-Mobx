import { StyleSheet } from "react-native";
import { GAP, PADDING, RADIUS, TEXT_SIZE } from "../../styles/ConstantValues";
import { COLORS } from "../../styles/colors";

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        borderWidth: 1,
        borderColor: COLORS.border.secondary,
        padding: PADDING.small,
        gap: GAP.large,
        borderRadius: RADIUS.medium,
    },
    text_container: {
        flex: 1,
    },
    name: {
        fontWeight: '500',
        color: COLORS.text.primary,
    },
    body: {
        flexWrap: 'wrap',
        fontSize: TEXT_SIZE.normal,
        fontWeight: '400',
        color: COLORS.text.secondary
    },
})