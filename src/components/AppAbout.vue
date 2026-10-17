<script setup lang="ts">
import avatarUrl from '../assets/avatar.jpg'
</script>

<template>
  <section class="app-about">
    <div class="app-about__intro">
      <q-avatar size="96px">
        <img :src="avatarUrl" alt="Dmytro Putrin">
      </q-avatar>
      <h1 class="app-about__title">Hi, I'm Dmytro Putrin</h1>
    </div>

    <p class="app-about__text">
      I’m a frontend developer with 8 years of experience turning ideas into fast, user-friendly web applications.
      I’ve worked extensively with Vue and Angular and enjoy writing clean, scalable code as part of a collaborative team.
    </p>
  </section>
</template>

<style scoped>
.app-about {
  max-width: 800px;
  margin: 0 auto;
  padding: 32px 16px;
}

.app-about__intro {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 24px;
}

.app-about__title {
  margin: 0;
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.2;
}

.app-about__text {
  margin: 0;
  font-size: 1.125rem;
  line-height: 1.6;
}
</style>
