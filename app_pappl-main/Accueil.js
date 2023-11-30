/* eslint-disable prettier/prettier */
/*
This component is the first screen of the app. It allows to go to the help screen or the settings for the game screen.
*/
import React, { Component } from 'react';
import { Button, StyleSheet, View, Text, Pressable, ImageBackground, Image, Dimensions } from 'react-native';


let imgSrc = require('./pictures/test_photo.png');
const Accueil = ({ navigation }) => {
  return (
  <View style={styles.container} >
    <Text style={styles.title} >Transplant'Action</Text>
    <Text style={styles.soustitre}> Un "Escape Game" éducatif </Text>
   <Text style={{textAlign: 'center'}}> 
    <Pressable style={styles.button}
        title="Jouer"
        onPress={() =>
          navigation.navigate('ParametragePartie')
        }>
          <Text style={styles.buttonText}> Jouer </Text>
    </Pressable>
      <Pressable
              title="Aide"
              style={styles.button}
              onPress={() =>
                navigation.navigate('Aide')
              }
            >
              <Text style={styles.buttonText}> Aide </Text>
      </Pressable>
    </Text>
      </View>
  );
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      textAlign: 'center',
      justifyContent: 'start',
      marginTop: 20,
    },
    buttonText: {
      fontSize: 20,
      color: 'white',
    },
    title: {
      alignSelf: 'center',
      fontSize: 40,
      fontWeight: 'bold',
      color: '#148ce8',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,

    },
    soustitre: {
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
    bottom: {
      flex: 0.3,
      backgroundColor: 'pink',
      borderWidth: 5,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
    },
    image: {
      align:'center',
    },
    text: {
      color: 'white',
      fontSize: 42,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: '#000000a0',
    },
  });
export default Accueil