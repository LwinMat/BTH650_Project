import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

import 'react-native-gesture-handler';

import Schedule_Settings from './screens/Schedule_Settings';
import Controls from './screens/controls';
import EnergyUsage from './screens/energyUsage';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Schedule_Settings" component={Schedule_Settings}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons 
                name="calendar-clear" 
                size={24} 
                color={focused ? '#258F13' : 'grey'} 
              />
            )
          
          }} />
        <Tab.Screen name="Controls" component={Controls}
          options={{
            tabBarIcon: ({ focused }) => (
              <MaterialIcons 
                name="settings-remote" 
                size={24} 
                color={focused ? '#258F13' : 'grey'} 
              />
            )
          
          
          }} />
        <Tab.Screen name="EnergyUsage" component={EnergyUsage} 
          options={{
            tabBarIcon: ({ focused }) => (
              <MaterialIcons 
                name="energy-savings-leaf" 
                size={24} 
                color={focused ? '#258F13' : 'grey'} 
              />
            )
          
          }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
