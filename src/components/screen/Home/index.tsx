import React from 'react'
import { SafeAreaView } from 'react-native'
import { COLORS } from '../../../constants'
import { Background, FocusedStatusBar, NFTCardList } from 'components/shared'

export function Home() {

    return (
        <SafeAreaView style={{ flex: 1 }}>

            {/* STATUS BAR */}
            <FocusedStatusBar translucent={false} backgroundColor={COLORS.primary} barStyle='light-content' />

            {/* NFT CARD */}
            <NFTCardList />

            {/* BACKGROUND */}
            <Background />

        </SafeAreaView>
    )
}