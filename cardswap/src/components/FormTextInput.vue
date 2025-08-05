<template>
  <div class="mb-4">
    <label class="block mb-1 text-sm font-medium text-gray-700">{{ label }}</label>
    <input
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      :placeholder="placeholder"
      class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blackCustom focus:border-transparent"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
  type?: string;
  placeholder?: string;
  modelValue: string;
}>();

defineEmits(["update:modelValue"]);
</script>
