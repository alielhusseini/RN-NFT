import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { StackType } from './types'
import { screenOptions } from './screenOptions'
import { Home, Details } from '../../../components/screen'

const Stack = createStackNavigator<StackType>() // it takes type and not interface

export const StackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' screenOptions={screenOptions}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Details" component={Details} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}