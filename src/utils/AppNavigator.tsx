import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import CatalogScreen from '../screens/CatalogScreen';
import CartScreen from '../screens/CartScreen';
import ChatScreen from '../screens/ChatScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: true }}>
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Catalog" component={CatalogScreen} />
            <Stack.Screen name="Cart" component={CartScreen} />
            <Stack.Screen name="Chat" component={ChatScreen} />
        </Stack.Navigator>
    );
}
