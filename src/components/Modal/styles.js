import { StyleSheet } from 'react-native';
import COLORS from '../../constants/color';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000AA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrappedModal: {
    backgroundColor: COLORS.WHITE,
    width: '90%',
    height: 400,
    borderRadius: 10,
  },
  closeButton: {
    alignSelf: 'flex-end',
    margin: 20,
  },
  titleField: {
    margin: 20,
  },
  desField: {
    marginHorizontal: 20,
  },
  input: {
    borderWidth: 1,
    marginTop: 10,
  },
  addButton: {
    marginTop: 60,
    marginHorizontal: 100,
    backgroundColor: COLORS.GREEN,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.WHITE,
  },
  textTitle: {
    color: COLORS.BLACK,
  },
});
