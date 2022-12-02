import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  title: {
    fontWeight: '500',
    fontSize: 20,
    marginBottom: 20,
  },
  inputFields: {
    width: 250,
  },
  inputField: {
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 1,
    width: '100%',
    padding: 15,
  },
  btn: {
    paddingVertical: 7,
    paddingHorizontal: 25,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },
  errorMsg: {
    color: 'red',
    position: 'absolute',
    fontSize: 13,
    bottom: 0,
    left: 0,
  },
});
