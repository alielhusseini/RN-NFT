import { ScaledSheet } from 'react-native-size-matters';
import { SIZES, COLORS, FONTS } from '../../../constants';

export const styles = ScaledSheet.create({
    container: { width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: SIZES.base, paddingHorizontal: SIZES.base * 2 },
    avatar: { width: '48@s', height: '48@s' },
    name: { fontFamily: FONTS.semiBold, fontSize: SIZES.small, color: COLORS.primary },
    date: { fontFamily: FONTS.regular, fontSize: SIZES.small - 2, color: COLORS.secondary, marginTop: '3@s' },
})