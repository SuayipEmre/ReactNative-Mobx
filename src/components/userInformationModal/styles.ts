import { Dimensions, StyleSheet } from "react-native";
import { MARGIN, PADDING, RADIUS, TEXT_SIZE } from "../../styles/ConstantValues";

const { width, height } = Dimensions.get('screen')
export default StyleSheet.create({

    modalView: {
        position: 'absolute',
        bottom: 0,
        height: 344,
        width: width,
        backgroundColor: '#FFFFFF',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: RADIUS.small,
        elevation: 5,
        paddingVertical: PADDING.large,
        paddingHorizontal: PADDING.medium,
    },
    content: {
        width: '90%',
        flex: 1,
        alignSelf: 'center',
        marginTop: MARGIN.medium,

    },
    user_name: {
        fontWeight: 600,
        fontSize: TEXT_SIZE.xLarge,
        letterSpacing: 0.4,
        color: '#26303E',
    },
  

});