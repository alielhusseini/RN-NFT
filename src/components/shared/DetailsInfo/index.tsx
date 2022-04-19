import { View, Text } from 'react-native'
import React from 'react'
import { DetailsHeader } from '../DetailsHeader'
import { SubInfo } from '../NFTCard/NFTCardInfo/SubInfo'
import { DetailsDesc } from '../DetailsDesc'

// types
import { IData, PropType } from 'components/screen/Details/types'

export function DetailsInfo({ data, navigation }: { data: IData, navigation: PropType['navigation'] }) {
    return (
        <>
            {/* HEADER : IMAGE */}
            <DetailsHeader data={data} navigation={navigation} />

            {/* SUB INFO */}
            <SubInfo />

            {/* DESCRIPTION */}
            <DetailsDesc data={data} />
        </>
    )
}