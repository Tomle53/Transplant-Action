import { Image, Text, TextInput, Button, StyleSheet, Pressable, Dimensions,  } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useState,useEffect } from "react";
import React from 'react';
import { View } from "react-native";



const ImageUploader = ()=>{
    
        const [image, setImage] = useState(null);
        const [imageName, setImageName] = useState(''); 
        const handleImageChange = (e) => {
            const selectedImage = e.target.files[0];
        
            if (selectedImage) {
              const reader = new FileReader();
        
              reader.onload = (event) => {
                setImage(event.target.result);
                setImageName(selectedImage.name);
              };
        
              reader.readAsDataURL(selectedImage);
            }
          };
        
          return (
            
            <Text style={{ textAlign: 'left', margin: '10px' }}>
              {image ? (<label htmlFor="imageInput" style={styles.uploadButton2}>
              <span style={styles.buttonText2}> {imageName}</span>
              </label>):(<label htmlFor="imageInput" style={styles.uploadButton}>
              <span style={styles.buttonText}> Vide </span>
              </label>)}
              
              <input
                type="file"
                accept="image/*"
                id="imageInput"
                onChange={handleImageChange}
                style={{ display: 'none' }}
              />
             
            </Text>
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