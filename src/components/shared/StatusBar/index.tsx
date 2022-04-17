import { StatusBar } from 'react-native'
import React from 'react'
import { useIsFocused } from '@react-navigation/native'

export function FocusedStatusBar({ backgroundColor, barStyle }: { backgroundColor: string, barStyle: 'dark-content' | 'light-content' }) {

    const isFocused = useIsFocused()

    if (!isFocused) return null

    return <StatusBar animated={true} backgroundColor={backgroundColor} barStyle={barStyle} />
}