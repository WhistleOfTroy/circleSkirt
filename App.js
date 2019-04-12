import React from 'react';
import { StyleSheet, Text, TextInput, View, Picker, Item, TouchableHighlight } from 'react-native';

export default class App extends React.Component {
  state = {
    selectedSkirt: '',
    waist: '',
    skirtLength: '',
    skirtRadius: '',
    circleSkirtLength: ''
  }

  selectSkirt = (selectedSkirt) => {
    this.setState({ selectedSkirt: selectedSkirt })
    console.log(selectedSkirt)
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputView}>
          <View style={styles.halfView}>
            <Text style={styles.text}>Select skirt type:</Text>
          </View>
          <View style={styles.halfView}>
            <Picker style={styles.picker}
              selectedValue={this.state.selectedSkirt}
              onValueChange={this.selectSkirt}
            >
              <Item label='Full circle' value='1' />
              <Item label='3/4 circle' value='0.75' />
              <Item label='Half circle' value='0.5' />
              <Item label='1/4 circle' value='0.25' />
            </Picker>
          </View>
        </View>
        <View style={styles.paddingView}></View>
        <View style={styles.inputView}>
          <View style={styles.halfView}>
            <Text style={styles.text}>Waist measurement:</Text>
          </View>
          <View style={styles.halfView}>
            <View style={styles.textInputBorder}>
              <TextInput
                keyboardType='numeric'
                maxLength={3}
                onChangeText={(waist) => this.setState({ waist })}
              ></TextInput>
            </View>
            <Text style={styles.text}>cm</Text>
          </View>
        </View>
        <View style={styles.paddingView}></View>

        <View style={styles.inputView}>
          <View style={styles.halfView}>
            <Text style={styles.text}>Skirt length:</Text>
          </View>
          <View style={styles.halfView}>
            <View style={styles.textInputBorder}>
              <TextInput
                keyboardType='numeric'
                maxLength={3}
                onChangeText={(skirtLength) => this.setState({ skirtLength })}
              ></TextInput>
            </View>
            <Text style={styles.text}>cm</Text>
          </View>
        </View>
        <View style={styles.paddingView}></View>

        <View style={styles.inputView}>
        <TouchableHighlight activeOpacity={0.1}>
        <Text>Calculate</Text>
        </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    backgroundColor: 'yellow',
    justifyContent: "space-around",
    alignContent: "center",
    alignItems: "center",
    textAlign: 'center',
  },
  paddingView: {
    height: 15
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
