<template>
  <AuthCard>
    <h1 class="text-2xl font-semibold text-center mb-2">Create your account</h1>
    <p class="text-sm text-gray-500 text-center mb-6">
      Join CardSwap today and start trading your favorite cards.
    </p>

    <!-- Erro geral -->
    <p v-if="formError || auth.error" class="text-red-500 text-sm text-center mb-2">
      {{ formError || auth.error }}
    </p>

    <form @submit.prevent="handleRegister" class="space-y-4">
      <FormTextInput
        label="Name"
        type="text"
        placeholder="Enter your name"
        v-model="name"
        @input="clearErrors"
      />
      <FormTextInput
        label="Email"
        type="email"
        placeholder="Enter your email"
        v-model="email"
        @input="clearErrors"
      />
      <PasswordInput
        label="Password"
        placeholder="Create a password"
        v-model="password"
        @input="clearErrors"
      />

      <button
        type="submit"
        class="w-full bg-gray-900 text-white py-2 rounded-md hover:opacity-90 transition-opacity disabled:opacity-60 cursor-pointer"
        :disabled="auth.loading"
      >
        {{ auth.loading ? "Signing up..." : "Sign up" }}
      </button>
    </form>

    <p class="text-sm text-center text-gray-500 mt-4">
      Already have an account?
      <router-link
        to="/login"
        class="text-gray-900 font-medium hover:underline"
      >
        Sign in
      </router-link>
    </p>
  </AuthCard>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAuthStore } from "../stores/auth";
import { useRouter } from "vue-router";
import AuthCard from "../components/AuthCard.vue";
import FormTextInput from "../components/FormTextInput.vue";
import PasswordInput from "../components/PasswordInput.vue";

const name = ref("");
const email = ref("");
const password = ref("");
const formError = ref<string | null>(null);

const auth = useAuthStore();
const router = useRouter();

function clearErrors() {
  formError.value = null;
  auth.error = null;
}

async function handleRegister() {
  if (!name.value || !email.value || !password.value) {
    formError.value = "Please fill in all fields.";
    return;
  }

  await auth.register(name.value, email.value, password.value);
  if (!auth.error) {
    router.push("/");
  }
}
</script>
