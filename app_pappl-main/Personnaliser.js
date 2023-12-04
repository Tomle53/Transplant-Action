import { Image, Text, TextInput, Button, StyleSheet, Pressable, Dimensions } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useState,useEffect } from "react";
import React from 'react';
import { View } from "react-native";
import ImageUploader from './ImageUploader';




const Personnaliser = ()=>{
  const nombreDeDonneurs = 4;
  const [informationsImages, setInformationsImages] = useState(Array(nombreDeDonneurs).fill({ nom: '', image: null }));
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleImageChange = ({ index, nom, image }) => {
    setInformationsImages((prevImages) => {
      const updatedImages = [...prevImages];
      updatedImages[index] = {nom, image };
      return updatedImages;
    });
  };

  

  return (
    <View>
      <Text style={styles.title}> Personnalisation des donneurs</Text>
      {Array.from({ length: nombreDeDonneurs }, (_, index) => (
        <ImageUploader key={index.toString()} index={index} selectedIndex={selectedIndex} onImageChange={handleImageChange} />
      ))}
      {informationsImages.map((info, index) => (
        <View key={index}>

          <Text>{`Donneur ${index + 1} - Nom: ${info.nom}, Image: ${info.image}`}</Text>
          <Text>{`Index sélectionné : ${selectedIndex}`}</Text>
        </View>
      ))}
      
    </View>
  );
};


 
      
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
              height: 30,
              borderColor: 'gray',
              borderWidth: 1,
              width: Dimensions.get('window').width /8,
              marginRight: 30,
              alignSelf: 'center',
              marginHorizontal: 5,
            },
            title: {
              fontSize: 50,
              textAlign: 'center',
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
              color: 'dark',
              fontSize: 20,
              fontWeight: 'bold',
              textAlign: 'center',
              marginTop: 7,

              
            },
              
            soustitre: {

                color: 'dark',
                fontSize: 15,
                marginTop: 1,
                fontWeight: 'normal',
                
                


               
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

export default Personnaliser;