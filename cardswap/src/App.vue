<template>
  <div>
    <nav class="navbar">
      <router-link to="/" class="logo">CardSwap</router-link>
      <ul class="nav-links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/login">Login</router-link></li>
        <li>
          <router-link to="/register" class="btn">Sign Up</router-link>
        </li>
      </ul>
    </nav>

    <main class="container">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
// No logic for now
</script>

<style scoped>
.logo {
  font-size: 1.4rem;
  font-weight: 600;
}

.nav-links li {
  list-style: none;
}
</style>
