/* eslint-disable prettier/prettier */
/**
 * @return Ce composant est l'interface à remplir par l'utilisateur sur l'écran de jeu 1. Il affiche une image du docteur Sahe, et demande le sexe, l'âge et la séquence protéinique du docteur. L'âge est géré par le composant ChampAge
 */
import { Image, Text, TextInput, Button, StyleSheet, Pressable, Dimensions } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useState,useEffect } from "react";
import React from 'react';
import { View } from "react-native";
import ChampAge from './ChampAge'
let imgSrc = require('./pictures/docteur.png');
const AgeDoc = 47;
const seqProteine = 'MYHKL'

const Receveur = () => {
  const [ageOk, setAgeOk] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [age, setAge] = useState(20);
  const [genre, setGenre] = useState();
  const navigation = useNavigation();
  let [proteineOk, setProteineOk] = useState(false)
  const changeAgeOk = (bool) => setAgeOk(bool);
  const changeAge = (value) => {
    if (isNaN(parseInt(value) && isNaN(value))) { setAge(20) }
    else {
      if (parseInt(value) < 20) { setAge(20) }
      else {
        if (parseInt(value) > 80) { setAge(80) }
        else { setAge(value) }}}}
  const changeDisable = () => {
    if (ageOk && proteineOk && genre) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }
  useEffect(() => {
    changeDisable();
  }, [ageOk, proteineOk, genre]);

  return <View style={styles.container}>
    <Text style={styles.instruction}> Quelle est le sexe du docteur Saha ?</Text>
    <Text>
      <Pressable style={[genre ? styles.button : styles.buttonpressed]} title="Homme" onPress={() => setGenre(false)}> <Text style={styles.buttonText}> Homme </Text> </Pressable>
      <Pressable style={[genre ? styles.buttonpressed : styles.button]} title="Femme" onPress={() => setGenre(true)}> <Text style={styles.buttonText}> Femme </Text> </Pressable>
    </Text>
    <Text style={styles.instruction}> Quelle est l'âge du docteur Saha ? </Text>
    <ChampAge style={styles.barreTexte} bonAge={AgeDoc} age={age} changeAge={changeAge} changeAgeOk={changeAgeOk} />
    <Text style={styles.instruction}> Quelle est la séquence protéique du docteur Saha ? </Text>
    <TextInput onChangeText={value => setProteineOk(value === seqProteine)} style={styles.input} />

    <Text>
      <Pressable
        style={buttonDisabled ? styles.button : styles.buttonpressed}

        onPress={() => {
          if (ageOk && proteineOk && genre) { navigation.navigate('EcranDeJeu2'); }
        }}
        disabled={!ageOk || !proteineOk || !genre}

      >
        <Text style={styles.buttonText}> Continuer </Text> </Pressable>   </Text>


  </View>
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
    height: 100,
    borderColor: 'grey',
    borderWidth: 1,
    width: Dimensions.get('window').width-1000,
    alignSelf: 'center',
    marginHorizontal: 10,
    marginBottom: 30,
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
    backgroundColor: '#accae0',
    paddingHorizontal: (Dimensions.get('window').width / 40)-1,
    paddingVertical: 14,
    margin: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  buttonpressed: {
    textAlign: 'center',
    backgroundColor: '#148ce8',
    paddingHorizontal: Dimensions.get('window').width / 40,
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
    width: 300,
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
    width: Dimensions.get('window').width/4-10,
    alignSelf: 'center',
    }, 
});


export default Receveur;
