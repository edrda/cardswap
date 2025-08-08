<template>
  <section class="page max-w-6xl mx-auto px-4 py-12">
    <div class="text-center mb-8">
      <h1 class="text-2xl font-bold text-gray-900 mb-2">Dashboard</h1>
      <p>Welcome to your dashboard, here you will see your cards and trades.</p>
    </div>

    <div class="flex justify-center mb-6">
      <NewTradeButton />
    </div>
    
    
  </section>
</template>

<script setup lang="ts">
  import NewTradeButton from "../components/NewTradeButton.vue";
// Aqui vamos puxar dados do usuário depois
</script>

<style scoped>
.page {
  padding: 2rem;
}
</style>
