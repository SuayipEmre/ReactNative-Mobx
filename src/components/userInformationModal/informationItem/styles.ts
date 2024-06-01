import { StyleSheet } from "react-native";
import { PADDING, TEXT_SIZE } from "../../../styles/ConstantValues";

export default StyleSheet.create({
    content_item:{
        borderBottomWidth : 1,
        borderBottomColor : '#0000001F',
        paddingVertical : PADDING.medium,
        paddingHorizontal : PADDING.small,
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
        fontSize:TEXT_SIZE.normal,
        letterSpacing : 0.1,
        lineHeight : 20,
    },
    subtext:{
        fontWeight:'300',
        fontSize:TEXT_SIZE.normal,
        lineHeight : 20,
        letterSpacing : 0.1,
        color :'#5C6672',
    },
})