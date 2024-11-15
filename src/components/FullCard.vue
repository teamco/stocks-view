<script setup lang="ts">

import { TChart } from '../types/chart.type';
import { TStock } from '../types/stock.type';
import { store } from '../store/store';

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js';
import { Bar } from 'vue-chartjs';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const props = defineProps<{ stock: TStock }>()

store.chartTransform(props.stock);
const chartData: TChart = store.chart;

</script>

<template>
  <button class="back" @click="$router.push(`/stocks-view/home`)">Back to Home</button>
  <div class="card">
    <header>
      {{ stock.symbol }}
      <div :class="{ active: stock.marketStatus === 'open' }">{{ stock.marketStatus }}</div>
    </header>
    <div>{{ stock.companyName }}</div>
    <div>{{ stock.volume }}</div>
    <div class="high">
      <div>{{ stock.high }}</div>
      <div>{{ stock.low }}</div>
    </div>
    <Bar :data="chartData" />
    <footer>
      <div>
        <h3>Current Price</h3>
        {{ stock.formattedPrice }}
      </div>
      <div>
        <h3>Percentage Change</h3>
        {{ stock.percentageChange }}
      </div>
    </footer>
  </div>

  
</template>

<style scoped>
.card {
  width: auto;
  display: flex;
  row-gap: var(--margin);
  column-gap: var(--margin);
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 6px;
  background-color: #fff;
  color: #333;
  padding: 12px;
  border: 3px double #fff;
  transition: all .5s ease-in-out;

  header {
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
      font-weight: normal;
      font-size: 11px;
      text-transform: uppercase;
      color: red;
    }

    .active {
      color: green;
    }
  }

  .high {
    display: flex;
    font-weight: bold;
    column-gap: 24px;
    
    > div {
      font-weight: inherit;
      font-size: 18px;
      display: flex;
      align-items: center;
    }
    
    > div:first-child::before {
      content: "\02196";
      color: green;
      margin-right: 6px;
    }

    > div:last-child::before {
      content: "\02198";
      color: red;
      margin-right: 6px;
    }
  }

  footer {
    display: flex;
    justify-content: space-between;

    > div:first-child {
      text-align: left;
    }

    > div:last-child {
      text-align: right;
    }

    h3 {
      font-size: 11px;
      margin: 0;
      text-transform: uppercase;
    }
  }
}


.card.selected {
  width: auto;
}

.back {
    cursor: pointer;
    color: #fff;
    font-size: 16px;
    width: 200px;
    padding: 6px 12px;
    border-radius: 4px;
    background-color: #666;
    border: 1px solid #666;
    transition: background-color .5s ease-in-out;
  }

  .back:hover {
    background-color: #333;
  }
</style>
