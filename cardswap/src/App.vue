<template>
  <div class="bg-bg min-h-screen flex flex-col">
    <Header />
    <main class="flex-1">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import Header from "./components/Header.vue";
</script>
