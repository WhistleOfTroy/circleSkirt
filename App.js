import React from 'react';
import { StyleSheet, Text, TextInput, View, Picker, Switch, Item, TouchableHighlight } from 'react-native';
import styles from './lightStyles';
import darkStyles from './darkStyles';

export default class App extends React.Component {

  state = {
    selectedSkirt: '0.5',
    skirtType: '',
    waist: '',
    skirtLength: '',
    skirtRadius: '',
    circleSkirtLength: '',
    darkMode: false
  }

  render() {
    this.calculate = () => {
      this.state.waist = parseFloat(this.state.waist);
      skirtLength = parseFloat(this.state.skirtLength);
      selectedSkirtCalc = parseFloat(this.state.selectedSkirt);
      if (this.state.selectedSkirt == '1') {
        skirtTypeCalc = 'Full circle skirt'
      } else if (this.state.selectedSkirt == '0.5') {
        skirtTypeCalc = 'Half circle skirt'
      }
      else if (this.state.selectedSkirt == '0.25') {
        skirtTypeCalc = 'Quarter circle skirt'
      }
      else {
        skirtTypeCalc = 'Three quarters circle skirt'
      };
      skirtRadiusCalc = Math.round(((this.state.waist / this.state.selectedSkirt) / (6.28) * 100)) / 100;
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
      <View style={this.state.darkMode ? darkStyles.container : styles.container}>
        <View style={styles.halfView}>
          <Text style={this.state.darkMode ? darkStyles.text : styles.text}>Dark mode</Text>
          <Switch
            onValueChange={value => this.setState({ darkMode: value })}
            value={this.state.darkMode}
          ></Switch>
        </View>
        <View style={this.state.darkMode ? darkStyles.inputView : styles.inputView}>
          <View style={styles.halfView}>
            <Text style={this.state.darkMode ? darkStyles.text : styles.text}>Select skirt type:</Text>
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
        <View style={this.state.darkMode ? darkStyles.inputView : styles.inputView}>
          <View style={styles.halfView}>
            <Text style={this.state.darkMode ? darkStyles.text : styles.text}>Waist measurement:</Text>
          </View>
          <View style={styles.halfView}>
            <View style={this.state.darkMode ? darkStyles.textInputBorder : styles.textInputBorder}>
              <TextInput
                style={this.state.darkMode ? darkStyles.text : styles.text}
                keyboardType='numeric'
                maxLength={4}
                onChangeText={(waist) => this.setState({ waist })}
              ></TextInput>
            </View>
            <Text style={this.state.darkMode ? darkStyles.text : styles.text}>cm</Text>
          </View>
        </View>
        <View style={styles.paddingView}></View>

        <View style={this.state.darkMode ? darkStyles.inputView : styles.inputView}>
          <View style={styles.halfView}>
            <Text style={this.state.darkMode ? darkStyles.text : styles.text}>Skirt length:</Text>
          </View>
          <View style={styles.halfView}>
            <View style={this.state.darkMode ? darkStyles.textInputBorder : styles.textInputBorder}>
              <TextInput
                style={this.state.darkMode ? darkStyles.text : styles.text}
                keyboardType='numeric'
                maxLength={4}
                onChangeText={(skirtLength) => this.setState({ skirtLength })}
              ></TextInput>
            </View>
            <Text style={this.state.darkMode ? darkStyles.text : styles.text}>cm</Text>
          </View>
        </View>
        <View style={styles.paddingView}></View>

        <TouchableHighlight activeOpacity={0.9} onPress={() => { this.calculate() }}>
          <View style={this.state.darkMode ? darkStyles.inputView : styles.inputView}>

            <Text style={this.state.darkMode ? darkStyles.buttonText : styles.buttonText}>Calculate</Text>
          </View>
        </TouchableHighlight>

        <View style={styles.paddingView}></View>
        <View style={styles.separatingView}></View>
        <View style={styles.paddingView}></View>

        <View style={this.state.darkMode ? darkStyles.inputView : styles.inputView}>
          <View style={styles.halfView}>
            <Text style={this.state.darkMode ? darkStyles.text : styles.text}> Skirt type:</Text>
          </View>
          <View style={styles.halfView}>
            <Text style={this.state.darkMode ? darkStyles.text : styles.text}> {this.state.skirtType}</Text>
          </View>
        </View>

        <View style={styles.paddingView}></View>

        <View style={this.state.darkMode ? darkStyles.inputView : styles.inputView}>
          <View style={styles.halfView}>
            <Text style={this.state.darkMode ? darkStyles.text : styles.text}> Skirt radius:</Text>
          </View>
          <View style={styles.halfView}>
            <Text style={this.state.darkMode ? darkStyles.text : styles.text}> {this.state.skirtRadius}</Text>
            <Text style={this.state.darkMode ? darkStyles.text : styles.text}> cm</Text>
          </View>
        </View>

        <View style={styles.paddingView}></View>

        <View style={this.state.darkMode ? darkStyles.inputView : styles.inputView}>
          <View style={styles.halfView}>
            <Text style={this.state.darkMode ? darkStyles.text : styles.text}> Circle skirt length:</Text>
          </View>
          <View style={styles.halfView}>
            <Text style={this.state.darkMode ? darkStyles.text : styles.text}> {this.state.circleSkirtLength}</Text>
            <Text style={this.state.darkMode ? darkStyles.text : styles.text}> cm</Text>
          </View>
        </View>
      </View>
    );
  }
}


