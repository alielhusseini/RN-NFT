import { View, FlatList, } from 'react-native'
import React, { useCallback } from 'react'
import { NFTData } from '../../../constants'
import { NFTCard } from '../NFTCard'
import { HomeHeader } from '../HomeHeader'

export function NFTCardList() {

    const handleSearch = useCallback((val) => {
        console.warn(val);
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <View style={{ zIndex: 0 }}>
                <FlatList
                    keyExtractor={(item) => item.id.toString()}
                    data={NFTData}
                    renderItem={({ item }) => <NFTCard {...item} />}
                    ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    )
}