import { View, Text, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { assets } from '../../../constants'
import { CircleButton, RectButton } from '../Button'

//types
import { StackType } from 'components/navigation/stack/types'
import { INFTCard } from './types'

// styles
import { styles } from './styles'

export function NFTCard({ id, name, creator, price, description, image, bids }: INFTCard) {

    const navigation = useNavigation<NativeStackNavigationProp<{ Details: StackType['Details'] }, 'Details'>>()

    return (
        <View style={styles.cardContainer}>
            <View style={styles.card}>
                <Image
                    source={image}
                    style={styles.image}
                />
                <CircleButton handlePress={() => console.warn('Liked')} imgUrl={assets.heart} right={10} top={10} />
            </View>
        </View>
    )
}