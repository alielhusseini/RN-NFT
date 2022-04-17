import { Pressable, Image, ImageSourcePropType } from 'react-native'
import React from 'react'

// styles
import { styles } from './styles'

export function CircleButton({ imgUrl, handlePress, right, top }: { imgUrl: ImageSourcePropType, right: number, top: number, handlePress: () => void }) {
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

export function RectButton({ imgUrl, handlePress, right, top }: { imgUrl: ImageSourcePropType, right: number, top: number, handlePress: () => void }) {
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