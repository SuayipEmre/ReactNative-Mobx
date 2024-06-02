import { StyleSheet } from "react-native";
import { MARGIN } from "../../styles/ConstantValues";
import { COLORS } from "../../styles/colors";
import { commonStyles } from "../../styles/CommonStyles";

export default StyleSheet.create({
    container : {
        backgroundColor: COLORS.background.white,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.border.secondary,
        height: 77,
        width:'100%',
        marginTop:MARGIN.small,
    },

    content_wrapper:{
       ...commonStyles.centerSpaceBetweenRow,
    }

})