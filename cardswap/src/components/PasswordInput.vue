<template>
  <div>
    <label class="block mb-1 text-sm font-medium">{{ label }}</label>
    <div class="relative">
      <input
        :type="showPassword ? 'text' : 'password'"
        :value="modelValue"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        :placeholder="placeholder"
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
</template>

<script setup lang="ts">
import { ref } from "vue";

const showPassword = ref(false);

defineProps<{
  label: string;
  placeholder?: string;
  modelValue: string;
}>();

defineEmits(["update:modelValue"]);
</script>
