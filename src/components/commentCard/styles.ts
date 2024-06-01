import { StyleSheet } from "react-native";
import { PADDING, RADIUS, TEXT_SIZE } from "../../styles/ConstantValues";

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        borderWidth: 1,
        borderColor: '#0000001F',
        padding: PADDING.small,
        gap: 16,
        borderRadius: RADIUS.medium,
    },
    text_container: {
        flex: 1,
    },
    name: {
        fontWeight: '500',
        color: '#26303E',
    },
    body: {
        flexWrap: 'wrap',
        fontSize: TEXT_SIZE.normal,
        fontWeight: '400',
        color: '#5C6672'
    },
})