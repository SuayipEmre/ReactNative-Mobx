import { Dimensions, StyleSheet } from "react-native";

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
        shadowRadius: 4,
        elevation: 5,

        paddingVertical: 20,
        paddingHorizontal: 16,
    },
    content: {
        width: '90%',
        flex: 1,
        alignSelf: 'center',
        marginTop: 12,

    },
    user_name: {
        fontWeight: 600,
        fontSize: 24,
        letterSpacing: 0.4,
        color: '#26303E',
    },
  

});