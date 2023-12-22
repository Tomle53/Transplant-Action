
/**
 * @returns Le deuxième écran de jeu, sur lequel le joueur doit fournir les informations trouvées sur les donneurs pour pouvoir ensuite choisir le bon donneur.
 */

/* eslint-disable prettier/prettier */

import React, { useState, useEffect } from 'react';
import { Text, View, Button, StyleSheet, Pressable, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Donneur from './donneur';
import {  Timer } from 'react-native-stopwatch-timer';

let indexFauxDonneurs = [];
while(indexFauxDonneurs.length<5){
  var nouvelIndex = getRandomInt(5)
  if(indexFauxDonneurs.indexOf(nouvelIndex)===-1){
    indexFauxDonneurs.push(nouvelIndex)
  }
}
const nomDonneurCorrect = 'Dr Maya Curado';
const ageDonneurCorrect = 33;
const sequenceDonneurCorrect = "M Y H K L"
const imageMaya = require('./pictures/Maya.png')
const donneursPotentiels = [['Léon Patounec', 22, 'M',40,require('./pictures/Leon.png'),"M Y W I T"],['Dr Emilia Caubert',65, 'F',40,require('./pictures/Emilia.png'), "M G R K P"],['Tomas Parker',61, 'M',60,require('./pictures/Tomas.png'),"M Y H A H"],['Béatrice Tapalinga',23, 'F',20,require('./pictures/Beatrice.png'), "Y G M K T"],['Vlad Koscov',37,'M',60,require('./pictures/Vlad.png'),"L Y K K L"]];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const positionDonneurCorrect = getRandomInt(3);


/*const Donneurs =  [];
let donneurCorrectAjoute = false;
for(index=0;index<indexFauxDonneurs.length+1;index++){
  if(index==positionDonneurCorrect){
    Donneurs.push([nomDonneurCorrect, ageDonneurCorrect,"F"])
    donneurCorrectAjouté = true;
  }
  else if(!donneurCorrectAjoute){
  Donneurs.push(donneursPotentiels[indexFauxDonneurs[index]])
  }
  else{Donneurs.push(donneursPotentiels[indexFauxDonneurs[index-1]])}
}*/

const EcranDeJeu2 = ({ route,navigation }) => {
  
  const difficulte = route.params.difficulte;
  const timer = global.time;
  const informationsImages=route.params.informationsImages;
  const [isTimerStart, setIsTimerStart] = useState(true);
  const [timerDuration, setTimerDuration] = useState(timer);
  const [resetTimer, setResetTimer] = useState(false);
  const StopTimer = (value) => {setIsTimerStart(value);}
  const ages = []
  const changeAges = []
  const agesOk = []
  const changeAgesOk = []
  const genres=[]
  const changeGenres = []

  const mismatchesOk = []
  const changeMismatchesOk = []
  const nombreDeDonneurs = difficulte ? 6:4;
  let [resolu,setResolu] = useState(false);

  const verifierTout = () => {if(mismatchesOk.every(Boolean)){setResolu(resolu=true)}else{setResolu(resolu=false)}};
  const handleAddTime = ()=>{setIsTimerStart(false),setTimerDuration(global.time+300000),setResetTimer(true)}
  useEffect(() => {verifierTout();},[mismatchesOk]);
  for(index=0;index<nombreDeDonneurs;index++){
    const [age,setAge] = useState(20);
    ages.push(age)
    const changeAge = (value) => {if(isNaN(parseInt(value)&&isNaN(value))){setAge(20)}
    else{if(parseInt(value)<20){setAge(20)}
  else{if(parseInt(value)>80){setAge(80)}
  else{setAge(value)}  
}
  }
  }

  
    changeAges.push(changeAge)
    const [ageOk,setAgeOk] = useState(false)
    agesOk.push(ageOk)
    const changeAgeOk = (value) => {setAgeOk(value);}
    changeAgesOk.push(changeAgeOk)
    const [genre,setGenre] = useState();
    genres.push(genre)
    const changeGenre = (value) => {setGenre(value);}
    changeGenres.push(changeGenre)
    const [mismatchOk, setMismatchOk] = useState()
    mismatchesOk.push(mismatchOk)
    const changeMismatchOk = (value) => {setMismatchOk(value);}
    changeMismatchesOk.push(changeMismatchOk)
  }
  const Donneurs = []
  let donneurCorrectAjoute = false;
for(let index=0;index<nombreDeDonneurs;index++){
  /*L'objectif de cette boucle for est de permettre de s'affranchir du nombre de donneurs affichés à l'écran au cas ou l'application 
  viendrait à changer un jour*/ 
  dernierStop = index;
  if(index==positionDonneurCorrect){
    Donneurs.push(<Donneur key={index.toString()} nom = {nomDonneurCorrect} age = {ages[index]} bonAge = {ageDonneurCorrect} 
    changeAge = {changeAges[index]} ageOk = {agesOk[index]} changeAgeOk = {changeAgesOk[index]} indicationGenre = "F" genre = {genres[index]} changeGenre={changeGenres[index]} compatibilite= {100}
    correct = {true} resolu = {resolu} imageSource = {imageMaya}
    mismatchOk = {mismatchesOk[index]} changeMismatchOk = {changeMismatchesOk[index]} difficulte={difficulte}
    sequence = {sequenceDonneurCorrect}
    />)
    donneurCorrectAjoute = true;
  }
  else if(!donneurCorrectAjoute){
  Donneurs.push(<Donneur key={index.toString()} nom = {informationsImages[indexFauxDonneurs[index]].nom=='' ? donneursPotentiels[indexFauxDonneurs[index]][0] : informationsImages[indexFauxDonneurs[index]].nom} 
  age = {ages[index]} 
  bonAge = {donneursPotentiels[indexFauxDonneurs[index]][1]} 
  changeAge = {changeAges[index]} ageOk = {agesOk[index]} changeAgeOk = {changeAgesOk[index]} 
  indicationGenre = {donneursPotentiels[indexFauxDonneurs[index]][2]}
  genre = {genres[index]} 
  changeGenre={changeGenres[index]} 
  compatibilite= {donneursPotentiels[indexFauxDonneurs[index]][3]}


  correct = {false} resolu = {resolu} imageSource = {informationsImages[index].image==null ?  donneursPotentiels[indexFauxDonneurs[index]][4] : informationsImages[indexFauxDonneurs[index]].image}
  mismatchOk = {mismatchesOk[index]} changeMismatchOk = {changeMismatchesOk[index]} difficulte={difficulte}
  sequence = {donneursPotentiels[indexFauxDonneurs[index]][5]}

  />)
  }
  else{Donneurs.push(<Donneur key={index.toString()} nom = {informationsImages[indexFauxDonneurs[index-1]].nom=='' ? donneursPotentiels[indexFauxDonneurs[index-1]][0] : informationsImages[indexFauxDonneurs[index-1]].nom} 
  age = {ages[index]} 
  bonAge = {donneursPotentiels[indexFauxDonneurs[index-1]][1]} 
  changeAge = {changeAges[index]} ageOk = {agesOk[index]} changeAgeOk = {changeAgesOk[index]} 
  indicationGenre = {donneursPotentiels[indexFauxDonneurs[index-1]][2]}
  genre = {genres[index]} 
  changeGenre={changeGenres[index]} 
  compatibilite= {donneursPotentiels[indexFauxDonneurs[index-1]][3]}

  correct = {false} resolu = {resolu} imageSource = {informationsImages[indexFauxDonneurs[index-1]].image==null ?  donneursPotentiels[indexFauxDonneurs[index-1]][4] : informationsImages[indexFauxDonneurs[index-1]].image}

  mismatchOk = {mismatchesOk[index]} changeMismatchOk = {changeMismatchesOk[index]} difficulte={difficulte}
  sequence = {donneursPotentiels[indexFauxDonneurs[index-1]][5]}
  />)
}}  
 
  return(


        <View style={styles.container}>
           {indexFauxDonneurs.map((index, idx) => (
        <Text key={idx.toString()} style={styles.indexText}>{index}</Text>
      ))}
          <View style={styles.timeContainer}>
         <Timer 
            totalDuration={timerDuration}
            secs
            //Time Duration
            start={isTimerStart}
            //To start
            reset={resetTimer}
            //To reset
            options={options}
            //options for the styling
            handleFinish={() => {
              navigation.navigate('EcranDeFinDePartie', {gagne: false});
            }}
            //can call a function On finish of the time
            getTime={(time) => {
              time = time.split(':');
              time = (((Number(time[0])*3600) + (Number(time[1])*60) + Number(time[2])) * 1000);
              global.time = time;
              console.log(time);
              setIsTimerStart(true);
              setResetTimer(false);
            }}
          />

          <Pressable style={!difficulte? styles.buttonAddTime : styles.buttonAddTimeCache} onPress={()=>{handleAddTime()}} disabled={difficulte}>
          <Text style={{color: 'white', fontSize:15}}>Ajouter 5 minutes</Text>
          </Pressable>
          </View>
          <Text style={styles.title}> Étape 2 </Text>
          <Text style={styles.instruction}> Rentrer les informations relatives aux donneurs </Text>
        <Text>{resolu}</Text>
        <Text>
        {Donneurs}
        </Text>
        </View>
    )
}

const styles = StyleSheet.create({
  timeContainer: {
    flexDirection:'row',
    justifyContent: 'center',
    marginLeft:250,
  },
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
  buttonAddTimeCache: {
    textAlign: 'center',
    backgroundColor: '#accae0',
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    opacity:0,
  },
  buttonAddTime: {
    textAlign: 'center',
    backgroundColor: '#148ce8',
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
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
  instruction: {
    textAlign:'center',
    fontSize: 20,
    //fontStyle: 'italic',
    fontWeight: 'bold',
    margin: 10,
  },
  button: {
    textAlign: 'center',
    backgroundColor: '#148ce8',
    paddingHorizontal: 30,
    paddingVertical: 14,
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
  flex :1,
    resizeMode: 'contain',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
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
    width: Dimensions.get('window').width/5-10,
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

export default EcranDeJeu2