import { StyleSheet } from "react-native"

export default StyleSheet.create({
  
    top_content: {
        flexDirection: 'row',
        width: 385,
        marginTop:20,
        borderWidth: 1,
        borderColor: '#0000001F',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 32,
        borderRadius: 8,
    },
    top_content_item: {
        width: 192.5,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 12,

    },
    top_content_item_text: {
        fontSize: 12,
        fontWeight: '400',
        textAlign: 'center',
    },

})