/* eslint-disable prettier/prettier */
/**
 * @returns L'écran de fin de partie, affichant des messages et images différents selon comment l'utilisateur y est arrivé.
 */
import React, { Component, useState } from 'react';
import { Text, View, Button, Image, StyleSheet, Pressable } from 'react-native';
import {  Timer } from 'react-native-stopwatch-timer';

/**
 * 
 * @param {*} param0 La route permettant de naviguer entre les écran est passée en propriété, ainsi que la navigation qui permet de tenir compte de si on gagne ou si on perd 
 * @returns Un composant qui est l'écran de fin de partie, affichant un texte et un gif approprié au contexte - Gagner ou perdre - et un bouton permettant de revenir à l'écran d'accueil.
 */

const EcranDeFinDePartie = ({ route, navigation }) => {
  const gagne = route.params.gagne;
  const timer = global.time;
  const [isTimerStart, setIsTimerStart] = useState(false);
  const [timerDuration, setTimerDuration] = useState(timer);
  const [resetTimer, setResetTimer] = useState(false);
  return(
        <View style={styles.container}>
          <Timer 
            totalDuration={timerDuration}
            secs
            //Time Duration
            start={isTimerStart}
            //To start
            reset={resetTimer}
            //To reset
            options={options}
            //options for the styling
            handleFinish={() => {
              navigation.navigate('EcranDeFinDePartie', {gagne: false});
            }}
            //can call a function On finish of the time
            getTime={(time) => {
              time = time.split(':');
              time = (((Number(time[0])*3600) + (Number(time[1])*60) + Number(time[2])) * 1000);
              global.time = time;
              console.log(time);
            }}
          />
        <Text style={styles.title}>{gagne ? 'Félicitation' : "Dommage"}</Text>
        <Text style={styles.instruction}> {gagne ? 'Vous avez réussi à sauver le docteur Saha' : "Vous n'avez pas réussi à sauver le docteur Saha"}</Text>
        <Image style={styles.image} source={gagne ? require('./pictures/congrats.gif') : require('./pictures/kermit-worried.gif')} />
        <Pressable
        style={styles.button}
        title="Revenir"
        onPress={() =>
          navigation.navigate('Accueil')
        }
        ><Text style={styles.buttonText}> Acceuil </Text> </Pressable>
        </View>
        )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'start',
    marginTop: 20,
    backgroundColor: 'white',
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
  },
  barreTexte: {
    textAlign: 'center',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 300,
    alignSelf: 'center',
    marginHorizontal: 10,
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#148ce8',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  instruction: {
    textAlign:'center',
    fontSize: 20,
    //fontStyle: 'italic',
    fontWeight: 'bold',
    margin: 10,
  },
  button: {
    textAlign: 'center',
    backgroundColor: '#148ce8',
    paddingHorizontal: 30,
    paddingVertical: 15,
    margin: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  buttonpressed: {
    textAlign: 'center',
    backgroundColor: '#accae0',
    paddingHorizontal: 30,
    paddingVertical: 15,
    margin: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  image: {
    alignSelf: 'center',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: 900,
    height: 300,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    margin: 5,
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000a0',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }, 
});

const options = {
  container: {
    backgroundColor: '#FF0000',
    padding: 5,
    borderRadius: 5,
    width: 200,
    alignItems: 'center',
    alignSelf: 'center',
  },
  text: {
    fontSize: 25,
    color: '#FFF',
    marginLeft: 7,
  },
};

export default EcranDeFinDePartie