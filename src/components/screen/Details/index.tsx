import { View, Text, SafeAreaView, StatusBar, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FocusedStatusBar } from '../../../components/shared'
import { RectButton } from '../../shared/Button'
import { NFTData, SIZES } from '../../../constants'
import { DetailsBid, DetailsHeader } from 'components/shared'

// types
import { IData, PropType } from './types'

// styles
import { styles } from './styles'
import { SubInfo } from 'components/shared/NFTCard/NFTCardInfo/SubInfo'
import { DetailsDesc } from 'components/shared/DetailsDesc'

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
                ListHeaderComponent={
                    <>
                        <DetailsHeader data={data as IData} navigation={navigation} />
                        <SubInfo />
                        <DetailsDesc data={data as IData} />
                    </>
                }
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.bidsContainer}
            />

        </SafeAreaView>
    )
}