import React from 'react';
import {View, Text, TouchableOpacity,StyleSheet} from 'react-native';

export class TestComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: this.props.name,
            age: this.props.age
        }
      }
    render() {
        return (
            <View>
                <Text style={styles.textstyle}>Hello my name is {this.state.name}</Text>
                <Text>My age is {this.state.age} :)</Text>
                <TouchableOpacity onPress={this.ageUp}>
                    <Text>Click me to up age!</Text>
                </TouchableOpacity>
            </View>
        )
    }

    ageUp = () =>{
        let currentAge = this.state.age;
        currentAge++;

        this.setState({
            age: currentAge
        })
    }
}

const styles = StyleSheet.create({
    textstyle: {
        color: 'red',
        fontSize: 20,
        backgroundColor: 'cyan'
    }
})