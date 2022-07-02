import { StyleSheet } from 'react-native';
import COLORS from '../../constants/color';
export const styles = StyleSheet.create({
  viewHeader: {
    height: 150,
    backgroundColor: COLORS.GREEN,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTitle: {
    color: COLORS.WHITE,
    fontSize: 22,
    fontWeight: 'bold',
  },
});
