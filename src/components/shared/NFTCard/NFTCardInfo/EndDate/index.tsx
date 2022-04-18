import { View, Text } from 'react-native'
import React from 'react'

// styles
import { styles } from './styles'

export function EndDate() {
    return (
        <View style={styles.container}>
            <Text style={styles.urgency}>Ending In</Text>
            <Text style={styles.time}>12h 30m</Text>
        </View>
    )
}