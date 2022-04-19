import { View, SafeAreaView, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { DetailsInfo, FocusedStatusBar } from '../../../components/shared'
import { RectButton } from '../../shared/Button'
import { NFTData, SIZES } from '../../../constants'
import { DetailsBid } from 'components/shared'

// types
import { IData, PropType } from './types'

// styles
import { styles } from './styles'

export function Details({ route, navigation }: PropType) {

    const { id } = route.params
    const [data, setData] = useState<IData>()

    useEffect(() => {
        let nft = NFTData.find(item => item.id === id)
        setData(nft)
    }, [id])

    return (
        <SafeAreaView style={{ flex: 1 }}>

            {/* STATUS BAR */}
            <FocusedStatusBar translucent={true} backgroundColor='transparent' barStyle='dark-content' />

            {/* BIDDING BUTTON */}
            <View style={styles.biddingButtonContainer}>
                <RectButton minWidth={170} fontSize={SIZES.large} handlePress={() => { }} />
            </View>

            {/* DATA */}
            <FlatList
                keyExtractor={(item) => item.id}
                data={data?.bids}
                renderItem={({ item }) => <DetailsBid {...item} />}
                ListHeaderComponent={<DetailsInfo data={data as IData} navigation={navigation} />}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.bidsContainer}
            />

        </SafeAreaView>
    )
}