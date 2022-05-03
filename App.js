import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StartHomeScreen from './screens/StartHomeScreen';
import HomeScreen from './screens/HomeScreen';
import AccountUser from './screens/AccountUser';
import NotificationUser from './screens/NotificationUser';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ShoppingCartScreen from './screens/ShoppingCartScreen';
import CategoryItenScreen from './screens/CategoryItenScreen';


const TabBottom = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabsBottom() {
  return(
    
<TabBottom.Navigator
  screenOptions={{
    
    tabBarActiveTintColor: '#464646',
    tabBarInactiveTintColor:'#2A7AE4',
    }}
>
  <TabBottom.Screen name='Home Screen' component={HomeScreen} 
    options={{
      tabBarLabel: 'Início',
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="home" color={color} size={26} />
      ), }}
  />
  <TabBottom.Screen name='CategoryItenScreen' component={CategoryItenScreen}
    options={{
      tabBarLabel: 'Categoria',
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="format-list-bulleted" color={color} size={26} />
      ), }}
  />
  <TabBottom.Screen name='ShoppingCartScreen' component={ShoppingCartScreen}
    options={{
      tabBarLabel: 'Carrinho',
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="cart" color={color} size={26} />
      ), }}
  />
  <TabBottom.Screen name='AccountUser' component={AccountUser}
    
    options={{
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
        <Stack.Screen options={{headerShown: false}} name='StartHomeScreen' component={StartHomeScreen}/>
        <Stack.Screen options={{headerShown: false}} name='HomeScreenOld' component={TabsBottom}/>
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
