import { View, FlatList, } from 'react-native'
import React, { useState, useCallback } from 'react'
import { NFTData } from '../../../constants'
import { NFTCard } from '../NFTCard'
import { HomeHeader } from '../HomeHeader'

export function NFTCardList() {

    const [nftData, setNftData] = useState(NFTData)

    const handleSearch = useCallback((val: string) => {
        if (!val.length) return setNftData(NFTData)

        const filteredData = NFTData.filter((item) => item.name.toLowerCase().includes(val.toLowerCase().trim()))
        if (filteredData.length) return setNftData(filteredData)

        return setNftData(NFTData)
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <View style={{ zIndex: 0 }}>
                <FlatList
                    keyExtractor={(item) => item.id}
                    data={nftData}
                    renderItem={({ item }) => <NFTCard {...item} />}
                    ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    )
}