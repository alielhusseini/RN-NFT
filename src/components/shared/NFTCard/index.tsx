import { View } from 'react-native'
import React from 'react'
import { NFTCardInfo } from './NFTCardInfo'
import { NFTCardImg } from './NFTCardImg'

//types
import { INFTCard } from './types'

// styles
import { styles } from './styles'
import { SIZES } from '../../../constants'

export function NFTCard({ id, name, creator, price, description, image, bids }: INFTCard) {

    return (
        <View style={styles.cardContainer}>
            <NFTCardImg image={image} />
            <NFTCardInfo id={id} price={price} title={name} subTitle={creator} titleSize={SIZES.large} subTitleSize={SIZES.small} />
        </View>
    )
}