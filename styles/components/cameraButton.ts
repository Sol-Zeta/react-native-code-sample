import { StyleSheet } from 'react-native';
import { colors } from '../mainStyles';

export const styles = StyleSheet.create({
  container: {
    height: 80,
    width: 80,
    borderRadius: 50,
    borderColor: colors.white,
    borderWidth: 4,
    alignSelf: 'center',
    marginBottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  center: {
    borderRadius: 50,
    height: 60,
    width: 60,
    backgroundColor: colors.white
  }
});
