<script setup lang="ts">

import { Router } from 'vue-router';
import { TStock } from '../types/stock.type';

defineProps<{ stock: TStock }>()

/**
 * Navigate to the stock's detail view.
 *
 * @param {Router} router
 * The router instance.
 *
 * @param {TStock} stock
 * The stock to navigate to.
 */
function navigateTo(router: Router, stock: TStock) {
  router.push(`/stocks-view/stocks/${stock.symbol}`);
}

</script>

<template>
  <div class="card" @click="navigateTo($router, stock)">
    <header>
      {{ stock.symbol }}
      <div :class="{ active: stock.marketStatus === 'open' }">{{ stock.marketStatus }}</div>
    </header>
    <div>
      {{ stock.companyName }}
    </div>
    <footer>
      <div>
        <h3>Price</h3>
        {{ stock.formattedPrice }}
      </div>
      <div>
        <h3>% Change</h3>
        {{ stock.percentageChange }}
      </div>
    </footer>
  </div>

  
</template>

<style scoped>
.card {
  width: 100%;
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

.card:hover {
  border-color: #333;
  box-shadow: 0px 0px 10px 0px rgba(255,255,255,0.75);
}

.card.selected {
  width: auto;
  border-color: #fff !important;
  box-shadow: none !important;
}

</style>
