import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/home/HomeScreen';
import CartScreen from '../screens/cart/CartScreen';
import FavoritesScreen from '../screens/favorite/FavoritesScreen';
import OrderHistoryScreen from '../screens/order/OrderHistoryScreen';
import { StyleSheet } from 'react-native';
import { COLORS } from '../theme/theme';
import { BlurView } from '@react-native-community/blur';
import CustomIcon from '../components/global/CustomIcon';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarHideOnKeyboard: true,
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: styles.tabBarStyle,
            tabBarBackground: () => (
                <BlurView overlayColor='' blurAmount={15} style={styles.blurViewStyle} />
            )
        }}>
            <Tab.Screen name="Home" options={{
                tabBarIcon: ({ focused, color, size }) => (
                    <CustomIcon name='home' size={25} color={focused ? COLORS.primaryOrangeHex : COLORS.primaryGreyHex} />
                )
            }} component={HomeScreen} />
            <Tab.Screen name="Cart" options={{
                tabBarIcon: ({ focused, color, size }) => (
                    <CustomIcon name='cart' size={25} color={focused ? COLORS.primaryOrangeHex : COLORS.primaryGreyHex}/>
                )
            }} component={CartScreen} />
            <Tab.Screen name="Favorite" options={{
                tabBarIcon: ({ focused, color, size }) => (
                    <CustomIcon name='like' size={25} color={focused ? COLORS.primaryOrangeHex : COLORS.primaryGreyHex}/>
                )
            }} component={FavoritesScreen} />
            <Tab.Screen name="History"
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <CustomIcon name='bell' size={25} color={focused ? COLORS.primaryOrangeHex : COLORS.primaryGreyHex}/>
                    )
                }} component={OrderHistoryScreen} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    tabBarStyle: {
        height: 80,
        position: 'absolute',
        backgroundColor: COLORS.primaryBlackRGBA,
        borderTopWidth: 0,
        elevation: 0,
        borderTopColor: 'transparent',
    },
    blurViewStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    }
})

export default TabNavigator