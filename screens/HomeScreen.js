import React from 'react';
import { StyleSheet,Image, Text, View,TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { TextInput,Button } from 'react-native-paper';




export default function HomeScreen({navigation}) {

    return(
        <>
        <ScrollView  style={styles.container}>
        <View>
            <View style={styles.slide}>
            <Image style={styles.sizeImgTop} source={require('../assets/img/bicicleta-topo.jpeg')}/>
           
            </View>
        </View>
        <Text style={styles.textSubTitle}>Categorias</Text>
        <View style={styles.containerDestac}>
            

            <View  style={styles.destGrup}>
                <TouchableOpacity style={[styles.bgImgDest, styles.red] } title='' onPress={() => {navigation.navigate('ListItenScreen');}}>

                <Image style={styles.sizeImgDest} source={require('../assets/img/capacete.png')} />
                </TouchableOpacity>
                <Text>Capacetes</Text>
            </View>
            <View  style={styles.destGrup}>
                <TouchableOpacity style={[styles.bgImgDest, styles.blue]} title='' onPress={() => {navigation.navigate('ListItenScreen');}}>

                <Image style={styles.sizeImgDest} source={require('../assets/img/coroa.png')} />
                </TouchableOpacity>
                <Text>Coroas</Text>
            </View>
            <View  style={styles.destGrup}>
                <TouchableOpacity style={[styles.bgImgDest, styles.gold]} title='' onPress={() => {navigation.navigate('ListItenScreen');}}>

                <Image style={styles.sizeImgDest} source={require('../assets/img/frame.png')} />
                </TouchableOpacity>
                <Text>Quadros</Text>
            </View>
            <View  style={styles.destGrup}>
                <TouchableOpacity style={[styles.bgImgDest, styles.green]} title='' onPress={() => {navigation.navigate('ListItenScreen');}}>

                <Image style={styles.sizeImgDest} source={require('../assets/img/freio.png')} />
                </TouchableOpacity>
                <Text>Freios</Text>
            </View>
            <View  style={styles.destGrup}>
                <TouchableOpacity style={[styles.bgImgDest, styles.maroon]} title='' onPress={() => {navigation.navigate('ListItenScreen');}}>

                <Image style={styles.sizeImgDest} source={require('../assets/img/lanterna.png')} />
                </TouchableOpacity>
                <Text>Lanternas</Text>
            </View>
            <View  style={styles.destGrup}>
                <TouchableOpacity style={[styles.bgImgDest, styles.lightcoral]} title='' onPress={() => {navigation.navigate('ListItenScreen');}}>

                <Image style={styles.sizeImgDest} source={require('../assets/img/lock.png')} />
                </TouchableOpacity>
                <Text>Cadeados</Text>
            </View>
            <View  style={styles.destGrup}>
                <TouchableOpacity style={[styles.bgImgDest, styles.tomato]} title='' onPress={() => {navigation.navigate('ListItenScreen');}}>

                <Image style={styles.sizeImgDest} source={require('../assets/img/roda.png')} />
                </TouchableOpacity>
                <Text>Rodas</Text>
            </View>
            <View  style={styles.destGrup}>
                <TouchableOpacity style={[styles.bgImgDest, styles.violet]} title='' onPress={() => {navigation.navigate('CategoryItenScreen');}}>

                <Image style={styles.sizeImgDest} source={require('../assets/img/add.png')} />
                </TouchableOpacity>
                <Text>Mais</Text>
            </View>
            </View>

           <Text style={styles.textSubTitle}>Mais comprados </Text>
            <View style={{flexDirection:'row',flexWrap:'wrap', justifyContent:'center', alignContent:'center'}}>
          
            <TouchableOpacity  style={styles.item} onPress={() => {navigation.navigate('ProductScreen');}}>

                <View>
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
            </TouchableOpacity>

            
            <TouchableOpacity  style={styles.item} onPress={() => {navigation.navigate('ProductScreen');}}>

                <View>
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
            </TouchableOpacity>

            
            <TouchableOpacity  style={styles.item} onPress={() => {navigation.navigate('ProductScreen');}}>

                <View>
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
            </TouchableOpacity>

            
            <TouchableOpacity  style={styles.item} onPress={() => {navigation.navigate('ProductScreen');}}>

                <View>
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
            </TouchableOpacity>

    
    </View>
    <View>
        <Text style={styles.textSubTitle}>Receba as melhores ofertas</Text>
        <TextInput placeholder='Nome'></TextInput>
        <TextInput placeholder='Email' ></TextInput>
        <Button style={{backgroundColor:'#2A7AE4'}} onPress={() => {navigation.navigate('CategoryItenScreen');}}>Receber</Button>
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
        marginTop:10,
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
        borderRadius:50, 
        width:65, height:65,
        alignItems:'center', 
        justifyContent:'center'
    },

    sizeImgDest:{
        width:50,
        height:50,
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
      red:{
          backgroundColor:'red'
      },
      blue:{
          backgroundColor:'blue'
      },
      violet:{
          backgroundColor:'violet'
      },
      gold:{
          backgroundColor:'gold'
      },
      green:{
          backgroundColor:'green'
      },
      lightcoral:{
          backgroundColor:'lightcoral'
      },
      maroon:{
          backgroundColor:'maroon'
      },
      tomato:{
          backgroundColor:'tomato'
      }
      


});