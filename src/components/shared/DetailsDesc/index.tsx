import { View, Text } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { SIZES } from '../../../constants'
import { EthPrice } from '../NFTCard/NFTCardInfo/EthPrice'
import { NFTTitle } from '../NFTCard/NFTCardInfo/NFTTitle'

// types
import { IData } from 'components/screen/Details/types'

// styles
import { styles } from './styles'

export function DetailsDesc({ data }: { data: IData }) {

    const [text, setText] = useState<string>(data?.description.slice(0, 100))
    const [readMore, setReadMore] = useState<boolean>(false)

    const togglePress = () => {
        setReadMore(prev => !prev)
        if (!readMore) return setText(data?.description)
        return setText(data?.description.slice(0, 100))
    }

    useEffect(() => {
        setText(data?.description.slice(0, 100))
    }, [data])

    return (
        <View style={{ padding: SIZES.font }}>

            {/* HEADER */}
            <View style={styles.infoContainer}>
                <NFTTitle title={data?.name} subTitle={data?.creator} titleSize={SIZES.extraLarge} subTitleSize={SIZES.font} />
                <EthPrice price={data?.price} />
            </View>

            {/* DESCRIPTION */}
            <View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
                <Text style={styles.descTitle}>Description</Text>
                <View style={{ marginTop: SIZES.base }}>
                    <Text style={styles.descText}>
                        {text}{!readMore && '...'}
                        <Text onPress={togglePress} style={styles.readMore}>{readMore ? ' Show Less' : 'Read More'}</Text>
                    </Text>
                </View>
            </View>

            {/* BIDS */}
            {data?.bids && data?.bids.length > 0 && (
                <Text style={styles.bidsTitls}>Current Bids</Text>
            )}

        </View>
    )
}