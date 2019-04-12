import React from 'react';
import { StyleSheet, Text, TextInput, View, Picker, Item, TouchableHighlight } from 'react-native';

export default class App extends React.Component {

  state = {
    selectedSkirt: '0.5',
    skirtType : '',
    waist: '',
    skirtLength: '',
    skirtRadius: '',
    circleSkirtLength: '',
  }

  render() {
    this.calculate = () => {
      this.state.waist = parseFloat(this.state.waist);
      skirtLength = parseFloat(this.state.skirtLength);
      selectedSkirtCalc = parseFloat(this.state.selectedSkirt);
      if (this.state.selectedSkirt=='1'){
        skirtTypeCalc = 'Full circle skirt'
      } else if (this.state.selectedSkirt == '0.5') {
        skirtTypeCalc = 'Half circle skirt'
      }
      else if (this.state.selectedSkirt=='0.25') {
        skirtTypeCalc = 'Quarter circle skirt'
      }
      else {
        skirtTypeCalc = 'Three quarters circle skirt'
      };
      skirtRadiusCalc = Math.round(((this.state.waist / this.state.selectedSkirt) / (6.28) * 100)) / 100 ;
      circleSkirtLengthCalc = Math.round((skirtRadiusCalc + skirtLength) * 100) / 100;
      if (!isNaN(this.state.waist) && !isNaN(this.state.skirtLength) && !isNaN(this.state.selectedSkirt)) {
        this.setState({
          skirtRadius: skirtRadiusCalc,
          circleSkirtLength: circleSkirtLengthCalc,
          selectedSkirt: selectedSkirtCalc,
          skirtType: skirtTypeCalc
        })
      }
    }
      return (
        <View style={styles.container}>
          <View style={styles.inputView}>
            <View style={styles.halfView}>
              <Text style={styles.text}>Select skirt type:</Text>
            </View>
            <View style={styles.halfView}>
              <Picker style={styles.picker}
                selectedValue={this.state.selectedSkirt}
                onValueChange={(value) =>
                  this.setState({ selectedSkirt: value })}
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
                  maxLength={4}
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
                  maxLength={4}
                  onChangeText={(skirtLength) => this.setState({ skirtLength })}
                ></TextInput>
              </View>
              <Text style={styles.text}>cm</Text>
            </View>
          </View>
          <View style={styles.paddingView}></View>

          <TouchableHighlight activeOpacity={0.9} onPress={() => { this.calculate() }}>
            <View style={styles.inputView}>

              <Text style={styles.buttonText}>Calculate</Text>
            </View>
          </TouchableHighlight>

          <View style={styles.paddingView}></View>
          <View style={styles.separatingView}></View>
          <View style={styles.paddingView}></View>

          <View style={styles.inputView}>
            <View style={styles.halfView}>
              <Text style={styles.text}> Skirt type:</Text>
            </View>
            <View style={styles.halfView}>
              <Text style={styles.text}> {this.state.skirtType}</Text>
            </View>
          </View>

          <View style={styles.paddingView}></View>

          <View style={styles.inputView}>
            <View style={styles.halfView}>
              <Text style={styles.text}> Skirt radius:</Text>
            </View>
            <View style={styles.halfView}>
              <Text style={styles.text}> {this.state.skirtRadius}</Text>
              <Text style={styles.text}> cm</Text>
            </View>
          </View>

          <View style={styles.paddingView}></View>

          <View style={styles.inputView}>
            <View style={styles.halfView}>
              <Text style={styles.text}> Circle skirt length:</Text>
            </View>
            <View style={styles.halfView}>
              <Text style={styles.text}> {this.state.circleSkirtLength}</Text>
              <Text style={styles.text}> cm</Text>
            </View>
          </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
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
