import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 8,
        padding: 12,
        borderWidth: 1,
        borderColor: '#0000001F',
        width: 386,
        height: 90,
        marginTop: 12,
    },
    left_side_content: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,

    },
    name: { fontSize: 16, fontWeight: 400, lineHeight: 20 },
    email: { fontSize: 10, fontWeight: 400, lineHeight: 16 },
    phone: { fontWeight: 300, fontSize: 12, lineHeight: 16, marginTop: 10, color:'#5C6672'},
})

