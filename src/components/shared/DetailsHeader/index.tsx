import { View, Text, Image, StatusBar } from 'react-native'
import React from 'react'
import { assets } from '../../../constants'
import { CircleButton } from '../Button'

// types
import { IData, PropType } from 'components/screen/Details/types'

// styles
import { styles } from './styles'

const heightStatusBar = StatusBar?.currentHeight ? StatusBar.currentHeight + 10 : 20

export function DetailsHeader({ data, navigation }: { data: IData, navigation: PropType['navigation'] }) {

    const handleNavigate = () => {
        navigation.goBack()
    }

    return (
        <View style={styles.container}>

            <Image style={styles.image} source={data && data.image} />

            <CircleButton handlePress={handleNavigate} imgUrl={assets.left} top={heightStatusBar} left={15} />

            <CircleButton handlePress={() => { }} imgUrl={assets.heart} top={heightStatusBar} right={15} />

        </View>
    )
}