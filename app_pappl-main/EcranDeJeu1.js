/* eslint-disable prettier/prettier */
import React, { Component, useState } from 'react';
import { Text, View, Button, Pressable, StyleSheet, scrollView, TouchableHighlight, Image, Dimensions } from 'react-native';
import Receveur from './Receveur';
import {  Timer } from 'react-native-stopwatch-timer';
let imgSrc = require('./pictures/docteur.png');
/**
 * 
 * @param {*} param0 
 * @returns Le premier écran de jeu, qui affiche receveur.
 */
const EcranDeJeu1 = ({ route, navigation }) => {
    const difficulte=route.params.difficulte;
    const informationsImages=route.params.informationsImages;
    const number = route.params.timer;
    const timer = number * 60000;
    const num = 3;
    const [isTimerStart, setIsTimerStart] = useState(true);
    const [timerDuration, setTimerDuration] = useState(timer);
    const [resetTimer, setResetTimer] = useState(false);
    global.time = timer;
    const handleAddTime = ()=>{setIsTimerStart(false),setTimerDuration(global.time+300000),setResetTimer(true)}
    return(
        <View style={styles.container}>
          <View style={styles.timeContainer}>
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
              setIsTimerStart(true);
              setResetTimer(false);
            }}
          /><Pressable style={!difficulte? styles.buttonAddTime : styles.buttonAddTimeCache} onPress={()=>{handleAddTime()}} disabled={difficulte}>
            <Text style={{color: 'white', fontSize:15}}>Ajouter 5 minutes</Text>
            </Pressable>
          </View>
        <Text style={styles.title} > Étape 1: </Text>
        <Text style={styles.instruction}>Trouver les informations sur le docteur Saha pour continuer </Text>
        <Image style={styles.image} source={imgSrc}/>
        <Receveur difficulte={difficulte} informationsImages={informationsImages}/>
        <Text> </Text>
        </View>      
    );
}

const styles = StyleSheet.create({
    timeContainer: {
      flexDirection:'row',
      justifyContent: 'center',
      marginLeft:250,
    },
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
      width: Dimensions.get('window').width/5-10,
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
    buttonAddTimeCache: {
      textAlign: 'center',
      backgroundColor: '#accae0',
      paddingHorizontal: 10,
      paddingVertical: 5,
      margin: 30,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      opacity:0,
    },
    buttonAddTime: {
      textAlign: 'center',
      backgroundColor: '#148ce8',
      paddingHorizontal: 10,
      paddingVertical: 5,
      margin: 30,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
    },
    image: {
        alignSelf: 'center',
       
        resizeMode: 'contain',
       
        justifyContent: 'center',
        width: Dimensions.get('window').width,
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

export default EcranDeJeu1