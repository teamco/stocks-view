<script setup lang="ts">
import { watchEffect } from 'vue'
import { store } from './store/store';

watchEffect(() => {
  store.updateStocks();
});

</script>

<template>
  <div v-if="store.loading" class="loading">Loading...</div>
  <div v-else="store.loading" class="wrapper">
    <router-view />
  </div>
  <div v-if="store.error" class="error">{{ store.error }}</div>
</template>

<style scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
  }
</style>
