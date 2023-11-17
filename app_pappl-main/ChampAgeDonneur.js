/* eslint-disable prettier/prettier */
import React from 'react';
import { useState } from 'react';
import { Text, View, TextInput, Button, Dimensions, useWindowDimensions } from 'react-native';
import Slider from '@react-native-community/slider';
import { StyleSheet } from 'react-native-web';

/**
 * 
 * @param {*} param0 
 * @returns Le composant permettant de recevoir un âge rentré par l'utilisateur pour répondre, et mettre à jour le booléen selon que l'utilisateur réponde correctement ou non
 */

const ChampAgeDonneur = ({ bonAge, age, changeAge, changeAgeOk, mismatchOk, changeMismatchOk,inputValue, setInputValue }) => {
    const [ageRempli, setAgeRempli] = useState(age)
    const { width } = useWindowDimensions();
    return <View>
        <TextInput style={[styles.input,width >600?{ width:width/4 -10  } : { width: Dimensions.get('window').width/1.5 }]}
             value={ageRempli.toString()}
            onChangeText={(value) =>{if(!isNaN(parseInt(value))){ setAgeRempli(parseInt(value))}if(value==""){setAgeRempli("")}}}
            onBlur={() => {
                changeAge(parseInt(ageRempli)); 
                setAgeRempli(age);
                changeAgeOk(parseInt(ageRempli) == bonAge);
                changeMismatchOk(false);
                setInputValue("");
                }
            }
            />
        <Slider
            value={age}
            onValueChange={(value) => { changeAge(value); setAgeRempli(value);changeMismatchOk(false);setInputValue("") }}
            onSlidingComplete={(value) => {changeAgeOk(value == bonAge);changeMismatchOk(false);setInputValue("")}}
            step={1}
            minimumValue={20}
            maximumValue={80}
            style={{
                width: width > 600 ? width / 4 - 10 : width / 1.5,
                alignSelf: 'center',
              }}
            thumbTintColor='#148ce8'
            minimumTrackTintColor='#148ce8'
        />
    </View>
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: Dimensions.get('window').width / 4 - 10,
        alignSelf: 'center',

  
      },      
});

export default ChampAgeDonneur;