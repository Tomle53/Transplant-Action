
/* eslint-disable prettier/prettier */
import { Image, Text, TextInput, Button, StyleSheet, Pressable, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import React from 'react';
import { View } from 'react-native';
import ChampAge from './ChampAge';



const Donneur = ({nom, age , bonAge, imageSource, ageOk, changeAge, changeAgeOk, indicationGenre , genre, changeGenre, compatibilite, 

    correct, resolu, sequence, mismatchOk, changeMismatchOk}) => {
    const navigation = useNavigation();
    return <View style={styles.container}>           
            <Text numberOfLines={1} style={styles.nom}>{nom}</Text>
            <Image source = {imageSource} style={styles.image}/>
            <Text style={styles.instruction}> Sexe du donneur ? </Text>
            <Text>
                <Pressable style={[indicationGenre === 'F' ? [genre  ? styles.button : styles.buttonpressed] : [genre  ? styles.buttonpressed: styles.button]]} title="Homme" onPress={() => changeGenre(indicationGenre==='M')}> <Text style={styles.buttonText}> Homme </Text> </Pressable>
                <Pressable style={[indicationGenre === 'F' ? [genre  ? styles.buttonpressed : styles.button] : [genre  ? styles.button: styles.buttonpressed]]} title="Femme" onPress={() => changeGenre(indicationGenre==='F')}> <Text style={styles.buttonText}> Femme </Text> </Pressable>
            </Text>
            <Text style={styles.instruction}> Âge du donneur ? </Text>
            <ChampAge bonAge={bonAge} age = {age} changeAge={changeAge} changeAgeOk = {changeAgeOk}/>
            <>{ageOk&&genre&&<Text>Combien de protéines sont différentes entre les deux séquences ?</Text>}</>
            <>{ageOk&&genre&&<Text>{"Dr Saha : M Y H K L\n" + nom + " : " + sequence}</Text>}</>
            <>{ageOk&&genre&&<TextInput onChangeText={value => changeMismatchOk(parseInt(value)===((100-compatibilite)/20))} style = {styles.input}/>}</> 
            <>{mismatchOk&&<Text>Compatibilité : {compatibilite}%</Text>}</>
            <>{resolu&&<Pressable style={styles.button} title={correct ? "gagner": "perdre"}onPress={() =>
          navigation.navigate('EcranDeFinDePartie',{
            gagne:  correct
          })}> <Text style={styles.buttonText}> Choisir </Text> </Pressable>}</>
            <Text>{resolu}</Text>
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
      width: Dimensions.get('window').width / 4,
      height: Dimensions.get('window').height - 30,
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
      paddingHorizontal: Dimensions.get('window').width / 60,
      paddingVertical: 10,
      margin: 25,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
    },
    buttonpressed: {
      textAlign: 'center',
      backgroundColor: '#accae0',
      paddingHorizontal: Dimensions.get('window').width / 60,
      paddingVertical: 10,
      margin: 25,
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
      height: 150,
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
    nom: {
        fontSize: 25,
        fontWeight: 'bold',

    }
  });

export default Donneur; 
