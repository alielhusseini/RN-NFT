import { View, Text } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../../../../../constants'

export function NFTTitle({ title, subTitle, titleSize, subTitleSize }: { title: string, subTitle: string, titleSize: number, subTitleSize: number }) {
    return (
        <View>
            <Text style={{ fontFamily: FONTS.semiBold, fontSize: titleSize, color: COLORS.primary }}>{title}</Text>
            <Text style={{ fontFamily: FONTS.regular, fontSize: subTitleSize, color: COLORS.primary }}>{subTitle}</Text>
        </View>
    )
}