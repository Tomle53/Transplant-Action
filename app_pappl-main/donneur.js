
/* eslint-disable prettier/prettier */
import { Image, Text, TextInput, Button, StyleSheet, Pressable, Dimensions, useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import React from 'react';
import { View } from 'react-native';
import ChampAge from './ChampAge';



const Donneur = ({nom, age , bonAge, imageSource, ageOk, changeAge, changeAgeOk, indicationGenre , genre, changeGenre, compatibilite, 

    correct, resolu, sequence, mismatchOk, changeMismatchOk}) => {
    const navigation = useNavigation();
    const { width } = useWindowDimensions();
    return <View style={[styles.container,Dimensions.get('window').width >600 ? {width:width / 4} :{width: Dimensions.get('window').width} ]}>   
            
            <Text style={styles.nom}>{nom}</Text>
            <Text>
            <Image style={[styles.image, width >600?{width: Dimensions.get('window').width/4.3}:{width: Dimensions.get('window').width/1.4}]} source = {imageSource} />
            </Text>
            <Text style={styles.instruction}> Sexe du donneur ? </Text>
            <Text>
                <Pressable style={[indicationGenre === 'F' ? [genre  ? styles.button : styles.buttonpressed] : [genre  ? styles.buttonpressed: styles.button]]} title="Homme" onPress={() => {changeGenre(indicationGenre==='M');changeMismatchOk(false)}}> <Text style={styles.buttonText}> Homme </Text> </Pressable>
                <Pressable style={[indicationGenre === 'F' ? [genre  ? styles.buttonpressed : styles.button] : [genre  ? styles.button: styles.buttonpressed]]} title="Femme" onPress={() => {changeGenre(indicationGenre==='F');changeMismatchOk(false)}}> <Text style={styles.buttonText}> Femme </Text> </Pressable>
            </Text>
            <Text style={styles.instruction}> Âge du donneur ? </Text>
            <ChampAge bonAge={bonAge} age = {age} changeAge={changeAge} changeAgeOk = {changeAgeOk}/>
          
             <View style={ageOk&&genre ? styles.texteVisible : styles.texteCache}>
              <Text style={styles.instruction}>Combien d'acides aminés sont différentes entre les deux séquences ?</Text>
              <Text style={{ textAlign: 'right' }}>{"Dr Saha : M Y H K L\n" + nom + " : " + sequence}</Text>
              <TextInput onChangeText={value => changeMismatchOk(parseInt(value)===((100-compatibilite)/20))} style = {styles.input}/>
              </View>
            <Text style={ageOk&&genre&&mismatchOk ? styles.texteVisible : styles.texteCache}>Compatibilité : {compatibilite}%</Text>
              <TextInput onChangeText={value => changeMismatchOk(parseInt(value)===((100-compatibilite)/20))} style = {[styles.input,width >600?{ width:width/4 -10  } : { width: Dimensions.get('window').width/1.5 }]}/>
              
            <Text style={mismatchOk ? styles.texteVisible : styles.texteCache}>Compatibilité : {compatibilite}%</Text>
            </View>
            <><Pressable style={resolu ? styles.buttonpressed: styles.buttonCache} title={correct ? "gagner": "perdre"}onPress={() =>
          navigation.navigate('EcranDeFinDePartie',{
            gagne:  correct
          
          })}disabled={!resolu}> <Text style={resolu ? styles.buttonText: styles.texteCache}> Choisir </Text> </Pressable></> 
            <Text>{resolu}</Text> 
    </View>
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      textAlign: 'center',
      justifyContent: 'flex-start',
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

    },
    button: {
      textAlign: 'center',
      backgroundColor: '#accae0',
      paddingHorizontal: (Dimensions.get('window').width / 60)-1,
      paddingVertical: 9,
      margin: 25,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
    },
    buttonpressed: {
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
    image: {
      alignSelf: 'center',
      flex:1,
      resizeMode: 'contain',
      justifyContent: 'center',
      
      height: 500,
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
      alignSelf: 'center',
    }, 
    texteCache: {
      opacity: 0,
    }, 
    texteVisible:{

    },
    buttonCache: {
      textAlign: 'center',
      backgroundColor: 'white',
      paddingHorizontal: (Dimensions.get('window').width / 60)-1,
      paddingVertical: 9,
      margin: 25,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
    },
    nom: {
        fontSize: 25,
        fontWeight: 'bold',
        

    }
  });

export default Donneur; 
