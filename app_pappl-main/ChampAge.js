/* eslint-disable prettier/prettier */
import React from 'react';
import { useState } from 'react';
import { Text, View, TextInput, Button, Dimensions } from 'react-native';
import Slider from '@react-native-community/slider';
import { StyleSheet } from 'react-native-web';

/**
 * 
 * @param {*} param0 
 * @returns Le composant permettant de recevoir un âge rentré par l'utilisateur pour répondre, et mettre à jour le booléen selon que l'utilisateur réponde correctement ou non
 */

const ChampAge = ({ bonAge, age, changeAge, changeAgeOk }) => {
    const [ageRempli, setAgeRempli] = useState(age)
    return <View>
        <TextInput style={styles.input} value={ageRempli.toString()}
            onChangeText={(value) =>{if(!isNaN(parseInt(value))){ setAgeRempli(parseInt(value))}if(value==""){setAgeRempli("")}}}
            onBlur={() => {
                changeAge(parseInt(ageRempli)); 
                setAgeRempli(age);
                changeAgeOk(parseInt(ageRempli) == bonAge)
                }
            }
            />
        <Slider
            value={age}
            onValueChange={(value) => { changeAge(value); setAgeRempli(value) }}
            onSlidingComplete={(value) => changeAgeOk(value == bonAge)}
            step={1}
            minimumValue={20}
            maximumValue={80}
            style={{ width: Dimensions.get('window').width / 4 - 10, alignSelf: 'center', }}
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

export default ChampAge;