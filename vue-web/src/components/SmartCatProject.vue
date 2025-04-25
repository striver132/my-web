<template>
  <div class="smart-cat">
    <!-- 项目标题和描述 -->
    <section class="smart-cat__section smart-cat__section--header">
      <h1 class="smart-cat__title">{{ t("smartCat.projectTitle") }}</h1>
      <h2 class="smart-cat__subtitle">{{ t("smartCat.projectName") }}</h2>
      <p class="smart-cat__description">{{ t("smartCat.projectDescription") }}</p>
    </section>

    <!-- 技术栈 -->
    <section class="smart-cat__section smart-cat__section--tech">
      <h3 class="smart-cat__section-title">{{ t("smartCat.techStack.title") }}</h3>
      <div class="smart-cat__tech-grid">
        <div
          class="smart-cat__tech-item"
          v-for="(value, key) in techStackItems"
          :key="key"
        >
          {{ t(`smartCat.techStack.${key}`) }}
        </div>
      </div>
    </section>

    <!-- 核心功能模块 -->
    <section class="smart-cat__section smart-cat__section--modules">
      <h3 class="smart-cat__section-title">{{ t("smartCat.modules.title") }}</h3>
      <div class="smart-cat__module-grid">
        <div
          v-for="(module, key) in moduleItems"
          :key="key"
          class="smart-cat__module-card"
        >
          <h4 class="smart-cat__module-title">{{ t(`smartCat.modules.${key}.title`) }}</h4>
          <p class="smart-cat__module-description">{{ t(`smartCat.modules.${key}.features`) }}</p>
          <ul class="smart-cat__module-list">
            <li class="smart-cat__module-list-item" v-for="(highlight, index) in 2" :key="index">
              {{ t(`smartCat.modules.${key}.highlights.${index}`) }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 项目亮点 -->
    <section class="smart-cat__section smart-cat__section--highlights">
      <h3 class="smart-cat__section-title">{{ t("smartCat.highlights.title") }}</h3>
      <div class="smart-cat__highlight-grid">
        <div
          v-for="(value, key) in highlightItems"
          :key="key"
          class="smart-cat__highlight-item"
        >
          {{ t(`smartCat.highlights.${value}`) }}
        </div>
      </div>
    </section>

    <!-- 个人贡献 -->
    <div class="smart-cat__results-container">
      <section class="smart-cat__section smart-cat__section--contribution">
        <h3 class="smart-cat__section-title">{{ t("smartCat.contribution.title") }}</h3>
        <ul class="smart-cat__contribution-list">
          <li class="smart-cat__contribution-item" v-for="(point, index) in 5" :key="index">
            {{ t(`smartCat.contribution.points.${index}`) }}
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const techStackItems = ["frontend", "ui", "router", "state", "style", "api"];
const moduleItems = ["ai-doctor", "petStore", "onlineAsk", "doctorManger"];
const highlightItems = [
  "identification",
  "aiDoctor",
  "onlineAsk",
  "routePlan",
  "petStore",
  "socialCat",
];
</script>

<style lang="scss">
/* Smart Cat - BEM Methodology */

/* Variables */
$primary-color: #333333;
$secondary-color: #5f27cd;
$accent-color: #000000;
$text-color: #2d3436;
$light-text: #636e72;
$border-color: #dfe6e9;
$background-color: #ffffff;
$card-background: #f9f9f9;
$shadow-color: rgba(0, 0, 0, 0.1);

$border-radius: 8px;
$spacing-xs: 8px;
$spacing-sm: 16px;
$spacing-md: 24px;
$spacing-lg: 32px;
$spacing-xl: 48px;

/* Base Styles */
.smart-cat {
  background-color: $background-color;
  color: $text-color;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: $spacing-lg;
  
  /* Sections */
  &__section {
    margin-bottom: $spacing-xl;
    padding: $spacing-lg;
    border-radius: $border-radius;
    
    &--header {
      text-align: center;
      padding-bottom: $spacing-lg;
      border-bottom: 1px solid $border-color;
    }
    
    &--tech, &--modules, &--highlights, &--contribution {
      background-color: $card-background;
      box-shadow: 0 4px 6px $shadow-color;
    }
  }
  
  /* Typography */
  &__title {
    font-size: 2.5rem;
    margin-bottom: $spacing-sm;
    color: $primary-color;
  }
  
  &__subtitle {
    font-size: 1.8rem;
    margin-bottom: $spacing-md;
    color: $secondary-color;
  }
  
  &__description {
    font-size: 1.1rem;
    line-height: 1.6;
    max-width: 800px;
    margin: 0 auto;
    color: $light-text;
  }
  
  &__section-title {
    font-size: 1.5rem;
    margin-bottom: $spacing-md;
    padding-bottom: $spacing-xs;
    border-bottom: 2px solid $accent-color;
    display: inline-block;
  }
  
  /* Tech Stack */
  &__tech-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: $spacing-md;
  }
  
  &__tech-item {
    background-color: $background-color;
    padding: $spacing-md;
    border-radius: $border-radius;
    text-align: center;
    box-shadow: 0 2px 4px $shadow-color;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 12px $shadow-color;
    }
  }
  
  /* Modules */
  &__module-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: $spacing-lg;
  }
  
  &__module-card {
    background-color: $background-color;
    border-radius: $border-radius;
    padding: $spacing-md;
    box-shadow: 0 2px 8px $shadow-color;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: translateY(-5px);
    }
  }
  
  &__module-title {
    color: $secondary-color;
    font-size: 1.3rem;
    margin-bottom: $spacing-sm;
    padding-bottom: $spacing-xs;
    border-bottom: 1px solid $border-color;
  }
  
  &__module-description {
    color: $light-text;
    margin-bottom: $spacing-sm;
    line-height: 1.5;
  }
  
  &__module-list {
    padding-left: $spacing-md;
  }
  
  &__module-list-item {
    margin-bottom: $spacing-xs;
    position: relative;
    
    &::before {
      content: "•";
      color: $accent-color;
      font-weight: bold;
      display: inline-block;
      width: 1em;
      margin-left: -1em;
    }
  }
  
  /* Highlights */
  &__highlight-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: $spacing-md;
  }
  
  &__highlight-item {
    background-color: $background-color;
    padding: $spacing-md;
    border-radius: $border-radius;
    text-align: center;
    box-shadow: 0 2px 4px $shadow-color;
    border-left: 3px solid $primary-color;
    transition: all 0.3s ease;
    
    &:hover {
      background-color: rgba($primary-color, 0.05);
      transform: scale(1.03);
    }
  }
  
  /* Contribution */
  &__results-container {
    background-color: rgba($accent-color, 0.05);
    border-radius: $border-radius;
    padding: $spacing-sm;
  }
  
  &__contribution-list {
    padding-left: $spacing-md;
  }
  
  &__contribution-item {
    margin-bottom: $spacing-sm;
    line-height: 1.6;
    position: relative;
    padding-left: $spacing-sm;
    
    &::before {
      content: "→";
      color: $accent-color;
      position: absolute;
      left: -$spacing-md;
    }
  }
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .smart-cat {
    padding: $spacing-md;
    
    &__section {
      padding: $spacing-md;
    }
    
    &__title {
      font-size: 2rem;
    }
    
    &__subtitle {
      font-size: 1.5rem;
    }
    
    &__tech-grid {
      grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    }
    
    &__module-grid {
      grid-template-columns: 1fr;
    }
    
    &__highlight-grid {
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }
  }
}

@media (max-width: 480px) {
  .smart-cat {
    padding: $spacing-sm;
    
    &__section {
      padding: $spacing-sm;
    }
    
    &__title {
      font-size: 1.8rem;
    }
    
    &__subtitle {
      font-size: 1.3rem;
    }
    
    &__tech-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
</style>