import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { withRouter } from 'react-router-dom';


export default class SignUp extends Component {

    render() {
        console.log("Sign up component");
        return (
            <View style={styles.container}>
                <Text style={{ color: '#ffffff', fontSize: 20 }}>Welcome to There App</Text>
                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Mobile Number"
                    placeholderTextColor="#fffffff" />
                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Password"
                    placeholderTextColor="#fffffff" />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        );
    }

}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    inputBox: {
        width: 300,
        marginVertical: 13,
        backgroundColor: '#ffffff',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 17,
        color: "#1c313a"
    },
    button: {
        width: 300,
        backgroundColor: '#1c313a',
        borderRadius: 25,
        marginVertical: 13,
        paddingVertical: 10
    },
    buttonText: {
        fontSize: 17,
        fontWeight: '500',
        color: '#ffffff',
        paddingHorizontal: 110,
        alignItems: "center",
        justifyContent: "center",

    }
});

