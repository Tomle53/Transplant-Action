import React from 'react'
import { NavigationContainer  } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, StyleSheet, View, Text } from 'react-native';
import Accueil from './Accueil';
import Aide from './Aide';
import ParametragePartie from './ParametragePartie';
import EcranDeJeu1 from './EcranDeJeu1';
import EcranDeJeu2 from './EcranDeJeu2';
import EcranDeFinDePartie from './EcranDeFinDePartie';
import Personnaliser from './Personnaliser';
/* eslint-disable prettier/prettier */
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer initialRouteName="Accueil">
      <Stack.Navigator>
        <Stack.Screen
          name="Accueil"
          component={Accueil}
          options={{ title: "Transplant'action" }}
        />
        <Stack.Screen name="Aide" component={Aide} />
        <Stack.Screen name="Personnaliser" component={Personnaliser} />
        <Stack.Screen name="ParametragePartie" component={ParametragePartie}
        options={{ title: "Paramètres" }}/>
        <Stack.Screen name="EcranDeJeu1" component={EcranDeJeu1}
        options={{ title: "Receveur" }}/>
        <Stack.Screen name='EcranDeJeu2' component={EcranDeJeu2}
        options={{ title: "Potentiels donneurs" }}/>
        <Stack.Screen name='EcranDeFinDePartie' component={EcranDeFinDePartie}
        options={{ title: "Fin de la partie" }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App