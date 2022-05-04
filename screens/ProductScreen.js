import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, ScrollView,TouchableOpacity } from 'react-native';

export default function ProductScreen({navigation}) {
    return(
        <>
        <ScrollView>
        <View style={styles.itemTotal}>
                <View>
                    <Image source={{uri:'https://a-static.mlcdn.com.br/618x463/bicicleta-aro-29-mountain-bike-colli-bike-ultimate-freio-a-disco-21-marchas/magazineluiza/219066900/137182c8596c29ae465381144f26dc2e.jpg'}} style={{width:300, height:300, resizeMode:'contain'}}/>
                </View>
                <View >
                    <Text style={styles.title}>Bicicleta Aro 26 Masculina 18 Marchas Aço Carbono Ultra Bikes</Text>
                    <Text>⭐⭐⭐⭐</Text>
                    <Text style={{color:'green'}}>Em 10x 359,89</Text>
                </View>
                    <View>
                        <Text >ou a vista</Text>
                        <Text style={styles.textPreco}>R$ 3.49,89</Text>

                    </View>
                
                <View >
        <TouchableOpacity style={[styles.input, styles.lightcoral]} onPress={() => {navigation.navigate('CategoryItenScreen');}}>
            <Text>Finalizar compra</Text></TouchableOpacity>
            
        <TouchableOpacity style={[styles.input, styles.gold]} onPress={() => {navigation.navigate('CategoryItenScreen');}}>
            <Text >Adicionar ao Carinho</Text></TouchableOpacity>
            </View>
    </View>

    <Text style={styles.textSubTitle}>Produtos Relacionados</Text>
         <View style={{flexDirection:'row',flexWrap:'wrap', justifyContent:'center', alignContent:'center'}}>
          

    <View style={styles.item}>
                <View>
                    <Image source={{uri:'https://a-static.mlcdn.com.br/618x463/bicicleta-aro-29-mountain-bike-colli-bike-ultimate-freio-a-disco-21-marchas/magazineluiza/219066900/137182c8596c29ae465381144f26dc2e.jpg'}} style={styles.imagProduct}/>
                </View>
                <View >
                    <Text style={styles.title}>Bicicleta Aro 26 Masculina 18 Marchas Aço Carbono Ultra Bikes</Text>
                    <Text>⭐⭐⭐⭐</Text>
                    <Text style={{color:'green'}}>Em 10x 359,89</Text>
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <View >
                        <Text>ou a vista</Text>
                        <Text style={styles.textPreco}>R$ 3.49,89</Text>

                    </View>
                </View>  
            </View>

    <View style={styles.item}>
            <View>
                <Image source={{uri:'https://a-static.mlcdn.com.br/618x463/bicicleta-aro-29-mountain-bike-colli-bike-ultimate-freio-a-disco-21-marchas/magazineluiza/219066900/137182c8596c29ae465381144f26dc2e.jpg'}} style={styles.imagProduct}/>
            </View>
            <View >
                <Text style={styles.title}>Bicicleta Aro 26 Masculina 18 Marchas Aço Carbono Ultra Bikes</Text>
                <Text>⭐⭐⭐⭐</Text>
                <Text style={{color:'green'}}>Estoque 20 und</Text>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <View >
                    <Text>Por</Text>
                    <Text style={styles.textPreco}>R$ 3.59,89</Text>
                </View>
            </View>   
    </View>

    <View style={styles.item}>
            <View>
                <Image source={{uri:'https://a-static.mlcdn.com.br/618x463/bicicleta-aro-29-mountain-bike-colli-bike-ultimate-freio-a-disco-21-marchas/magazineluiza/219066900/137182c8596c29ae465381144f26dc2e.jpg'}} style={styles.imagProduct}/>
            </View>
            <View >
                <Text style={styles.title}>Bicicleta Aro 26 Masculina 18 Marchas Aço Carbono Ultra Bikes</Text>
                <Text>⭐⭐⭐⭐</Text>
                <Text style={{color:'green'}}>Estoque 20 und</Text>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <View >
                    <Text>Por</Text>
                    <Text style={styles.textPreco}>R$ 3.59,89</Text>
                </View>
            </View>   
    </View>
    </View>
    </ScrollView>
        </>
    );
    
}
const styles = StyleSheet.create({
    
    container: {
      flex: 1,
    },
      sizeImgTop:{
          width:'100%',
          height:130,
          resizeMode: 'cover',
          borderRadius:10,
      },
      containerDestac:{ 
          flex:3,
          flexWrap:'wrap',
          justifyContent:"space-around",
          flexDirection:'row',
      },
      destGrup:{
          textAlign:'center',
          marginVertical:5,
          marginHorizontal:8,
          padding:5,
          alignItems:'center',
      },
      bgImgDest:{
          backgroundColor:"red", 
          borderRadius:30, 
          width:65, height:65,
          alignItems:'center', 
          justifyContent:'center'
      },
  
      sizeImgDest:{
          width:55,
          height:55,
          resizeMode: 'cover',
          borderRadius:100,
      },
      slide:{
          flex:1,
          flexDirection:'row',
          marginHorizontal:12,
          //height:130, 
      },item: {
          width:'45%',
          backgroundColor: 'white',
          padding: 10,
          marginVertical: 8,
          marginHorizontal: 5,
          color:'red',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.5,
          shadowRadius: 2,
          elevation:4,
          flexWrap:'wrap',
          justifyContent:'space-evenly',
          alignContent:'center',
          //alignItems:'center'
        }
        ,itemTotal:{
            width:'100%',
            backgroundColor: 'white',
            padding: 10,
            marginVertical: 12,
            marginHorizontal: 8,
            color:'red',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.5,
            shadowRadius: 2,
            elevation:4,
            justifyContent:'center',
            alignContent:'center',
            alignItems:'center',
            //alignItems:'center'
          },
        title: {
          fontSize: 16,
          fontWeight:'600',
          alignItems:'flex-start'
        },
        imagProduct:{
            maxWidth:150,
            height:120,
            resizeMode:"stretch",
            marginRight:15,
            alignContent:'center',
            marginBottom:10,
        },
        textPreco:{
            fontWeight:'bold',
            fontSize:18,
            color:'green',
            alignItems:'flex-start',
            justifyContent:'flex-start'
        },
        textSubTitle:{
            fontSize:20,
            margin:11,
            fontWeight:'500',
            color:'#2A7AE4'
        },
        btn:{
          minWidth:'50%',
          borderRadius:8,
          paddingVertical: 12,
          backgroundColor: "darkviolet",
          opacity:1,
          justifyContent:'center',
          alignItems:'center'
          
        },
        textBtn:{
          color:'#fff',
          textAlign:'center',
          fontSize:18,
          fontWeight:'bold',
  
        },
        input:{
            margin:8,
            width:300,
            textAlign:'center',
            alignItems:'center',
            justifyContent:'center',
            paddingVertical:15,
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