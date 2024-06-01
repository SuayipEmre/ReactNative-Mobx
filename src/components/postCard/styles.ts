import { StyleSheet } from "react-native";
import { MARGIN, PADDING, RADIUS, TEXT_SIZE } from "../../styles/ConstantValues";

export default StyleSheet.create({
    container: {
        width: 385,
        borderRadius: RADIUS.medium,
        padding: PADDING.small,
        gap: 16,
        borderWidth: 1,
        borderColor: '#0000001F',
        marginTop: MARGIN.xLarge,
    },
    title: { fontSize: TEXT_SIZE.medium, fontWeight: 600, color: '#26303E' },
    body: { fontSize: TEXT_SIZE.normal, fontWeight: 400, lineHeight: 20, letterSpacing: 0.2, color: '#000000B2' },
    bottom_content: {
        alignSelf: 'flex-end',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        width: 131,
        height: 32,
    },
    seemore: { fontWeight: 500, lineHeight: 20, fontSize: TEXT_SIZE.normal, },
})