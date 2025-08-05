<template>
  <div class="flex flex-row items-center gap-2 w-full justify-between">
    <div
      class="flex flex-row items-center w-full bg-stone-100 rounded-md shadow-sm border border-gray-200 px-3 py-2"
    >
      <Icon icon="mdi:magnify" class="w-5 h-5 text-gray-400 mr-2" />
      <input
        type="text"
        placeholder="Search trades, cards or users..."
        class="flex-1 outline-none text-gray-900 placeholder-gray-400"
      />
    </div>
    <button
      class="flex items-center gap-2 px-3 py-3 bg-stone-100 shadow-sm rounded-md hover:bg-gray-100  transition"
    >
      <Icon icon="hugeicons:filter" class="w-4 h-4 text-gray-700" />
      <span class="hidden sm:inline text-sm text-gray-700">Filter</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>
