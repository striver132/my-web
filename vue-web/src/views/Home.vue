<template>
  <GlowingWave
    width="1000"
    height="200"
    :amplitude="80"
    :frequency="0.004"
    :speed="0.02"
  />
  <div class="motto">
    <p class="motto__text">———{{ $t("motto") }}</p>
  </div>
  <div class="main">
    <section class="main__Hero">
      <div class="main__Hero-title">
        <h1></h1>
      </div>
    </section>
    <section class="main__profile">
      <h2 class="main__profile-title">cookiii</h2>
      <h3 class="main__profile-subtitle">{{ $t("Frontend__Developer") }}</h3>
      <p class="main__profile-text">{{ $t("profileText") }}</p>
    </section>
    <section class="main__skills">
      <h3 class="main__skills-title">{{ $t("Skills") }}</h3>
      <ul class="main__skills-list">
        <li class="main__skills-item" v-for="skill in skills" :key="skill">
          {{ skill }}
        </li>
      </ul>
    </section>
    <section class="main__works">
      <h3 class="main__works-title">{{ t("Works") }}</h3>
      <div class="main__works-grid">
        <div class="main__works-item" v-for="work in works" :key="work.title">
          <img :src="work.imageUrl" alt="projetct" class="main__works-image" />
          <div class="main__works-overlay">
            <p class="main__works-title">{{ work.title }}</p>
            <p class="main__works-description">{{ work.description }}</p>
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
import { useI18n } from "vue-i18n";

import { ref } from "vue";

const { t } = useI18n();

const skills = ref([
  "HTML",
  "CSS",
  "JavaScript",
  "Vue.js",
  "Node.js",
  "Git",
  "Java",
]);

// 添加 works 数据

const works = ref([
  {
    title: t('project1'),
    description: t('project1__description'),
    imageUrl: "/src/assets/img/project1.png",
  },
  {
    title: t('project2'),
    description: t('project2__description'),
    imageUrl: "/src/assets/img/project2.png",
  },
]);
</script>
<style lang="scss" scoped>
$color-bg: #ffffff;
$color-text: #000000;
$color-accent: #333333;
$color-border: #000000;
.motto {
  width: 100%;
  text-align: right;

  &__text {
    max-width: 800px;
    margin-left: auto;
    @media (max-width: 768px) {
      max-width: 200px;
    }
  }
}
.home {
  width: 100%;
  height: 100%;
}

.main {
  padding: 40px 20px;
  max-width: 800px;
  margin: 0 auto;
  

  &__Hero {
    text-align: center;
  }

  &__profile {
    text-align: center;
    margin-bottom: 40px;
  }

  &__profile-title {
    font-size: 2.5rem;
    margin-bottom: 10px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
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
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
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
    overflow: hidden;
  }

  &__works-title {
    font-size: 1.8rem;
    margin-bottom: 10px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }

  &__works-grid {
    color: #ffffff;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    background: #000;
  }

  &__works-item {
    height: 10rem;
    background-color: $color-border;
    border: 2px solid $color-bg;
    border-radius: 4px;
    padding: 20px;
    text-align: center;
    position: relative;
    &:hover {
      background-color: $color-bg;
      transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
      & .main__works-image {
        opacity: 0;
      }
      & .main__works-overlay {
        animation: moveUp 0.5 ease forwards;
      }
    }
  }

  &__works-image {
    width: 70%;
    height: 100%;
    object-fit: cover;
    border-top: 1px solid $color-bg;
    border-right: 1px solid $color-bg;
    border-bottom: 1px solid $color-bg;
    border-left: 1px solid $color-bg;
    box-shadow: 0 4px 8px rgba(255, 255, 255, 1),
      0 8px 16px rgba(74, 44, 114, 0.9);
  }
  &__works-overlay {
    width: 100%; // 改为100%以填充容器
    height: 100%; // 改为100%以填充容器
    position: absolute;
    top: 0;
    left: 0;
    color: #000;
    opacity: 0;
    transform: translateY(10%);
  }
  &__works-description {
    font-size: 1rem;
    line-height: 1.6;
    margin: 0;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }

  @keyframes moveUp {
    from {
      transform: translateY(100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
}
</style>
