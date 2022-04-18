import { View } from 'react-native'
import React from 'react'
import { NFTTitle } from './NFTTitle'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { EthPrice } from './EthPrice'
import { RectButton } from '../../../../components/shared/Button'
import { SIZES } from '../../../../constants'
import { scale } from 'react-native-size-matters'
import { SubInfo } from './SubInfo'

// types
import { StackType } from 'components/navigation/stack/types'

// styles
import { styles } from './styles'

export function NFTCardInfo({ id, title, subTitle, titleSize, subTitleSize, price }: { title: string, subTitle: string, titleSize: number, subTitleSize: number, price: number, id: string }) {

    const navigation = useNavigation<NativeStackNavigationProp<{ Details: StackType['Details'] }, 'Details'>>()

    return (
        <>
            <SubInfo />

            <View style={styles.bodyContainer}>
                <NFTTitle title={title} subTitle={subTitle} titleSize={titleSize} subTitleSize={subTitleSize} />
                <View style={styles.bodyDetailsContainer}>
                    <EthPrice price={price} />
                    <RectButton
                        minWidth={scale(120)}
                        fontSize={SIZES.font}
                        handlePress={() => navigation.navigate('Details', { id })}
                    />
                </View>
            </View>
        </>
    )
}