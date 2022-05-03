import React from 'react';
import { StyleSheet, View,ImageBackground, Image } from 'react-native';



const urlImg = require('../assets/img/imgBg.jpg');
const urlLogo = require('../assets/img/Logo.png');


export default function StartHomeScreen({navigation}) {
    
    setTimeout( () => {navigation.navigate('HomeScreenOld');}, 2500 );
    
    return(
        
        <>
        
        <View style={styles.container}>
            <ImageBackground source={urlImg}  style={styles.image}>
            <View style={{ justifyContent:'center', alignItems:'center'}}>
            <Image source={urlLogo} style={styles.imgLogo} ></Image>
            </View>
        </ImageBackground>
        </View>
        </>
    );
    
}
const styles = StyleSheet.create({
	container:{
    flex:1,
    justifyContent:'center',
	textAlign: "center",
		
	},
	image: {
    flex:1,
    resizeMode: "cover",
    justifyContent: "center",
    textAlign:'center'
	},
imgLogo:{
  //position:"absolute",
  //justifyContent: "center",
  //alignItems:'center',
  height:350,
  width:250,
  resizeMode: "contain",
},
});