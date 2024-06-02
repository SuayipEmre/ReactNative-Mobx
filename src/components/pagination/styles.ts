import { StyleSheet } from "react-native";
import { MARGIN, PADDING, TEXT_SIZE } from "../../styles/ConstantValues";
import { COLORS } from "../../styles/colors";
import { commonStyles } from "../../styles/CommonStyles";


export default StyleSheet.create({
    container: {
        ...commonStyles.centerSpaceBetweenRow,
        marginVertical: MARGIN.medium,
        paddingHorizontal: PADDING.xLarge,
        width:'100%',
    },
    button: {
        fontSize: TEXT_SIZE.medium,
    },
   
    pageInfo: {
        fontSize: TEXT_SIZE.medium,
        color : COLORS.text.primary
    },
    active_text:{
        color: COLORS.text.primary 
    },
    inactive_text:{
        color: COLORS.text.disabled
    },
    
});
