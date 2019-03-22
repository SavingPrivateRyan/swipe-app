import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {TestComponent} from './testComponent';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TestComponent name={'Ryan'} age = {20}/>
        <TestComponent name={'Nik'} age = {20}/>
        <TestComponent name={'Alex'} age = {19}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

})