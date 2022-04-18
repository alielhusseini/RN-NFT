import { View, Text } from 'react-native'
import React from 'react'
import { People } from './People'
import { EndDate } from './EndDate'
import { NFTTitle } from './NFTTitle'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { EthPrice } from './EthPrice'
import { RectButton } from '../../../../components/shared/Button'
import { SIZES } from '../../../../constants'
import { scale } from 'react-native-size-matters'

// types
import { StackType } from 'components/navigation/stack/types'

// styles
import { styles } from './styles'

export function NFTCardInfo({ id, title, subTitle, titleSize, subTitleSize, price }: { title: string, subTitle: string, titleSize: number, subTitleSize: number, price: number, id: string }) {

    const navigation = useNavigation<NativeStackNavigationProp<{ Details: StackType['Details'] }, 'Details'>>()

    return (
        <>
            <View style={styles.headerContainer}>
                <People />
                <EndDate />
            </View>

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