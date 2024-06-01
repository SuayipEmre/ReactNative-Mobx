import { StyleSheet } from "react-native";
import { MARGIN } from "../../styles/ConstantValues";

export default StyleSheet.create({
    container : {
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 1,
        borderBottomColor: '#0000001F',
        height: 77,
        width:'100%',
        marginTop:MARGIN.small,
    },

    content_wrapper:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }

})