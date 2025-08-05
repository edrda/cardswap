<template>
  <header class="bg-whiteCustom shadow-sm">
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

      <!-- Home -->
      <router-link
        to="/"
        :class="[
          'flex items-center gap-2 px-3 py-1.5 rounded-md transition-colors',
          isActive('/')
            ? 'bg-blackCustom text-white'
            : 'text-grayCustom hover:text-blackCustom'
        ]"
      >
        <Icon icon="gravity-ui:house" class="w-5 h-5" />
        <span class="font-medium">Home</span>
      </router-link>

      <!-- Menu Right -->
      <div class="flex items-center gap-6">
        <!-- Login -->
        <router-link
          to="/login"
          :class="[
            'transition-colors',
            isActive('/login')
              ? 'text-blackCustom font-medium'
              : 'text-grayCustom hover:text-blackCustom'
          ]"
        >
          Login
        </router-link>

        <!-- Sign Up -->
        <router-link
  to="/register"
  :class="[
    'px-4 py-1.5 rounded-md transition-opacity',
    isActive('/register')
      ? '!bg-blackCustom !text-white'
      : '!bg-blackCustom !text-white hover:opacity-90'
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
const isActive = (path: string) => route.path === path;
</script>
