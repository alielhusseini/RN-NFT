import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type StackParamListType = {
    Details: { id: string };
};

export type PropType = NativeStackScreenProps<StackParamListType, 'Details'>;

import { ImageSourcePropType } from "react-native"

export interface IData {
    id: string, name: string, creator: string, price: number, description: string, image: ImageSourcePropType, bids?: IBid[]
}

export interface IBid {
    id: string, name: string, price: number, image: ImageSourcePropType, date: string
}