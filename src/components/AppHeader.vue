<script setup lang="ts">
import cvUrl from '../assets/dmytro_putrin_cv.pdf?url'

function downloadCv() {
  const link = document.createElement('a')
  link.href = cvUrl
  link.download = 'dmytro_putrin_cv.pdf'
  link.click()
}
</script>

<template>
  <header class="app-header">
    <q-toolbar class="app-header__toolbar">
      <q-toolbar-title class="app-header__name">
        Dmytro Putrin
      </q-toolbar-title>

      <div class="app-header__actions">
        <q-btn outline no-caps color="primary" icon="download" label="Download CV" @click="downloadCv" />
        <q-btn unelevated no-caps color="primary" icon="mail" label="Contact Me" />
      </div>
    </q-toolbar>
  </header>
</template>

<style scoped>
.app-header {
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

.app-header__toolbar {
  max-width: 1200px;
  margin: 0 auto;
  padding: 12px 16px;
}

.app-header__name {
  font-size: 1.25rem;
  font-weight: 600;
}

.app-header__actions {
  display: flex;
  gap: 8px;
}
</style>
