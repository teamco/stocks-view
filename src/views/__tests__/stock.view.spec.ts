// StockView.spec.ts
import '@testing-library/jest-dom';
import { render } from '@testing-library/vue';
import { vi } from 'vitest'

import StockView from '../stock.view.vue';
import { store } from '../../store/store';
import { TStock } from '../../types/stock.type';
import { useRoute } from 'vue-router';

const _useRoute: any = useRoute;

vi.mock('vue-router', () => ({
   useRoute: vi.fn()
}));

describe('StockView', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders stock details', async () => {
    const stock: TStock = {
      symbol: 'AAPL',
      companyName: 'Apple Inc.',
      currentPrice: 175.64,
      percentageChange: -0.42,
      marketStatus: 'open',
      historicalData: [
        { date: '2024-08-20', price: 173.15 },
        { date: '2024-08-21', price: 174.5 },
        { date: '2024-08-22', price: 176.05 },
        { date: '2024-08-23', price: 175.9 },
        { date: '2024-08-24', price: 175.64 },
      ],
      volume: 98800000,
      high: 176.9,
      low: 173.15,
    };

    store.stocks = [stock];

    _useRoute.mockImplementation(() => ({ params: { id: stock.symbol }}));

    const { getByText } = render(StockView);

    setTimeout(() => {      
       expect(getByText(stock.companyName)).toBeInTheDocument();
       expect(getByText(stock.symbol)).toBeInTheDocument();
       expect(getByText(stock.currentPrice.toString())).toBeInTheDocument();
       expect(getByText(stock.percentageChange.toString())).toBeInTheDocument();
       expect(getByText(stock.marketStatus)).toBeInTheDocument();
    }, store.loadingTimeout);
  });

  it('renders historical data chart', async () => {
    const stock: TStock = {
      symbol: 'AAPL',
      companyName: 'Apple Inc.',
      currentPrice: 175.64,
      percentageChange: -0.42,
      marketStatus: 'open',
      historicalData: [
        { date: '2024-08-20', price: 173.15 },
        { date: '2024-08-21', price: 174.5 },
        { date: '2024-08-22', price: 176.05 },
        { date: '2024-08-23', price: 175.9 },
        { date: '2024-08-24', price: 175.64 },
      ],
      volume: 98800000,
      high: 176.9,
      low: 173.15,
    };

    store.stocks = [stock];

    _useRoute.mockImplementation(() => ({ params: { id: stock.symbol }}));

    const { getByText } = render(StockView);

    setTimeout(() => {      
        expect(getByText('Historical Data')).toBeInTheDocument();
    }, store.loadingTimeout);
  });
});