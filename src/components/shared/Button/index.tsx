import { Pressable, Image, ImageSourcePropType, Text } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../../../constants'

// styles
import { styles } from './styles'

export function CircleButton({ imgUrl, handlePress, right, top, left }: { imgUrl: ImageSourcePropType, right?: number, top?: number, left?: number, handlePress: () => void }) {
    return (
        <Pressable
            onPress={handlePress}
            style={({ pressed }) => [
                {
                    opacity: pressed ? 0.5 : 1,
                },
                // the position of the button
                {
                    right,
                    top,
                    left,
                },
                // the size of the button
                styles.circelButton
            ]}
        >
            <Image
                source={imgUrl}
                style={styles.circleImage}
            />
        </Pressable>
    )
}

export function RectButton({ handlePress, minWidth, fontSize }: { handlePress: () => void, minWidth: number, fontSize: number }) {
    return (
        <Pressable
            onPress={handlePress}
            style={({ pressed }) => [
                {
                    opacity: pressed ? 0.5 : 1,
                },
                // the minWidth of the button
                {
                    minWidth
                },
                // the size of the button
                styles.rectButton
            ]}
        >
            <Text style={{ fontFamily: FONTS.semiBold, fontSize, color: COLORS.white, textAlign: 'center' }}>Place a bid</Text>
        </Pressable>
    )
}