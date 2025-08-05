<template>
  <section class="max-w-6xl mx-auto px-4 py-12">
    <!-- Título e descrição -->
    <div class="text-center mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-2">
        Trading Card Marketplace
      </h1>
      <p class="text-gray-600 max-w-2xl mx-auto">
        Discover amazing card trades from our community. Find the cards you need and offer the cards you have.
      </p>
    </div>

    <!-- Barra de busca -->
    <SearchBar class="mb-10" />

    <!-- Lista de trocas -->
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <TradeCard />
      <TradeCard />
      <TradeCard />
    </div>
  </section>
</template>

<script setup lang="ts">
import SearchBar from "../components/SearchBar.vue";
import TradeCard from "../components/TradeCard.vue";
</script>
