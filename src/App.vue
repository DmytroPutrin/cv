<script setup lang="ts">
import AppAbout from './components/AppAbout.vue'
import AppExperience from './components/AppExperience.vue'
import AppFooter from './components/AppFooter.vue'
import AppHeader from './components/AppHeader.vue'
</script>

<template>
  <AppHeader />
  <main class="app-main">
    <AppAbout />
    <AppExperience />
  </main>
  <AppFooter />
</template>

<style scoped>
.app-main {
  flex: 1;
  background: var(--color-main-bg);
}
</style>
