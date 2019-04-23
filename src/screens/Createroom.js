import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, ButtonGroup } from 'react-native';
import { ScrollView, TextInput, Keyboard } from 'react-native'
import { Picker } from 'react-native'

export default class Createroom extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', RoomName: '', selectedIndex: 0 }
    this.updateIndex = this.updateIndex.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleRoomChange = this.handleRoomChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateIndex(selectedIndex) {
    
    this.setState({ selectedIndex })
  }
  handleNameChange(name) {
    this.setState({ name });
  }
  handleRoomChange(RoomName) {
    this.setState({ RoomName })
  }
  handleSubmit() {
    alert(this.state.RoomName)
    //saveSettings(this.state);
  }
  render() {
    const buttons = ['5', '10', '15']
    const { selectedIndex } = this.state
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Your name"
              maxLength={40}
              onBlur={Keyboard.dismiss}
              value={this.state.name}
              onChangeText={this.handleNameChange}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Your Room Name"
              maxLength={40}
              onBlur={Keyboard.dismiss}
              value={this.state.RoomName}
              onChangeText={this.handleRoomChange}
            />
            <View style={{flex: 1, flexDirection: 'row'}}>
            <Picker
              selectedValue={this.state.language}
              style={{ height: 50, width: 100, textAlign: 'center' }}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ language: itemValue })
              }>
              <Picker.Item label="5" value="5" />
              <Picker.Item label="10" value="10" />
              <Picker.Item label="15" value="15" />
              <Picker.Item label="20" value="20" />
            </Picker>

            <Picker
              selectedValue={this.state.language}
              style={{ height: 50, width: 200, textAlign: 'center' }}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ language: itemValue })
              }>
              <Picker.Item label="Private" value="PR" />
              <Picker.Item label="Public" value="PU" />
            </Picker>
            </View>

          </View>
          <Button
            onPress={this.handleSubmit}
            title="Learn More"
            color="#841584"
            style={styles.saveButtonText}
          />
          <TouchableOpacity
            style={styles.saveButton}
            onPress={this.handleSubmit}
          >
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        </ScrollView>
        <View>
          <Text style={styles.header}></Text>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 45,
    backgroundColor: '#F5FCFF',
  },
  header: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold'
  },
  inputContainer: {
    paddingTop: 15
  },
  textInput: {
    borderColor: '#CCCCCC',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 50,
    fontSize: 25,
    paddingLeft: 20,
    paddingRight: 20
  },
  saveButton: {
    borderWidth: 1,
    borderColor: '#007BFF',
    backgroundColor: '#007BFF',
    padding: 15,
    margin: 5
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center'
  }
});
