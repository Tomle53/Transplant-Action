import { Image, Text, TextInput, Button, StyleSheet, Pressable, Dimensions } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useState,useEffect } from "react";
import React from 'react';
import { View } from "react-native";



const ImageUploader = ()=>{
    
        const [image, setImage] = useState(null);
        const handleImageChange = (e) => {
            const selectedImage = e.target.files[0];
        
            if (selectedImage) {
              const reader = new FileReader();
        
              reader.onload = (event) => {
                setImage(event.target.result);
              };
        
              reader.readAsDataURL(selectedImage);
            }
          };
        
          return (
            <Text>
              <input
                type="file"
                accept="image/*"
                id="imageInput"
                onChange={handleImageChange}
              />
              
            </Text>
          );
        }

export default ImageUploader;