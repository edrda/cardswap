<template>
  <header class="fixed top-0 inset-x-0 bg-gray-50/80 shadow-sm z-50 backdrop-blur-sm">
    <nav class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
      <!-- Logo -->
      <router-link to="/" class="flex items-center gap-2">
        <img
          src="/src/images/LOGO.svg"
          alt="CardSwap Logo"
          class="object-contain"
          width="209"
          height="54"
        />
      </router-link>

      <router-link
        to="/"
        :class="[
          'flex items-center gap-2 px-3 py-1.5 rounded-md transition-colors',
          route.path === '/' 
            ? 'bg-gray-900 text-stone-100' 
            : 'hover:bg-gray-200 text-gray-700'
        ]"
      >
        <Icon 
          icon="gravity-ui:house" 
          :class="['w-5 h-5', route.path === '/' ? 'text-stone-100' : 'text-gray-700']" 
        />
        <span class="font-medium">Home</span>
      </router-link>

      <div class="flex items-center gap-6">
        <router-link
          to="/login"
          :class="[
            'transition-colors px-4 py-1.5 rounded-md',
            route.path === '/login'
              ? 'text-gray-900 font-medium'
              : 'text-gray-900 hover:bg-gray-200'
          ]"
        >
          Login
        </router-link>

        <router-link
          to="/register"
          :class="[
            'px-4 py-1.5 rounded-md transition-colors',
            route.path !== '/register'
              ? 'bg-gray-900 text-stone-100 hover:bg-gray-700'
              : 'bg-gray-900 text-stone-100 hover:bg-gray-700'
          ]"
        >
          Sign Up
        </router-link>

      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { Icon } from "@iconify/vue";

const route = useRoute();
</script>
