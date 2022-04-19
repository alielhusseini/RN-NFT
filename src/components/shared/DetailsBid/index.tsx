import { View, Text, Image } from 'react-native'
import React from 'react'
import { EthPrice } from '../NFTCard/NFTCardInfo/EthPrice'

// types
import { IBid } from '../../screen/Details/types'

// styles
import { styles } from './styles'

export function DetailsBid({ id, name, price, image, date }: IBid) {
    return (
        <View style={styles.container}>

            {/* AVATAR */}
            <Image
                source={image}
                style={styles.avatar}
            />

            {/* BIDDING INFO */}
            <View>
                <Text style={styles.name}>Bid placed by {name}</Text>
                <Text style={styles.date}>{date}</Text>
            </View>

            {/* PRICE */}
            <EthPrice price={price} />
        </View>
    )
}