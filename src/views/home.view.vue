<script setup lang="ts">

  import { ref } from 'vue';
  import { store } from '../store/store';
  import Card from '../components/Card.vue';
  import { TStock } from '../types/stock.type';

  const LIMIT = ref(3);
  const input = ref('');

  /**
   * Filters the list of stocks based on the input value
   * @param {number} limit - the number of items to return
   * @returns {TStock[]} the filtered list of stocks
   */
  function filteredList(limit: number): TStock[] {
    if (!input.value) return store.stocks.slice(0, limit);
    return store.stocks.filter((stock) =>
      stock.companyName.toLowerCase().includes(input.value.toLowerCase())
    );
  }

  /**
   * Sets the LIMIT to the total number of stocks in the store
   * and clears the input field
   */
  function handleAll() {
    LIMIT.value = store.stocks.length;
    input.value = '';
  }

</script>

<template>
  <!-- <table class="table">
    <tr>
      <th>Volume</th>
      <th>High</th>
      <th>Low</th>
    </tr>
    <tr v-for="stock in store.stocks" :key="stock.symbol">
      <td>{{ stock.volume }}</td>
      <td>{{ stock.high }}</td>
      <td>{{ stock.low }}</td>
    </tr>
  </table> -->

  <div class="home">
    <div class="search-bar">
      <input type="search" placeholder="Search..." v-model="input"/>
    </div>

    <div class="tiles">
      <div v-for="stock in filteredList(LIMIT)" :key="stock.symbol">
        <Card :stock="stock" />
      </div>
      <div v-if="input && !filteredList(LIMIT).length">
        <p>No results found!</p>
      </div>
    </div>

    <button v-if="store.stocks.length > LIMIT" class="show-all"           
            v-on:click="handleAll">
        Show all
    </button>

  </div>
  
</template>

<style scoped>

  .home {
    margin: var(--margin);
    display: flex;
    flex-direction: column;
    row-gap: var(--margin);
  }

  .search-bar {
    display: flex;
    flex-direction: row;
    column-gap: var(--margin);

    input {
      height: 42px;
      width: 200px;
      transition: width .5s ease-in-out;
      border: 1px solid #666;
      background-color: #dedede;
      border-radius: 4px;
      padding: 6px 12px;
      color: #333;
    }

    input:focus {
      width: 300px;
    }

  }

  .tiles {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: var(--margin);

    > div {
      display: flex;
      transition: box-shadow .5s ease-in-out;
      cursor: pointer;
      width: 100%;
    }
  }

  .show-all {
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

  .show-all:hover {
    background-color: #333;
  }

  .hidden {
    display: none;
  }

</style>
