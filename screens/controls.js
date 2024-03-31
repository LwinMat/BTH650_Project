import {ScrollView, View, Text, StyleSheet, Button, TextInput, TouchableOpacity, Alert} from 'react-native';
import {useState} from 'react';

const Controls = ({navigation}) => {
    <View>
        <Text>Controls</Text>
    </View>
}

export default Controls;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        color: 'black',
    },
    input: {
        width: 200,
        height: 40,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
    },
    button: {
        backgroundColor: 'black',
        padding: 10,
        margin: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
    },
});