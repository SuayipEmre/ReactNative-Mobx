import { StyleSheet } from "react-native";
import { GAP, TEXT_SIZE } from "../../styles/ConstantValues";
import { COLORS } from "../../styles/colors";
import { commonStyles } from "../../styles/CommonStyles";

export default StyleSheet.create({
    container: {
       ...commonStyles.centerElementsInRow,
        gap: GAP.tiny,
    },
    title : {
        fontSize: TEXT_SIZE.normal,
         fontWeight: 400,
         color :COLORS.text.primary,

    },
})