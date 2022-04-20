import { View } from 'react-native'
import React from 'react'

// styles
import { styles } from './styles'

export function Background() {
    return (
        <View style={styles.backgroundBody}>
            <View style={styles.upper}></View>
            <View style={styles.lower}></View>
        </View>
    )
}