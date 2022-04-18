import { COLORS, FONTS, SIZES } from '../../../constants'
import { ScaledSheet } from 'react-native-size-matters'

export const styles = ScaledSheet.create({
    container: {
        backgroundColor: COLORS.primary,
        padding: SIZES.font,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo: {
        width: '90@s',
        height: '25@s',
        resizeMode: 'contain',
    },
    avatarContainer: {
        width: '45@s',
        height: '45@s',
    },
    avatar: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    badge: {
        position: 'absolute',
        width: '15@s',
        height: '15@s',
        bottom: 0,
        right: 0,
    },
    greeting: {
        fontSize: SIZES.small,
        fontFamily: FONTS.regular,
        color: COLORS.white,
    },
    action: {
        fontSize: SIZES.large,
        fontFamily: FONTS.bold,
        color: COLORS.white,
        marginTop: SIZES.base / 2,
    },
    searchContainer: {
        width: '100%',
        borderRadius: SIZES.font,
        backgroundColor: COLORS.gray,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.small - 2,
    },
    search: {
        resizeMode: 'contain',
        width: '20@s',
        height: '20@s',
        marginRight: SIZES.base,
    },
})