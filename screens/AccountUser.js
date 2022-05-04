import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Button,TextInput,Image  } from 'react-native';
//import { TextInput} from 'react-native-paper';

export default function AccountUser() {
    return(
        <>
        <View style={styles.container}>
        <Image
      style={{ height:60, width:210}}
      source={require('../assets/img/LogoG.png')}/>
        <Text style={styles.textSubTitle}>Como deseja continuar?</Text>
        <TextInput style={styles.input} placeholder='Email'></TextInput>
        <TextInput style={styles.input} placeholder='Senha' ></TextInput>
        <Button title='Fazer Login' onPress={() => {navigation.navigate('CategoryItenScreen');}}>Fazer Login</Button>
        <View >
        <TouchableOpacity style={[styles.input, styles.lightcoral]} onPress={() => {navigation.navigate('CategoryItenScreen');}}>
            <Image style={styles.sizeImgDest} source={require('../assets/img/google.png')}/>
            <Text>Entrar Com o Google</Text></TouchableOpacity>
            
        <TouchableOpacity style={[styles.input, styles.gold]} onPress={() => {navigation.navigate('CategoryItenScreen');}}>
            <Image style={styles.sizeImgDest} source={require('../assets/img/conecte.png')}/>
            <Text >Fazer Cadastro</Text></TouchableOpacity>
            </View>
    </View>
        </>
    );
    
}
const styles = StyleSheet.create({
    
    container: {
      flex: 1,
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
    },
      sizeImgDest:{
          width:25,
          height:25,
          resizeMode: 'cover',
          borderRadius:100,
          marginHorizontal:10,
          
      flexDirection:'row',
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
      gold:{
          backgroundColor:'gold'
      }
  });