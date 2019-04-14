import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    },
    picker: {
      width: 140
    },
    text: {
      fontSize: 15,
    },
    buttonText: {
      fontSize: 20
    },
    textInput: {
      fontSize: 15,
      fontWeight: 'bold',
      color: 'black',
      borderColor: 'black',
      width: 100,
      height: 15,
      borderWidth: 10
    },
    textInputBorder: {
      borderWidth: 1,
      borderColor: 'black',
      height: 25,
      width: 75,
      backgroundColor: 'white',
      textAlign: 'center',
    },
    inputView: {
      borderWidth: 1,
      paddingLeft: 5,
      paddingRight: 5,
      borderColor: 'black',
      position: 'relative',
      height: 50,
      aspectRatio: 7,
      flexDirection: 'row',
      backgroundColor: 'aliceblue',
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
      borderColor: 'black',
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