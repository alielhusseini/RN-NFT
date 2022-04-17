import { View, FlatList, } from 'react-native'
import React from 'react'
import { NFTData } from '../../../constants'
import { NFTCard } from '../NFTCard'
import { HomeHeader } from '../HomeHeader'

export function NFTCardList() {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ zIndex: 0 }}>
                <FlatList
                    keyExtractor={(item) => item.id.toString()}
                    data={NFTData}
                    renderItem={({ item }) => <NFTCard {...item} />}
                    ListHeaderComponent={<HomeHeader />}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    )
}