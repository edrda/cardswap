<template>
  <header class="fixed top-0 inset-x-0 bg-gray-50/80 shadow-sm z-50 backdrop-blur-sm">
    <nav class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
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
            ? 'bg-gray-900 text-white' 
            : 'hover:bg-gray-200 text-gray-700'
        ]"
      >
        <Icon 
          icon="gravity-ui:house" 
          :class="['w-5 h-5', route.path === '/' ? 'text-white' : 'text-gray-700']" 
        />
        <span class="font-medium">Home</span>
      </router-link>

      <div class="flex items-center gap-6">
        <template v-if="auth.user">
          <span class="text-gray-800 font-medium">
            Hi, {{ auth.user.name }}
          </span>
          <button
            @click="handleLogout"
            class="px-4 py-1.5 rounded-md bg-gray-900 text-white hover:bg-gray-700 transition-colors cursor-pointer"
          >
            Logout
          </button>
        </template>

        <template v-else>
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
              'bg-gray-900 text-white hover:bg-gray-700'
            ]"
          >
            Sign Up
          </router-link>
        </template>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { Icon } from "@iconify/vue";
import { useAuthStore } from "../stores/auth";

const route = useRoute();
const router = useRouter();
const auth = useAuthStore();

function handleLogout() {
  auth.logout();
  router.push("/");
}
</script>
