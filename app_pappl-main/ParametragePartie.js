/* eslint-disable prettier/prettier */
import React, { Component, useState, } from 'react';
import { View ,Text, TextInput, Button, Pressable, StyleSheet, Dimensions,  useWindowDimensions } from 'react-native';
import ResponsiveFontSize from 'react-native-responsive-fontsize';
/**
 * 
 * @param {} param0 navigation correspond à la pile d'écrans rencontrés, permettant de se déplacer d'un écran à un autre.
 * @returns 
 * 
 */
const ParametragePartie = ({ navigation }) => {
  const { width } = useWindowDimensions();

  

    const [number, onChangeNumber] = React.useState(30);
    const [difficulte,setDifficulte]= useState(true);
    return(
        <View style={styles.container}>
        <Text style={[styles.title, Dimensions.get('window').width  > 600 ? { fontSize:Dimensions.get('window').width /15  } : { fontSize: Dimensions.get('window').width /10 }]} > Paramétrage de la partie </Text>
        <Text style={[styles.parametre, Dimensions.get('window').width > 600 ? { fontSize:Dimensions.get('window').width /35  } : { fontSize: Dimensions.get('window').width /20 }]}>Modifier la durée de la partie en minute ici:</Text>
        <Text>
        <TextInput 
        style={styles.barreTexte }
          onChangeText={onChangeNumber}
          value={number}
          />
        <Text style={[styles.instruction, Dimensions.get('window').width > 600 ? { fontSize:Dimensions.get('window').width /60  } : { fontSize: Dimensions.get('window').width /20 }]}>
           minutes </Text>
        </Text>
        
        <Text> </Text>
        <Text style={[styles.parametre, Dimensions.get('window').width > 600 ? { fontSize:Dimensions.get('window').width /35  } : { fontSize: Dimensions.get('window').width /20, textAlign: 'left' }]}>
           Difficulté :
        
      <Pressable style={[difficulte ? styles.button : styles.buttonpressed,
      Dimensions.get('window').width >600 ? {width:width/4.5}:{width:width/5, margin: 10}]}
       title="Facile" 
       onPress={() => setDifficulte(false)}>

      <Text style={[styles.buttonText, Dimensions.get('window').width > 600 ? { fontSize:Dimensions.get('window').width /60  } : { fontSize: Dimensions.get('window').width /30 }]}> Facile </Text> 
      </Pressable>
      <Pressable style={[difficulte ? styles.buttonpressed : styles.button,
      Dimensions.get('window').width >600 ? {width:width/4.5}:{width:width/5, margin:10}]}
       title="Normal" 
       onPress={() => setDifficulte(true)}>
        <Text style={[styles.buttonText,Dimensions.get('window').width > 600 ? { fontSize:Dimensions.get('window').width /60  } : { fontSize: Dimensions.get('window').width /30 }]}> 
       Normal </Text> </Pressable>
     </Text>
     <Pressable
              style={styles.buttonpressed2}
              title="Personnaliser les personnages"
              onPress={() =>
                navigation.navigate('Personnaliser')
              }
            >
              <Text style={[styles.buttonText,Dimensions.get('window').width>600 ? {fontSize:width/35} : {fontSize:width/20}]}>
                 Personnaliser des personnages </Text>
          </Pressable>

          <Pressable
              style={[ !isNaN(number) && number!="" ? styles.buttonpressed2 : styles.button2]}
              title="Lancer la partie"
              onPress={() => {if(!isNaN(number)){
                navigation.navigate('EcranDeJeu1', {timer: number} )
              }}}
            >
              <Text style={[styles.buttonText,Dimensions.get('window').width>600 ? {fontSize:width/35} : {fontSize:width/20}]}>
                 Lancer la partie </Text>
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
    padding: 20,
  },
  buttonText: {
    fontSize: Dimensions.get('window').width /40,
    color: 'white',
    textAlign: 'center',
  },
  barreTexte: {
    textAlign: 'center',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: Dimensions.get('window').width / 2,
    alignSelf: 'left',
    marginHorizontal: 10,
  },
  title: {
    
    fontWeight: 'bold',
    color: '#148ce8',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width:'100%',

  },
  parametre: {
    textAlign:'center',
    paddingTop: 10,
    //fontStyle: 'italic',
    fontWeight: 'bold',
    margin: 10,
  },
  parametre2: {
    textAlign:'center',
    fontSize: 20,
    //fontStyle: 'italic',
    fontWeight: 'bold',
    margin: 10,
  },
  instruction: {
      
  
      textAlign: 'left',

  },
  button: {
    textAlign: 'center',
    backgroundColor: '#accae0',
    paddingBottom: 10,
    paddingVertical: 14,
    margin: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  button2: {
    textAlign: 'center',
    backgroundColor: '#accae0',
    paddingVertical: 14,
    paddingBottom: 10,
    margin: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  buttonpressed: {
    textAlign: 'center',
    backgroundColor: '#148ce8',
    paddingBottom: 10,
    paddingVertical: 15,
    margin: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  buttonpressed2: {
    textAlign: 'center',
    backgroundColor: '#148ce8',
    paddingVertical: 15,
    margin: 30,
    marginBottom: 10,
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
 
});

export default ParametragePartie;
