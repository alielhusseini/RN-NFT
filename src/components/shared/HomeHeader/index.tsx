import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { assets, SIZES } from '../../../constants'

// styles
import { styles } from './styles'

export function HomeHeader({ onSearch }: { onSearch: (text: string) => void }) {
    return (
        <View style={styles.container}>

            {/* TOP HEADER */}
            <View style={styles.header}>
                <Image
                    source={assets.logo}
                    style={styles.logo}
                />
                <View style={styles.avatarContainer}>
                    <Image
                        source={assets.person01}
                        style={styles.avatar}
                    />
                    <Image
                        source={assets.badge}
                        style={styles.badge}
                    />
                </View>
            </View>

            {/* GREETING */}
            <View style={{ marginVertical: SIZES.font }}>
                <Text style={styles.greeting}>Hello, Ali 👋</Text>
                <Text style={styles.action}>Let's find your ART</Text>
            </View>


            {/* SEARCH */}
            <View style={{ marginTop: SIZES.font }}>
                <View style={styles.searchContainer}>
                    <Image
                        source={assets.search}
                        style={styles.search}
                    />
                    <TextInput
                        placeholder='Search NFTs'
                        style={{ flex: 1 }}
                        onChangeText={onSearch}
                    />
                </View>
            </View>

        </View>
    )
}