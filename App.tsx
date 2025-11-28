import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DetailsScreen from './src/screens/home/DetailsScreen'
import PaymentScreen from './src/screens/payment/PaymentScreen'
import TabNavigator from './src/navigators/TabNavigator'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Tab" options={{ animation: 'slide_from_bottom' }} component={TabNavigator} />
        <Stack.Screen name="Details" options={{ animation: 'slide_from_bottom' }} component={DetailsScreen} />
        <Stack.Screen name="Payment" options={{ animation: 'slide_from_bottom' }} component={PaymentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App