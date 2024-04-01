import {ScrollView, View, Text, StyleSheet, Button, TextInput, TouchableOpacity, Alert, Platform, StatusBar, SafeAreaView, Pressable, Switch} from 'react-native';
import {useState} from 'react';
import { Calendar} from 'react-native-calendars';

import DateTimePicker from '@react-native-community/datetimepicker';


import Slider from '@react-native-community/slider';




const Schedule_Settings = ({navigation}) => {
    
    const [lightSwitch, setLightSwitch] = useState(false);
    const [heatSwitch, setHeatSwitch] = useState(false);
    const [coffeeSwitch, setCoffeeSwitch] = useState(false);
    const [tvSwitch, setTvSwitch] = useState(false);
    const [fanSwitch, setFanSwitch] = useState(false);

    return(
        <SafeAreaView style={[styles.container]}>
            <View style={[styles.viewStyle]}>
                <View style={{
                            flexDirection:'row', 
                            justifyContent:'space-between', 
                            width: 350, 
                            height: 100, 
                            backgroundColor:'white', 
                            padding: 35, 
                            borderRadius: 20,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,
                            elevation: 5,                    
                        }}>
                    <Text style={styles.text}>Light</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={lightSwitch ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={setLightSwitch}
                        value={lightSwitch}
                    />
                </View>
            </View>

            <View style={[styles.viewStyle]}>
                <View style={{
                            flexDirection:'row', 
                            justifyContent:'space-between', 
                            width: 350, 
                            height: 100, 
                            backgroundColor:'white', 
                            padding: 35, 
                            borderRadius: 20,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,
                            elevation: 5,                    
                        }}>
    
                    <Text style={styles.text}>Heating</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={heatSwitch ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={setHeatSwitch}
                        value={heatSwitch}
                    />
                </View>
            </View>

            <View style={[styles.viewStyle]}>
                <View style={{
                        flexDirection:'row', 
                        justifyContent:'space-between', 
                        width: 350, 
                        height: 100, 
                        backgroundColor:'white', 
                        padding: 35, 
                        borderRadius: 20,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation: 5,                    
                    }}>
                    <Text style={styles.text}>Coffee</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={coffeeSwitch ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={setCoffeeSwitch}
                        value={coffeeSwitch}    
                    />
                </View>
            </View>

            <View style={[styles.viewStyle]}>
                <View style={{
                            flexDirection:'row', 
                            justifyContent:'space-between', 
                            width: 350, 
                            height: 100, 
                            backgroundColor:'white', 
                            padding: 35, 
                            borderRadius: 20,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,
                            elevation: 5,                    
                        }}>                    
                    <Text style={styles.text}>TV</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={tvSwitch ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={setTvSwitch}
                        value={tvSwitch}
                    />
                </View>
            </View>

            <View style={[styles.viewStyle]}>
                <View style={{
                            flexDirection:'row', 
                            justifyContent:'space-between', 
                            width: 350, 
                            height: 100, 
                            backgroundColor:'white', 
                            padding: 35, 
                            borderRadius: 20,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,
                            elevation: 5,                    
                        }}>                    
                    <Text style={styles.text}>Fan</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={fanSwitch ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={setFanSwitch}
                        value={fanSwitch}
                    />
                </View>
            </View>
            
        </SafeAreaView>
    );
}

export default Schedule_Settings;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dfe6e9',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,

    },
    text: {
        fontSize: 22,
        color: '#5DC02E',
        fontWeight: 'bold',
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
        // get to center of a view
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
    },
    cal:{
        width: 370,
        height: 375,
        borderRadius: 30,
    },
    pressable: {
        borderRadius: 5,
        width: 200,
        left: 50,
        right: 50,
        padding: 10,
    },
    message: {
        fontSize: 20,
        color: 'green',
        marginTop: 0,
        padding: 90,
    },
    viewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 12,
    },
});