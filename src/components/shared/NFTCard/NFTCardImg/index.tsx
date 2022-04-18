import { View, Image, ImageSourcePropType } from 'react-native'
import React from 'react'
import { assets } from '../../../../constants'
import { CircleButton } from '../../Button'

// styles
import { styles } from './styles'

export function NFTCardImg({ image }: { image: ImageSourcePropType }) {
    return (
        <View style={styles.card}>
            <Image
                source={image}
                style={styles.image}
            />
            <CircleButton handlePress={() => console.warn('Liked')} imgUrl={assets.heart} right={10} top={10} />
        </View>
    )
}