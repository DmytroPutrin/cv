<script setup lang="ts">
import { mdiEmailOutline, mdiGithub, mdiLinkedin } from '@quasar/extras/mdi-v7'

const links = [
  { label: 'LinkedIn', icon: mdiLinkedin, href: 'https://www.linkedin.com/in/dmytro-putrin-405b8b117', external: true },
  { label: 'Email', icon: mdiEmailOutline, href: 'mailto:moncodp@gmail.com', external: false },
  { label: 'GitHub', icon: mdiGithub, href: 'https://github.com/DmytroPutrin', external: true },
]
</script>

<template>
  <footer id="contacts" class="app-footer">
    <h2 class="app-footer__title">Let's connect</h2>
    <p class="app-footer__subtitle">Get in touch for opportunities or just to say hi! 👋</p>

    <div class="app-footer__links">
      <q-btn
        v-for="link in links"
        :key="link.label"
        round
        flat
        size="lg"
        color="primary"
        :icon="link.icon"
        :href="link.href"
        :target="link.external ? '_blank' : undefined"
        :rel="link.external ? 'noopener noreferrer' : undefined"
        :aria-label="link.label"
      />
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  margin-top: auto;
  padding: 32px 16px;
  background: var(--color-footer-bg);
  border-top: 1px solid var(--color-border);
  text-align: center;
}

.app-footer__title {
  margin: 0 0 8px;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.3;
}

.app-footer__subtitle {
  margin: 0 0 16px;
  opacity: 0.7;
}

.app-footer__links {
  display: flex;
  justify-content: center;
  gap: 8px;
}
</style>
