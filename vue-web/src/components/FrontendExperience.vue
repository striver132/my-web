<template>
  <div class="experience__div-title">
    <h1 class="experience__title">{{ t("frontendExperience.title") }}</h1>
  </div>
  <section class="experience">
    <div v-for="(block, key) in blocks" :key="key" class="experience__block">
      <h2 class="experience__block-title">
        {{ t(`frontendExperience.${key}.title`) }}
      </h2>
      <p
        :class="{ 'experience__block-content': t(`frontendExperience.${key}.content`) !== `frontendExperience.${key}.content` }"
        v-if="
          t(`frontendExperience.${key}.content`) !==
          `frontendExperience.${key}.content`
        "
      >
        {{ t(`frontendExperience.${key}.content`) }}
      </p>
      <p
        :class="{ 'experience__block-content': t(`frontendExperience.${key}.content1`) !== `frontendExperience.${key}.content1` }"
        v-if="
          t(`frontendExperience.${key}.content1`) !==
          `frontendExperience.${key}.content1`
        "
      >
        {{ t(`frontendExperience.${key}.content1`) }}
      </p>
      <p
        :class="{ 'experience__block-content': t(`frontendExperience.${key}.content2`) !== `frontendExperience.${key}.content2` }"
        v-if="
          t(`frontendExperience.${key}.content2`) !==
          `frontendExperience.${key}.content2`
        "
      >
        {{ t(`frontendExperience.${key}.content2`) }}
      </p>
      <ul
        v-if="typeof t(`frontendExperience.${key}.components`) === 'object'"
        class="experience__components"
      >
        <li
          v-for="(desc, name) in t(`frontendExperience.${key}.components`)"
          :key="name"
          class="experience__component-item"
        >
          <strong>{{ name }}</strong
          >：{{ desc }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();

// keys of each block under frontendExperience
const blocks = {
  spaDevelopment: true,
  i18nSupport: true,
  responsiveAndComponents: true,
  routingAndState: true,
  interaction: true,
  threeD: true,
  performance: true,
  tooling: true,
  versionControl: true,
};
</script>

<style lang="scss">
/* Frontend Experience - BEM Methodology */

/* Variables */
$primary-color: #000000;
$secondary-color: #000000;
$accent-color: #000000;
$text-color: #2d3436;
$light-text: #636e72;
$border-color: #dfe6e9;
$background-color: #f9f9f9;
$card-background: #f9f9f9;
$shadow-color: rgba(0, 0, 0, 0.1);

$border-radius: 8px;
$spacing-xs: 8px;
$spacing-sm: 16px;
$spacing-md: 24px;
$spacing-lg: 32px;
$spacing-xl: 48px;

/* Base Styles */
.experience {
  background-color: $background-color;
  color: $text-color;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  max-width: 85%;
  margin: 0 auto;
  padding: $spacing-lg;
  border-radius: 10px;
  box-shadow: 0 4px 6px $shadow-color;
  margin-bottom: 40px;
  display: grid;
  grid-template-columns:repeat(auto-fill, minmax(280px, 1fr));
  /* Title Section */
  &__div-title {
    margin-bottom: $spacing-lg;
    text-align: center;
    position: relative;
    
    &::after {
      content: '';
      display: block;
      width: 80px;
      height: 3px;
      background-color: $accent-color;
      margin: $spacing-sm auto 0;
      border-radius: 2px;
    }
  }
  
  &__title {
    font-size: 2.2rem;
    color: $primary-color;
    margin-bottom: $spacing-sm;
    font-weight: 700;
    letter-spacing: -0.5px;
  }
  
  /* Experience Blocks */
  &__block {
    background-color: $card-background;
    border-radius: $border-radius;
    padding: $spacing-lg;
    margin-bottom: $spacing-lg;
    box-shadow: 0 4px 6px $shadow-color;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border-left: 4px solid $secondary-color;
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 15px $shadow-color;
    }
    
    &:nth-child(odd) {
      border-left-color: $primary-color;
    }
    
    &:nth-child(3n) {
      border-left-color: $accent-color;
    }
  }
  
  &__block-title {
    font-size: 1.5rem;
    color: $secondary-color;
    margin-bottom: $spacing-md;
    padding-bottom: $spacing-xs;
    border-bottom: 1px solid $border-color;
  }
  
  &__block-content {
    font-size: 1rem;
    line-height: 1.6;
    color: $light-text;
    margin-bottom: $spacing-md;
    
    &:last-of-type {
      margin-bottom: $spacing-lg;
    }
  }
  
  /* Components List */
  &__components {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: $spacing-md;
  }
  
  &__component-item {
    background-color: $background-color;
    padding: $spacing-md;
    border-radius: $border-radius;
    box-shadow: 0 2px 4px $shadow-color;
    transition: transform 0.2s ease;
    
    strong {
      color: $secondary-color;
      display: block;
      margin-bottom: $spacing-xs;
      font-size: 1.1rem;
    }
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 4px 8px $shadow-color;
    }
  }
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .experience {
    padding: $spacing-md;
    
    &__title {
      font-size: 1.8rem;
    }
    
    &__block {
      padding: $spacing-md;
    }
    
    &__block-title {
      font-size: 1.3rem;
    }
    
    &__components {
      grid-template-columns: 1fr;
    }
  }
}

@media (max-width: 480px) {
  .experience {
    padding: $spacing-sm;
    
    &__title {
      font-size: 1.5rem;
    }
    
    &__block {
      padding: $spacing-sm;
    }
    
    &__block-title {
      font-size: 1.2rem;
    }
  }
}
</style>