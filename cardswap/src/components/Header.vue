<template>
  <header class="bg-whiteCustom shadow-sm">
    <nav class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
      <router-link to="/" class="text-xl font-semibold">
        Card<span class="text-blackCustom">Swap</span>
      </router-link>

      <div class="flex items-center gap-4">
        <router-link
          to="/"
          class="flex items-center gap-1 hover:underline"
        >
          <i class="fa-solid fa-house"></i> Home
        </router-link>
        <router-link to="/login" class="hover:underline">Login</router-link>
        <router-link
          to="/register"
          class="bg-blackCustom text-white px-3 py-1 rounded-md hover:opacity-90"
        >
          Sign Up
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
</script>
