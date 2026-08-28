<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { resume, type Lang, type Project } from './content/resume';

const storedLang = window.localStorage.getItem('resume-lang');
const lang = ref<Lang>(storedLang === 'en' || storedLang === 'th' ? storedLang : 'th');
const data = computed(() => resume[lang.value]);
const nextLang = computed<Lang>(() => (lang.value === 'th' ? 'en' : 'th'));
const selectedProjects = computed<Project[]>(() => [
  ...data.value.projects,
  ...data.value.freelanceProjects,
  ...data.value.academicProjects,
]);

function toggleLang() {
  lang.value = nextLang.value;
}

function printPage() {
  window.print();
}

watch(
  lang,
  (value) => {
    window.localStorage.setItem('resume-lang', value);
    document.documentElement.lang = value;
  },
  { immediate: true },
);

onMounted(() => {
  document.title = `${data.value.name} Resume`;
});
</script>

<template>
  <main class="page-shell">
    <div class="toolbar" data-print-hide>
      <button class="toolbar-button" type="button" :aria-label="data.labels.language" @click="toggleLang">
        <span aria-hidden="true">Aa</span>
        <span>{{ nextLang.toUpperCase() }}</span>
      </button>
      <button class="icon-button" type="button" :aria-label="data.labels.print" @click="printPage">
        <span aria-hidden="true">Print</span>
      </button>
    </div>

    <article class="resume-sheet">
      <header class="hero">
        <img class="avatar" src="/profile.jpg" :alt="data.name" />
        <div class="identity">
          <h1>{{ data.name }}</h1>
          <p>{{ data.headline }}</p>
        </div>
        <address class="contact">
          <a :href="`tel:${data.contact.phone.replaceAll(' ', '')}`">{{ data.contact.phone }}</a>
          <a :href="`mailto:${data.contact.email}`">{{ data.contact.email }}</a>
          <a href="https://github.com/piyawat001" rel="noreferrer">{{ data.contact.github }}</a>
          <a href="https://gitlab.com/piyawat001" rel="noreferrer">{{ data.contact.gitlab }}</a>
        </address>
      </header>

      <div class="header-rule" />

      <section class="section">
        <h2>{{ data.labels.summary }}</h2>
        <p class="summary">{{ data.summary }}</p>
      </section>

      <section class="section">
        <h2>{{ data.labels.skills }}</h2>
        <dl class="skills">
          <template v-for="skill in data.skills" :key="skill.label">
            <dt>{{ skill.label }}</dt>
            <dd>{{ skill.items.join(' · ') }}</dd>
          </template>
        </dl>
      </section>

      <section class="section">
        <h2>{{ data.labels.experience }}</h2>
        <article v-for="job in data.experience" :key="job.company" class="experience">
          <div class="row-heading">
            <h3>{{ job.role }} — {{ job.company }}</h3>
            <span>{{ job.period }}</span>
          </div>
          <ul>
            <li v-for="bullet in job.bullets" :key="bullet">{{ bullet }}</li>
          </ul>
        </article>
      </section>

      <section class="section">
        <div class="section-heading">
          <h2>{{ data.labels.projects }}</h2>
          <span>{{ data.labels.projectsNote }}</span>
        </div>
        <article v-for="project in selectedProjects" :key="project.title" class="project">
          <div class="row-heading">
            <h3>{{ project.title }}</h3>
            <span>{{ project.period }}</span>
          </div>
          <p>{{ project.summary }}</p>
          <ul>
            <li v-for="bullet in project.bullets" :key="bullet">{{ bullet }}</li>
          </ul>
          <p class="tech"><strong>{{ data.labels.tech }}</strong> {{ project.tech.join(' · ') }}</p>
        </article>
      </section>

      <section class="section">
        <div class="section-heading">
          <h2>{{ data.labels.personal }}</h2>
          <span>{{ data.labels.personalNote }}</span>
        </div>
        <div class="personal-list">
          <article v-for="project in data.personalProjects" :key="project.title" class="personal-project">
            <div>
              <h3>{{ project.title }}</h3>
              <p>{{ project.summary }}</p>
            </div>
            <a :href="project.url" rel="noreferrer">{{ project.url.replace('https://', '') }}</a>
          </article>
        </div>
      </section>

      <section class="section education">
        <h2>{{ data.labels.education }}</h2>
        <div class="row-heading">
          <div>
            <h3>{{ data.education.degree }}</h3>
            <p>{{ data.education.school }} · {{ data.education.detail }}</p>
          </div>
          <span>{{ data.education.year }}</span>
        </div>
      </section>
    </article>
  </main>
</template>
