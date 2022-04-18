import { View, Text } from 'react-native'
import React from 'react'

// types
import { IBid } from '../../screen/Details/types'

export function DetailsBid({ id, name, price, image, date }: IBid) {
    return (
        <View>
            <Text>DetailsBid</Text>
        </View>
    )
}