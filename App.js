import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./screens/HomeScreen";
import StartGameScreen from "./screens/number-guess-screen/StartGameScreen";

export default function App() {
  const Stack = createStackNavigator();
    const ProfileScreen = ({ navigation, route }) => {
        return <Text>Alumno: {route.params.name}</Text>;
    };

    return (
      <NavigationContainer style={styles.container}>
        <Stack.Navigator>
          <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ title: 'Bienvenido' }}
          />
          <Stack.Screen name="Datos del curso" component={ProfileScreen} />
          <Stack.Screen name='Adivina el número' component ={StartGameScreen} />
        </Stack.Navigator>
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
