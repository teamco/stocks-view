type THistory = {
    date: string;
    price: number;
}[]

export type TStock = {
    symbol: string;
    companyName: string;
    currentPrice: number;
    formattedPrice?: string;
    percentageChange: number;
    marketStatus: string;
    historicalData: THistory;
    volume: number;
    high: number;
    low: number;
};