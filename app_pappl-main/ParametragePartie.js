/* eslint-disable prettier/prettier */
import React, { Component, useState, } from 'react';
import { View ,Text, TextInput, Button, Pressable, StyleSheet, Dimensions } from 'react-native';
/**
 * 
 * @param {} param0 navigation correspond à la pile d'écrans rencontrés, permettant de se déplacer d'un écran à un autre.
 * @returns 
 */
const ParametragePartie = ({ navigation }) => {
    const [number, onChangeNumber] = React.useState(30);
    const [difficulte,setDifficulte]= useState(true);
    return(
        <View style={styles.container}>
        <Text style={styles.title} > Paramétrage de la partie </Text>
        <Text style={styles.parametre}>Modifier la durée de la partie en minute ici:</Text>
        <Text>
        <TextInput 
        style={styles.barreTexte}
          onChangeText={onChangeNumber}
          value={number}
          />
        <Text> minutes </Text>
        </Text>
        
        <Text> </Text>
        <Text style={styles.parametre}> Difficulté :
        
      <Pressable style={[difficulte ? styles.button : styles.buttonpressed]} title="Facile" onPress={() => setDifficulte(false)}> <Text style={styles.buttonText}> Facile </Text> </Pressable>
      <Pressable style={[difficulte ? styles.buttonpressed : styles.button]} title="Normal" onPress={() => setDifficulte(true)}> <Text style={styles.buttonText}> Normal </Text> </Pressable>
     </Text>
     <Pressable
              style={styles.buttonpressed}
              title="Personnaliser les personnages"
              onPress={() =>
                navigation.navigate('Personnaliser')
              }
            >
              <Text style={styles.buttonText}> Personnaliser des personnages </Text>
          </Pressable>

          <Pressable
              style={styles.buttonpressed}
              title="Lancer la partie"
              onPress={() =>
                navigation.navigate('EcranDeJeu1', {timer: number} )
              }
            >
              <Text style={styles.buttonText}> Lancer la partie </Text>
          </Pressable>
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
  parametre: {
    textAlign:'center',
    fontSize: 20,
    //fontStyle: 'italic',
    fontWeight: 'bold',
    margin: 10,
  },
  button: {
    textAlign: 'center',
    backgroundColor: '#accae0',
    paddingHorizontal: Dimensions.get('window').width / 40-1,
    paddingVertical: 14,
    margin: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    opacity: 1,
    tintColor: 'black',
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000a0',
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
});

export default ParametragePartie;
