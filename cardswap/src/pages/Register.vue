<template>
  <AuthCard>
    <!-- Title -->
    <h1 class="text-2xl font-semibold text-center mb-2">Create your account</h1>
    <p class="text-sm text-grayCustom text-center mb-6">
      Join CardSwap today and start trading your favorite cards.
    </p>

    <!-- Form -->
    <form @submit.prevent="handleRegister" class="space-y-4">
      <FormTextInput
        label="Name"
        type="text"
        placeholder="Enter your name"
        v-model="name"
      />
      <FormTextInput
        label="Email"
        type="email"
        placeholder="Enter your email"
        v-model="email"
      />
      <PasswordInput
        label="Password"
        placeholder="Create a password"
        v-model="password"
      />

      <button
        type="submit"
        class="w-full bg-blackCustom text-white py-2 rounded-md hover:opacity-90 transition-opacity"
      >
        Sign up
      </button>
    </form>

    <!-- Footer -->
    <p class="text-sm text-center text-grayCustom mt-4">
      Already have an account?
      <router-link
        to="/login"
        class="text-blackCustom font-medium hover:underline"
      >
        Sign in
      </router-link>
    </p>
  </AuthCard>
</template>

<script setup lang="ts">
import { ref } from "vue";
import AuthCard from "../components/AuthCard.vue";
import FormTextInput from "../components/FormTextInput.vue";
import PasswordInput from "../components/PasswordInput.vue";

const name = ref("");
const email = ref("");
const password = ref("");

function handleRegister() {
  console.log("Register with:", name.value, email.value, password.value);
}
</script>
