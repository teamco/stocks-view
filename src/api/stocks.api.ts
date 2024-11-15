import mockData from '../assets/mockData';
import { TStock } from '../types/stock.type';

export const stocksPrmoise: Promise<TStock[]> = new Promise((resolve) => resolve(mockData.stocks));