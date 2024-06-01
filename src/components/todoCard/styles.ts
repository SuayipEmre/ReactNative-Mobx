import { StyleSheet } from "react-native";
import { TEXT_SIZE } from "../../styles/ConstantValues";

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    title : {
        fontSize: TEXT_SIZE.normal,
         fontWeight: 400,
    },
})