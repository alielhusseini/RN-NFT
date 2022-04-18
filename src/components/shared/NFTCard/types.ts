import { ImageSourcePropType } from "react-native"

export interface INFTCard {
    id: string, name: string, creator: string, price: number, description: string, image: ImageSourcePropType, bids?: IBid[]
}

interface IBid {
    id: string, name: string, price: number, image: any, date: string
}