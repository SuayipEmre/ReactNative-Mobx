import { StyleSheet } from 'react-native';
import { MARGIN, PADDING, RADIUS, TEXT_SIZE } from '../../styles/ConstantValues';
import { COLORS } from '../../styles/colors';
import { commonStyles } from '../../styles/CommonStyles';

export default StyleSheet.create({
  modalContainer: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalView: {
    width: '100%',
    height: 344,
    backgroundColor: COLORS.background.white,
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
    flex: 1,
    width: '100%',
    alignSelf: 'center',
    marginTop: MARGIN.medium,
  },
  top_content: {
    ...commonStyles.centerSpaceBetweenRow,
  },
  user_name: {
    fontWeight: '600',
    fontSize: TEXT_SIZE.xLarge,
    letterSpacing: 0.4,
    color: COLORS.text.primary,
  },
});
