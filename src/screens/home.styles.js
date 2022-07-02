import COLORS from '../constants/color';
import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.LIGHT_GREY,
    zIndex: 10,
  },

  wrappedItem: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },
  addButton: {
    zIndex: 100,
    marginTop: 600,
    position: 'absolute',
    marginLeft: 340,
  },
});
