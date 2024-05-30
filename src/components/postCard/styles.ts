import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        width: 385, borderRadius: 8,
        padding: 12, gap: 16,
        borderWidth: 1,
        borderColor: '#0000001F',
        marginTop: 24,
    },
    title:{ fontSize: 16, fontWeight: 600, },
    body:{ fontSize: 14, fontWeight: 400, lineHeight: 20, letterSpacing: 0.2 },
    bottom_content:{
        alignSelf: 'flex-end',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        width: 131,
        height: 32,
    },
    seemore : { fontWeight: 500, lineHeight: 20, fontSize: 14, },
})