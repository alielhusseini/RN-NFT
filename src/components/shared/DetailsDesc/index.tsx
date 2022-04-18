import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { SIZES } from '../../../constants'
import { EthPrice } from '../NFTCard/NFTCardInfo/EthPrice'
import { NFTTitle } from '../NFTCard/NFTCardInfo/NFTTitle'

// types
import { IData } from 'components/screen/Details/types'

// styles
import { styles } from './styles'

export function DetailsDesc({ data }: { data: IData }) {
    return (
        <View style={{ padding: SIZES.font }}>
            <View style={styles.infoContainer}>
                <NFTTitle title={data?.name} subTitle={data?.creator} titleSize={SIZES.extraLarge} subTitleSize={SIZES.font} />
                <EthPrice price={data?.price} />
            </View>
            <View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
                <Text style={styles.descTitle}>Description</Text>
            </View>
        </View>
    )
}