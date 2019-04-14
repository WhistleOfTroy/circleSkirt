import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    },
    picker: {
      width: 140
    },
    text: {
      fontSize: 15,
      color: 'white'
    },
    buttonText: {
      fontSize: 20,
      color: 'white',
    },
    textInput: {
      fontSize: 15,
      fontWeight: 'bold',
      color: 'white',
      borderColor: 'white',
      width: 100,
      height: 15,
      borderWidth: 10,
      color:'white'
    },
    textInputBorder: {
      borderWidth: 1,
      borderColor: 'white',
      height: 25,
      width: 75,
      backgroundColor: 'black',
      textAlign: 'center',
    },
    inputView: {
      borderWidth: 1,
      paddingLeft: 5,
      paddingRight: 5,
      borderColor: 'white',
      position: 'relative',
      height: 50,
      aspectRatio: 7,
      flexDirection: 'row',
      backgroundColor: 'grey',
      justifyContent: "space-around",
      alignContent: "center",
      alignItems: "center",
      textAlign: 'center',
    },
    paddingView: {
      height: 15
    },
    separatingView: {
      width: '100%',
      height: 1,
      borderWidth: 0.5,
      borderColor: 'white',
    },
    halfView: {
      paddingLeft: 5,
      paddingRight: 25,
      position: 'relative',
      height: 50,
      aspectRatio: 3.5,
      flexDirection: 'row',
      justifyContent: "space-between",
      alignContent: "center",
      alignItems: "center",
      textAlign: 'center',
    }
  });