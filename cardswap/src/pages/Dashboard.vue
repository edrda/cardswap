<template>
  <section class="page">
    <h1>Dashboard</h1>
    <p>Bem-vindo ao seu painel, aqui você verá suas cartas e trocas.</p>
    <router-link to="/trades/new">Criar nova troca</router-link>
  </section>
</template>

<script setup lang="ts">
// Aqui vamos puxar dados do usuário depois
</script>

<style scoped>
.page {
  padding: 2rem;
}
</style>
