import mockData from '../assets/mockData';
import { TStock } from '../types/stock.type';

export const stocksPromise: Promise<TStock[]> = new Promise((resolve) => resolve(mockData.stocks));