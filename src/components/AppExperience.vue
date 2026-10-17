<script setup lang="ts">
interface HistoryItem {
  title: string
  subtitle: string
  company: string
  body: string
}

const history: HistoryItem[] = [
  {
    title: 'Senior FE Developer at Skilld',
    subtitle: 'November 2023 – Present',
    company: 'Skilld',
    body: `<div>CRM system for pharmaceutical companies. Front-end was written on Vue 2 (we migrated to next version),
      Vuex (migrated to Pinia). My responsibility here are migration and developing new features, mentoring Juniors.</div>`,
  },
  {
    title: 'Senior FE Developer',
    subtitle: 'November 2022 — November 2023',
    company: 'Textmagic',
    body: `<div>Tickets managment system written on front-end side, using Inversify, Vue 3 and Typescript. Was responsable for feature (tickets itself).</div>`
  },
  {
    title: 'Senior FE Developer',
    subtitle: 'July 2022 — November 2022',
    company: 'Onereach.io',
    body: `<div> Project that allow customers provide chat bots in their web sites. Was written on Vue 2 and Vuex. I implemented features (custom elements, widgets, etc).</div>`,
  },
  {
    title: 'Frontend-Developer/Senior FE Developer',
    subtitle: 'April 2019 — July 2022',
    company: 'SoftServe',
    body: `<div>Work as FE dev on several projects and clients. It was like huge enterprise level
      application for consulting and medical companies and small few-month duration
      projects with small team. With different frameworks and technologies (Angulat, React,Vue).</div>
      <div> - Series of projects for Deloitte. Stack - Angular, NgRx, agGrid. Implement features, 
      maitaining dashboards, guards and shared components.</div>
      <div> - Medical project for Henry Schein. Stack - Vue2, Vuex, Vutify. Implement dental chart with svg, custom text editor, common stuff like forms, routing, shared components, etc.
      Was a mentor for trainee.</div>
      <div> - Nova (https://github.com/solarwinds/nova). Angular framework with open code. Working on improving accessibility and docs.</div>
      <div> - Project for SolarWinds. Stack - React and Semantic UI, Jest. Common stuff as fe dev: components, features, testing. Documenting shared components, using Storybook.</div>
      <div> - Project for Dyson. Stack - Vue3 + Vuex. Implement project from the scratch to end.</div>
      <div> - Project for Eventus. Angular + NgRx (partially, trying to avoid it on project). Dashboards, features, forms, creating custom components, etc.</div>
      `,
  },
  {
    title: 'Frontend Developer',
    subtitle: 'April 2018 — April 2019',
    company: 'Source Angel',
    body: `<div>Work as front-end developer on several projects. Mainly on Angular also create markup for other clients.</div>
      <div>- pwa application for weight loss program. Team - 4 people. Stack - Angular and Firebase. Implement graphs, using googleCharts, features (forms, guards);</div>
      <div>- Markup (client - transwestern). Implement markups on native html and css;</div>
    `,
  },
  {
    title: 'Student/Intern',
    subtitle: 'July 2017 — June 2018',
    company: 'EPAM Systems',
    body: `<div>Pass Epam Front-End Developer program. Main stakc was Angular 2 + Typescript. Working on quiz generator project.</div>
      <div>- implement reactive forms, custom form control elements, validators;</div>
      <div>- implements guards;</div>`
  },
]
</script>

<template>
  <section class="app-experience">
    <h2 class="app-experience__title">Employment history</h2>

    <q-timeline layout="comfortable" color="primary">
      <q-timeline-entry
        v-for="(item, index) in history"
        :key="`${item.company}-${item.subtitle}`"
        :title="item.title"
        :subtitle="item.subtitle"
        :side="index % 2 === 0 ? 'left' : 'right'"
      >
        <div class="app-experience__company">{{ item.company }}</div>
        <div v-html="item.body"></div>
      </q-timeline-entry>
    </q-timeline>
  </section>
</template>

<style scoped>
.app-experience {
  max-width: 1000px;
  margin: 0 auto;
  padding: 32px 16px;
}

.app-experience__title {
  margin: 0 0 24px;
  font-size: 1.75rem;
  font-weight: 600;
  line-height: 1.3;
  text-align: center;
}

.app-experience__company {
  font-weight: 600;
  margin-bottom: 4px;
}
</style>
