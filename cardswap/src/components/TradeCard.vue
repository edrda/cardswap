<template>
  <div class="bg-stone-100 border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition">
    <!-- Cabeçalho -->
    <div class="flex items-center gap-3 mb-4">
      <div class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-700">
        {{ initial }}
      </div>
      <div>
        <h3 class="font-semibold text-gray-900 flex items-center gap-2">
          <Icon icon="lucide:user-round" class="w-4 h-4" />
          {{ userName }}
        </h3>
        <p class="text-sm text-gray-500">{{ userSince }}</p>
      </div>
    </div>

    <div class="mb-4">
      <h4 class="font-semibold text-green-800 mb-1">Offering</h4>
      <div v-for="(card, index) in offering" :key="index" class="border border-gray-200 rounded-md p-2 mb-2">
        <p class="font-medium">{{ card.name }}</p>
        <span class="text-xs text-gray-500">{{ card.set }}</span>
        <span class="ml-2 text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded">{{ card.rarity }}</span>
      </div>
    </div>

    <div class="mb-4">
      <h4 class="font-semibold text-sky-800 mb-1">Looking for</h4>
      <div v-for="(card, index) in lookingFor" :key="index" class="border border-gray-200 rounded-md p-2 mb-2">
        <p class="font-medium">{{ card.name }}</p>
        <span class="text-xs text-gray-500">{{ card.set }}</span>
        <span class="ml-2 text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded">{{ card.rarity }}</span>
      </div>
    </div>

    <div class="flex justify-between items-center text-sm text-gray-500 mt-4">
      <span>{{ tradeInfo }}</span>
      <button class="px-3 py-1 bg-zinc-900 text-stone-100 rounded-md hover:bg-zinc-800 transition">
        View Trade
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';

defineProps<{
  initial?: string;
  userName?: string;
  userSince?: string;
  offering?: { name: string; set: string; rarity: string }[];
  lookingFor?: { name: string; set: string; rarity: string }[];
  tradeInfo?: string;
}>();
</script>
