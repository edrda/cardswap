<template>
  <AuthCard>
    <h1 class="text-2xl font-semibold text-center mb-2">Welcome back</h1>
    <p class="text-sm text-grayCustom text-center mb-6">
      Sign in to your account to continue trading cards.
    </p>

    <p v-if="auth.error" class="text-red-500 text-sm text-center mb-2">
      {{ auth.error }}
    </p>

    <form @submit.prevent="handleLogin" class="space-y-4">
      <FormTextInput
        id="email"
        label="Email"
        type="email"
        placeholder="Enter your email"
        v-model="email"
        autocomplete="email"
      />

      <PasswordInput
        id="password"
        label="Password"
        placeholder="Enter your password"
        v-model="password"
        autocomplete="current-password"
      />

      <!-- Remember me -->
      <div class="flex items-center justify-between">
        <label class="flex items-center gap-2 text-sm text-gray-700">
          <input
            type="checkbox"
            v-model="rememberMe"
            class="rounded border-gray-300 text-gray-900 focus:ring-gray-900 cursor-pointer"
          />
          Remember me
        </label>
      </div>

      <button
        type="submit"
        class="w-full bg-gray-900 text-white py-2 rounded-md hover:opacity-90 transition-opacity cursor-pointer"
      >
        Sign in
      </button>
    </form>

    <p class="text-sm text-center text-grayCustom mt-4">
      Don't have an account?
      <router-link
        to="/register"
        class="text-gray-900 font-medium hover:underline"
      >
        Sign up
      </router-link>
    </p>
  </AuthCard>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useAuthStore } from "../stores/auth";
import { useRouter } from "vue-router";
import AuthCard from "../components/AuthCard.vue";
import FormTextInput from "../components/FormTextInput.vue";
import PasswordInput from "../components/PasswordInput.vue";

const email = ref("");
const password = ref("");
const rememberMe = ref(false);

const auth = useAuthStore();
const router = useRouter();

// Preenche email salvo no localStorage se existir
onMounted(() => {
  const savedEmail = localStorage.getItem("rememberedEmail");
  if (savedEmail) {
    email.value = savedEmail;
    rememberMe.value = true;
  }
});

async function handleLogin() {
  await auth.login(email.value, password.value);
  if (!auth.error) {
    if (rememberMe.value) {
      localStorage.setItem("rememberedEmail", email.value);
    } else {
      localStorage.removeItem("rememberedEmail");
    }
    router.push("/");
  }
}
</script>
