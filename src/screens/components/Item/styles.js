import { StyleSheet } from 'react-native';
import COLORS from '../../../constants/color';
export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    width: '90%',
    borderRadius: 8,
    alignSelf: 'center',
    marginVertical: 10,
  },
  wrappedItem: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
  },
  marginTop: {
    marginRight: 10,
  },
  textTitle: {
    color: COLORS.BLACK,
  },
});
