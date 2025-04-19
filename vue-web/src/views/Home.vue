<template>
  <div class="main">
    <GlowingWave
      width="1000"
      height="200"
      :amplitude="80"
      :frequency="0.004"
      :speed="0.02"
    />
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
  </div>
</template>

<script setup>
import GlowingWave from "../components/animation/GlowingWave.vue";
</script>
<style lang="scss" scoped>
$color-bg: #ffffff;
$color-text: #000000;
$color-accent: #333333;
$color-border: #000000;
.main {
  padding: 40px 20px;
  max-width: 800px;
  margin: 0 auto;

  &__profile {
    text-align: center;
    margin-bottom: 40px;
    display: flex;
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
}
</style>
