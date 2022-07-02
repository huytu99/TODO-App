import { StyleSheet } from 'react-native';
import COLORS from '../../constants/color';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    height: 50,
    marginTop: 10,
    marginHorizontal: 20,
    borderRadius: 25,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  marginIcon: {
    marginRight: 10,
  },
  widthTextInput: {
    width: '90%',
  },
});
