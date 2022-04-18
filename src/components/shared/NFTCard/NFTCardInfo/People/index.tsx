import { View, ImageSourcePropType } from 'react-native'
import React from 'react'
import { assets } from '../../../../../constants'
import { AvatarCmp } from '../AvatarCmp'

export function People() {
    return (
        <View style={{ flexDirection: 'row' }}>
            {[assets.person02, assets.person03, assets.person04].map((imgUrl: ImageSourcePropType, index: number) => <AvatarCmp index={index} imgUrl={imgUrl} key={`People-${index}`} />)}
        </View>
    )
}