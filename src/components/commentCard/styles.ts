import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        borderWidth: 1,
        borderColor: '#0000001F',
        padding: 10,
        gap: 16,
        borderRadius: 8,
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
        fontSize: 14,
        fontWeight: '400',
        color: '#5C6672'
    },
})