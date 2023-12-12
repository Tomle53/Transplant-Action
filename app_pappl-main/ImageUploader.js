import { Image, Text, TextInput, Button, StyleSheet, Pressable, Dimensions,  } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useState,useEffect } from "react";
import React from 'react';
import { View } from "react-native";



const ImageUploader = ({ index, selectedIndex, onImageChange, informationsImages }) => {
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState('');
  const [nom, onChangeNom] = useState('');

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];

    if (selectedImage) {
      const reader = new FileReader();

      reader.onload = (event) => {
        setImage(event.target.result);
        setImageName(selectedImage.name);
        onImageChange({ index: selectedIndex !== null ? selectedIndex : index,nom,  image: event.target.result });
      };

      reader.readAsDataURL(selectedImage);
      
    }
  };

  const handleNomChange = (nouveauNom) => {
    onChangeNom(nouveauNom);
    onImageChange({ index: selectedIndex !== null ? selectedIndex : index, nom: nouveauNom, image });
  };



  return (
    <View>
     
     <Text>
      <Text style={styles.text}>{`Donneur ${index + 1} : `}</Text>
      <Text style={styles.soustitre2}>{index+1==5  || index + 1 === 4 ? (` (difficulté normal)`) : (``)}</Text>
      </Text>
        <Text style={styles.soustitre}>
          Nom :
          <TextInput style={styles.barreTexte} onChangeText={handleNomChange} value={nom} />
        </Text>
        <Text style={styles.soustitre}>
          Image :
          <Text style={{ textAlign: 'left', margin: 10 }}>
            {image ? (
              <View>
                <label htmlFor={`imageInput-${index}`} style={styles.uploadButton2}>
                  <span style={styles.buttonText2}>{imageName}</span>
                </label>
              </View>
            ) : (
              <label htmlFor={`imageInput-${index}`} style={styles.uploadButton}>
                <span style={styles.buttonText}> Vide </span>
              </label>
            )}
            <input type="file" accept="image/*" id={`imageInput-${index}`} onChange={handleImageChange} style={{ display: 'none' }} />
          </Text>
        </Text>
        
      
      
    </View>
  );
};
    
        
        
        const styles = {
          container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          },
          uploadButton: {
            cursor: 'pointer',
            padding: '5px',
            backgroundColor: '#CCCCCC',

            borderRadius: '10px',
            marginTop: 20,
            display: 'inline-block',
          },
          buttonText: {
            fontSize: 15,
            color:'white',
            fontWeight: 'normal',
          },
          text: {
            color: 'dark',
            fontSize: 20,
            fontWeight: 'bold',

            marginBottom : 10,
            marginLeft : 20,


            
          },
            
          soustitre: {
            marginLeft : 80,
              color: 'dark',
              fontSize: 15,
              marginTop: 1,
              fontWeight: 'normal',

          },
          soustitre2: {
            
              color: 'dark',
              fontSize: 15,
              marginTop: 1,
              fontWeight: 'normal',
          },
          barreTexte: {
            textAlign: 'center',
            height: 30,
            borderColor: 'gray',
            borderWidth: 1,
            width: Dimensions.get('window').width / 2,
            alignSelf: 'left',
            marginHorizontal: 10,
          },
          uploadButton2: {
            cursor: 'pointer',
            padding: '5px',
            backgroundColor: '#148ce8',

            borderRadius: '10px',
            marginTop: 20,
            display: 'inline-block',
          },
          buttonText2: {
            fontSize: 15,
            color:'white',
            fontWeight: 'normal',
          },
        };
export default ImageUploader;