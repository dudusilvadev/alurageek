import React from 'react';
import {StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native';

export default function ShoppingCartScreen({navigation}){
    return(
        <>
        <View style={styles.container}>
        <Text style={styles.textSubTitle}>Seu carinho está vazio</Text>
        <TouchableOpacity style={[styles.input, styles.lightcoral]} onPress={() => {navigation.navigate('CategoryItenScreen');}}>
            <Text>Ir para o início</Text></TouchableOpacity>
        </View>

        </>
    );
}
const styles = StyleSheet.create({
    
    container: {
      flex: 1,
      alignItems:'center',
      justifyContent:'center',
      textAlign:'center',
    },
        textSubTitle:{
            fontSize:20,
            margin:11,
            fontWeight:'500',
            color:'#2A7AE4'
        },
        input:{
            margin:15,
            width:300,
            textAlign:'center',
            alignItems:'center',
            justifyContent:'center',
            flexDirection:'row',
            paddingVertical:10,
            borderColor: "lightblue",
            borderWidth: 2,
            borderRadius:7,
        },
      lightcoral:{
          backgroundColor:'lightskyblue'
      },
  
  });