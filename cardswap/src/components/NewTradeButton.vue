<template>
  <button
    @click="$router.push('/trades/new')"
    class="flex items-center justify-center gap-2 px-4 py-3 cursor-pointer border-2 border-gray-900 rounded-tl-[16px] rounded-tr-[16px] rounded-bl-[0px] rounded-br-[16px] font-medium text-gray-900 hover:bg-gray-100 transition-colors"
  >
    <Icon icon="mynaui:plus-solid" class="w-5 h-5" />
    New Trade
  </button>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>
