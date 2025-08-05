<template>
  <div class="bg-gray-100 min-h-screen flex flex-col">
    <Header />
    <main class="flex-1 pt-16">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import Header from "./components/Header.vue";
</script>
