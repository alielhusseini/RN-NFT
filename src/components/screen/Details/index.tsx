import { View, Text } from 'react-native'
import React from 'react'

// types
import { PropType } from './types'

export function Details({ route, navigation }: PropType) {

    const { id } = route.params

    return (
        <View>
            <Text>{id}</Text>
        </View>
    )
}