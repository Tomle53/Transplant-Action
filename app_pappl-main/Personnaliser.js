import { Image, Text, TextInput, Button, StyleSheet, Pressable, Dimensions } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useState,useEffect } from "react";
import React from 'react';
import { View } from "react-native";
import ImageUploader from './ImageUploader';


const Personnaliser = ()=>{
    
       return(
        <View>
        <Text style={styles.tittle}> Donneur 1 :</Text>
        <ImageUploader> </ImageUploader>
        <Text>Donneur 2 :
        <ImageUploader></ImageUploader>
        </Text>
        Donneur 3 :
        <ImageUploader></ImageUploader>
        Donneur 4 :
        <ImageUploader></ImageUploader>
        
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

export default Personnaliser;