import { StyleSheet } from "react-native";

export default StyleSheet.create({
    content_item:{
        borderBottomWidth : 1,
        borderBottomColor : '#0000001F',
        paddingVertical : 16,
        paddingHorizontal : 12,
        height : 81,
        gap:10,
    },
    content_item_header:{
        flexDirection:'row',
        alignItems:'center',
        gap:10,
    },
    title:{
        fontWeight:'500',
        fontSize:14,
        letterSpacing : 0.1,
        lineHeight : 20,
    },
    subtext:{
        fontWeight:'300',
        fontSize:14,
        lineHeight : 20,
        letterSpacing : 0.1,
        color :'#5C6672',
    },
})