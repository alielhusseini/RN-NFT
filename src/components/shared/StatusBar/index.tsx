import { StatusBar } from 'react-native'
import React from 'react'
import { useIsFocused } from '@react-navigation/native'

export function FocusedStatusBar({ backgroundColor, barStyle, translucent }: { backgroundColor: string, barStyle: 'dark-content' | 'light-content', translucent: boolean }) {

    const isFocused = useIsFocused()

    if (!isFocused) return null

    return <StatusBar translucent={translucent} animated={true} backgroundColor={backgroundColor} barStyle={barStyle} />
}