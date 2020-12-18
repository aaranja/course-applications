import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./screens/HomeScreen";
import StartGameScreen from "./screens/number-guess-screen/StartGameScreen";
import SteamLibraryScreen from "./screens/steam-library-screen/SteamLibraryScreen";
import GameDetailScreen from "./screens/steam-library-screen/GameDetailScreen";
import CourseDataScreen from "./screens/course-data-screen/CourseDataScreen";
import * as hs from "./styles/HeaderStyle";

export default function App() {
  const Stack = createStackNavigator();
     return (
      <NavigationContainer style={styles.container}>
        <Stack.Navigator>
          <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                title: 'Bienvenido',
                options: hs.styles
              }}
          />
          <Stack.Screen name="Datos del curso" component={CourseDataScreen} />
          <Stack.Screen name='Adivina el número' component ={StartGameScreen} />
          <Stack.Screen name='Librería de Steam' component={SteamLibraryScreen} />
          <Stack.Screen name='Juego Steam' component={GameDetailScreen}/>
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
