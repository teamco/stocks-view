import { TStock } from '../types/stock.type';
import { TChart } from '../types/chart.type';
import { stocksPrmoise } from '../api/stocks.api';
import { reactive } from 'vue';

const stocks: TStock[] = [];

let USDollar = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export const store = reactive({
  stocks,
  loading: false,
  error: null,
  chart: {} as TChart,
  
  /**
   * Simulates a fetch of data from an API. It sets the loading state to true, waits 2 seconds,
   * and then sets the loading state to false and replaces the stock data in the store with the
   * provided data, formatted with USD currency.
   * @returns {Promise<TStock[]>} - a promise that resolves to the stock data
   */
  updateStocks(): void {
    this.loading = true;

    new Promise((resolve) => {
      setTimeout(() => {         
        stocksPrmoise.then(stocks => {
          this.stocks = stocks.map((stock) => ({
            ...stock,
            formattedPrice: USDollar.format(Number(stock.currentPrice)),
          }));
        
          resolve(this.stocks);

        }).catch(error => {
          this.error = error;
        }).finally(() => {
          this.loading = false;              
        });      
      }, 2000);
    })
  },
  
  /**
   * Finds a stock by its symbol identifier.
   * @param {string} id - The symbol of the stock to find.
   * @returns {TStock | undefined} - The stock object if found, otherwise undefined.
   */
  findById(id: string): TStock | undefined {
    return this.stocks.find((stock) => stock.symbol === id);
  },
  
  /**
   * Transforms a stock object into a chart object that can be used with
   * the vue-chartjs library. The chart object is stored in the store's
   * chart property.
   * @param {TStock} stock - The stock object to transform.
   */
  chartTransform(stock: TStock): void {
    this.chart = {
      labels: stock.historicalData.map((item) => item.date),
      datasets: [
        {
          label: "Price",
          data: stock.historicalData.map((item) => item.price),
        },
      ],
    };
  },
});