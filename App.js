import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TouchableOpacity, Button } from 'react-native';
import StartHomeScreen from './screens/StartHomeScreen';
import HomeScreen from './screens/HomeScreen';
import AccountUser from './screens/AccountUser';
import NotificationUser from './screens/NotificationUser';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ShoppingCartScreen from './screens/ShoppingCartScreen';
import CategoryItenScreen from './screens/CategoryItenScreen';
import ListItenScreen from './screens/ListItenScreen';
import ProductScreen from './screens/ProductScreen';


const TabBottom = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ height:30, width:140}}
      source={require('./assets/img/logoC.png')}
    />
  );
}

function TabsBottom() {
  return(
    
<TabBottom.Navigator
  screenOptions={{
    
    tabBarActiveTintColor: '#464646',
    tabBarInactiveTintColor:'#2A7AE4',
    
    }}
>
  <TabBottom.Screen name='HomeScreen' component={HomeScreen} 
    options={{
      headerTitle: (props) => <LogoTitle {...props} />,
      headerRight: () => (
        <TouchableOpacity style={{flexDirection:'row'}}>
          <Image style={{width:25, height:25,marginRight:20, }} source={require('./assets/img/lupa.png')}/>
          <Image style={{width:25, height:25,marginRight:20, }} source={require('./assets/img/tres.png')}/>
        </TouchableOpacity>
      ),
      headerStyle: {
        backgroundColor: '#2A7AE4',
      },
      title: 'Início',
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="home" color={color} size={26} />
      ), }}
  />
  <TabBottom.Screen name='CategoryItenScreen' component={CategoryItenScreen}
    options={{
      headerRight: () => (
        <TouchableOpacity style={{flexDirection:'row'}}>
          <Image style={{width:25, height:25,marginRight:20, }} source={require('./assets/img/lupa.png')}/>
          <Image style={{width:25, height:25,marginRight:20, }} source={require('./assets/img/tres.png')}/>
        </TouchableOpacity>
      ),
      headerStyle: {
        backgroundColor: '#2A7AE4',
      },
      title: 'Categorias',
      tabBarLabel: 'Categoria',
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="format-list-bulleted" color={color} size={26} />
      ), }}
  />
  <TabBottom.Screen name='ShoppingCartScreen' component={ShoppingCartScreen}
    options={{
      
      title: 'Carinho',
      tabBarLabel: 'Carrinho',
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="cart" color={color} size={26} />
      ), }}
  />
  <TabBottom.Screen name='AccountUser' component={AccountUser}
    
    options={{
      title: '',
      tabBarLabel: 'Perfil',
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="account" color={color} size={26} />
      ), }}
  />
</TabBottom.Navigator>
  );
  
}


export default function App() {
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartHomeScreen">
        <Stack.Screen options={{headerShown: false, tabBarLabel: 'Início',}} name='StartHomeScreen' component={StartHomeScreen}/>
        <Stack.Screen options={{headerShown: false}} name='HomeScreenOld' component={TabsBottom}/>
        <Stack.Screen options={{title: 'Produtos'}} name='ListItenScreen' component={ListItenScreen}/>
        <Stack.Screen options={{title: 'Produto'}} name='ProductScreen' component={ProductScreen}/>
      </Stack.Navigator>

    </NavigationContainer>
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
