<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-bg px-4">
    <div class="w-full max-w-md bg-whiteCustom rounded-md shadow p-8">
      <h1 class="text-2xl font-semibold text-center mb-2">Join into our community</h1>
      <p class="text-sm text-grayCustom text-center mb-6">
        Create an account and start trading cards today
      </p>

      <form @submit.prevent="handleRegister" class="space-y-4">
        <div>
          <label class="block mb-1 text-sm font-medium">Full Name</label>
          <input
            type="text"
            v-model="fullName"
            placeholder="Enter your full name"
            class="w-full border border-gray-300 rounded-sm p-2 focus:outline-none focus:ring-2 focus:ring-blackCustom"
          />
        </div>

        <div>
          <label class="block mb-1 text-sm font-medium">Email</label>
          <input
            type="email"
            v-model="email"
            placeholder="Enter your email"
            class="w-full border border-gray-300 rounded-sm p-2 focus:outline-none focus:ring-2 focus:ring-blackCustom"
          />
        </div>

        <div>
          <label class="block mb-1 text-sm font-medium">Password</label>
          <div class="relative">
            <input
              :type="showPassword ? 'text' : 'password'"
              v-model="password"
              placeholder="Create a password"
              class="w-full border border-gray-300 rounded-sm p-2 focus:outline-none focus:ring-2 focus:ring-blackCustom"
            />
            <button
              type="button"
              @click="showPassword = !showPassword"
              class="absolute right-3 top-2 text-grayCustom"
            >
              <i :class="showPassword ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'"></i>
            </button>
          </div>
        </div>

        <button
          type="submit"
          class="w-full bg-blackCustom text-white py-2 rounded-md hover:opacity-90"
        >
          Create Account
        </button>
      </form>

      <p class="text-sm text-center text-grayCustom mt-4">
        Already have an account?
        <router-link to="/login" class="text-blackCustom font-medium hover:underline">
          Sign in
        </router-link>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const fullName = ref('');
const email = ref('');
const password = ref('');
const showPassword = ref(false);

function handleRegister() {
  console.log('Register with:', fullName.value, email.value, password.value);
}
</script>
