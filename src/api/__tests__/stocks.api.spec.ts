import { stocksPromise } from '../stocks.api';
import { TStock } from '../../types/stock.type';

describe('stocksPromise', () => {
  it('resolves with an array of TStock objects', async () => {
    const stocks: TStock[] = await stocksPromise;
    expect(stocks).toBeInstanceOf(Array);
    expect(stocks).toHaveLength(8); // assuming 10 stocks in the mock data
    expect(stocks[0]).toBeInstanceOf(Object);
    expect(stocks[0]).toHaveProperty('symbol');
    expect(stocks[0]).toHaveProperty('companyName');
    expect(stocks[0]).toHaveProperty('currentPrice');
    expect(stocks[0]).toHaveProperty('percentageChange');
    expect(stocks[0]).toHaveProperty('marketStatus');
    expect(stocks[0]).toHaveProperty('historicalData');
    expect(stocks[0]).toHaveProperty('volume');
    expect(stocks[0]).toHaveProperty('high');
    expect(stocks[0]).toHaveProperty('low');
  });
});