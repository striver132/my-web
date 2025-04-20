<template>
  <GlowingWave
    width="1000"
    height="200"
    :amplitude="80"
    :frequency="0.004"
    :speed="0.02"
  />
  <div class="main">
    <section class="main__profile">
      <h2 class="main__profile-title">cookiii</h2>
      <h3 class="main__profile-subtitle">Frontend Developer</h3>
      <p class="main__profile-text">{{ profileText }}</p>
    </section>
    <section class="main__skills">
      <h3 class="main__skills-title">Skills</h3>
      <ul class="main__skills-list">
        <li class="main__skills-item" v-for="skill in skills" :key="skill">
          {{ skill }}
        </li>
      </ul>
    </section>
    <section class="main__works">
      <h3 class="main__works-title">Works</h3>
      <div class="main__works-grid">
        <div class="main__works-item"
        v-for="work in works"
        :key="work.title"
        >
        <div>
          <h4>{{ work.title }}</h4>
        </div>
      </div>
      </div>
    </section>
  </div>
  <div class="home">
    <ThreeScene />
  </div>

</template>

<script setup>
import GlowingWave from "../components/animation/GlowingWave.vue";
import ThreeScene from "../components/threejs/ThreeScene.vue";

import { ref } from "vue";
const profileText = ref(
  "I am a frontend developer with a strong background in web development. I have experience in building responsive and interactive web applications using HTML, CSS, and JavaScript. I am also familiar with various frontend frameworks and libraries such as React, Vue, and Angular."
);
const skills = ref([
  "HTML",
  "CSS",
  "JavaScript",
  "Vue.js",
  "Node.js",
  "Git",
  "Java"
])
const works = ref([
  {
    title: "Project 1",
    description: "Description of Project 1",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    title: "Project 2",
    description: "Description of Project 2",
    imageUrl: "https://via.placeholder.com/150",
  },
])
</script>
<style lang="scss" scoped>
$color-bg: #ffffff;
$color-text: #000000;
$color-accent: #333333;
$color-border: #000000;

.home {
  width: 100%;
  height: 100%;
}

.main {
  padding: 40px 20px;
  max-width: 800px;
  margin: 0 auto;

  &__profile {
    text-align: center;
    margin-bottom: 40px;
  }

  &__profile-title {
    font-size: 2.5rem;
    margin-bottom: 10px;
  }

  &__profile-subtitle {
    font-size: 1.2rem;
    color: $color-accent;
    margin-bottom: 20px;
  }

  &__profile-text {
    font-size: 1rem;
    line-height: 1.6;
  }

  &__skills {
    text-align: center;
  }

  &__skills-title {
    font-size: 1.8rem;
    margin-bottom: 20px;
  }

  &__skills-list {
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }

  &__skills-item {
    background-color: $color-text;
    color: $color-bg;
    padding: 8px 16px;
    border-radius: 4px;
    font-size: 0.9rem;
    transition: background-color 0.3s;

    &:hover {
      background-color: $color-accent;
    }
  }

  &__works {
    margin-top: 40px;
    text-align: center;
  }

  &__works-title {
    font-size: 1.8rem;
    margin-bottom: 20px;
  }

  &__works-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
  }

  &__works-item {
    background-color: $color-bg;
    border: 1px solid $color-border;
    border-radius: 4px;
    padding: 20px;
    text-align: center;
  }

}
</style>
