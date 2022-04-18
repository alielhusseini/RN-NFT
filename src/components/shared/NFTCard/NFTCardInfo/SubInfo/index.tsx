import { View, Text } from 'react-native'
import React from 'react'
import { People } from '../People'
import { EndDate } from '../EndDate'

// styles
import { styles } from './styles'

export function SubInfo() {
    return (
        <View style={styles.headerContainer}>
            <People />
            <EndDate />
        </View>
    )
}