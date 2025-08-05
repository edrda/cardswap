<template>
  <div class="bg-gray-100 min-h-screen flex flex-col">
    <Header />
    <main class="flex-1 pt-16">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useAuthStore } from './stores/auth';
import axios from 'axios';
import Header from './components/Header.vue';

const auth = useAuthStore();

onMounted(() => {
  if (auth.token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${auth.token}`;
    auth.fetchUser();
  }
});
</script>
