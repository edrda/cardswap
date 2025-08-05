<template>
  <div class="mb-4">
    <label :for="id" class="block mb-1 text-sm font-medium text-gray-700">
      {{ label }}
    </label>
    <div class="relative">
      <input
        :id="id"
        :type="showPassword ? 'text' : 'password'"
        :value="modelValue"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        :placeholder="placeholder"
        :autocomplete="autocomplete"
        class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
      />
      <button
        type="button"
        @click="showPassword = !showPassword"
        class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-800 transition-colors cursor-pointer"
      >
        <Icon :icon="showPassword ? 'mdi:eye-off-outline' : 'mdi:eye-outline'" class="w-5 h-5" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Icon } from "@iconify/vue";

const showPassword = ref(false);

defineProps<{
  id?: string;
  label: string;
  placeholder?: string;
  modelValue: string;
  autocomplete?: string;
}>();

defineEmits(["update:modelValue"]);
</script>
