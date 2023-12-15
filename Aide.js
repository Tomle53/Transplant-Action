import React, { Component } from 'react';
import { Text, StyleSheet, View, Pressable, useWindowDimensions, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ResponsiveFontSize from 'react-native-responsive-fontsize';
/* eslint-disable prettier/prettier */
/**
 * 
 * @returns L'écran d'aide, contenant la documentation destinée à l'utilisateur.
 */


const Aide = () => {
    const navigation = useNavigation();
    const {width}= useWindowDimensions();
    const responsiveFontSize = (size) => {
      // Ajuster la taille de la police en fonction de la largeur de l'écran
      return Math.round((size * width) / 375);}
    return(
        <View style={styles.container}>
        <Text style={styles.title}>Bienvenue dans Transplant'Action !</Text>
        <Text style={styles.instruction}>Le docteur Carma Saha souffre d'une déficience reinale, et vous devez en urgence lui trouver un donneur !</Text>
        <Text style={styles.instruction}>Pour lancer une partie, revenez sur l'écran précédent, et appuyez sur le bouton "Jouer"</Text>
        <Text style={styles.instruction}>Vous pourrez alors configuerer la durée de votre partie en minutes, puis la commencer.</Text>
        <Text style={styles.instruction}>Vous devrez dans un premier temps trouver les informations suivantes sur le docteur Saha grâce à la brochure et aux indices cachés dans le laboratoire : son sexe, son âge et la séquence protéique permettant de déterminer sa compatibilité avec un éventuel donneur.</Text>
        <Text style={styles.instruction} >Attention : La séquence protéique doit être rentrée tout en majuscule et sans espace, sinon le résultat ne sera pas valide.</Text>
        <Text style={styles.instruction}>Une fois les informations correctement rentrées, vous pouvez accéder à l'écran suivant : sur celui-ci, vous verrez les différents donneurs potentiels parmis lesquels vous devrez faire votre choix.</Text>
        <Text style={styles.instruction}>Mais vous devez d'abord trouver leurs informations : pour chacun d'entre eux, indiquez son âge et son sexe.</Text>
        <Text style={styles.instruction}>Une fois ces informations remplies, leur séquence protéique et celle du docteur Saha seront affichées : Vous devez alors indiquer le nombre de peptides différents entre les deux chaînes, ce qui vous permettra de connaître le degré de compatibilité de la greffe.</Text>
        <Text style={styles.instruction}>Une fois tous les champs remplis, vous pourrez effectuer votre choix.</Text>
        <Pressable
        style={styles.button}
        title="Revenir"
        onPress={() =>
          navigation.navigate('Accueil')
        }
        ><Text style={styles.buttonText}> Accueil </Text> </Pressable>
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
      fontSize: Dimensions.get('window').width/15,
      fontWeight: 'bold',
      color: '#148ce8',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      width: '100%',
      marginBottom: Dimensions.get('window').height/20
    },
    instruction: {
      
      fontSize: Dimensions.get('window').height/40,
      textAlign: 'left',
    
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

export default Aide