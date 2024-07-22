export interface Party {
    id: string,
    name: string,
    bannerImage: string,
    price: number,
    startDate: Date
    endDate?: Date,
    amountGoing: number
}