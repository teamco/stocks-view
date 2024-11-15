<script setup lang="ts">
  import { useRoute } from "vue-router";
  import { TStock } from "../types/stock.type";
  import { store } from '../store/store';
  import FullCard from '../components/FullCard.vue';

  const route = useRoute();
  const id = route.params.id;

  const stock: TStock | undefined = store.findById(id as string);
</script>

<template>
  <div class="stock">
    <FullCard v-if="stock" :stock="stock" />
    <div v-else>Stock not found</div>
  </div>
</template>

<style scoped>
  .stock {
    margin: var(--margin);
    display: flex;
    flex-direction: column;
    row-gap: var(--margin);
  }
</style>
