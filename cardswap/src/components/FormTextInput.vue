<template>
  <div>
    <label class="block mb-1 text-sm font-medium">{{ label }}</label>
    <input
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      :placeholder="placeholder"
      class="w-full border border-gray-300 rounded-sm p-2 focus:outline-none focus:ring-2 focus:ring-blackCustom"
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
