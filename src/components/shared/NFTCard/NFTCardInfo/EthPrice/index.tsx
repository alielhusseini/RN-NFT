import { View, Text, Image } from 'react-native'
import React from 'react'
import { assets } from '../../../../../constants'

// styles
import { styles } from './styles'

export function EthPrice({ price }: { price: number }) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.ethLogo}
                source={assets.eth}
            />
            <Text style={styles.priceText}>{price}</Text>
        </View>
    )
}