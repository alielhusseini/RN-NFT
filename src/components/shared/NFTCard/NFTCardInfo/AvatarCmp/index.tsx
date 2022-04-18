import { Image, ImageSourcePropType } from 'react-native'
import React from 'react'
import { scale } from 'react-native-size-matters'

export function AvatarCmp({ imgUrl, index }: { imgUrl: ImageSourcePropType, index: number }) {
    return (
        <Image
            source={imgUrl}
            resizeMode='contain'
            style={{ width: scale(48), height: scale(48), marginLeft: index === 0 ? 0 : -14 }}
        />
    )
}