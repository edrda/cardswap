<template>
  <AuthCard>
    <h1 class="text-2xl font-semibold text-center mb-2">Welcome back</h1>
    <p class="text-sm text-grayCustom text-center mb-6">
      Sign in to your account to continue trading cards
    </p>

    <form @submit.prevent="handleLogin" class="space-y-4">
      <FormTextInput
        label="Email"
        type="email"
        placeholder="Enter your email"
        v-model="email"
      />
      <PasswordInput
        label="Password"
        placeholder="Enter your password"
        v-model="password"
      />

      <button
        type="submit"
        class="w-full bg-blackCustom text-white py-2 rounded-md hover:opacity-90"
      >
        Sign in
      </button>
    </form>

    <p class="text-sm text-center text-grayCustom mt-4">
      Don't have an account?
      <router-link to="/register" class="text-blackCustom font-medium hover:underline">
        Sign up
      </router-link>
    </p>
  </AuthCard>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AuthCard from '../components/AuthCard.vue';
import FormTextInput from '../components/FormTextInput.vue';
import PasswordInput from '../components/PasswordInput.vue';

const email = ref('');
const password = ref('');

function handleLogin() {
  console.log('Login with:', email.value, password.value);
}
</script>
