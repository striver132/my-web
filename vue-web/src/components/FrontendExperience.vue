<template>
  <section class="experience">
    <div class="experience__div-title">
      <h1 class="experience__title">{{ t("frontendExperience.title") }}</h1>
    </div>
    <div v-for="(block, key) in blocks" :key="key" class="experience__block">
      <h2 class="experience__block-title">
        {{ t(`frontendExperience.${key}.title`) }}
      </h2>
      <p
        v-if="
          t(`frontendExperience.${key}.content`) !==
          `frontendExperience.${key}.content`
        "
        class="experience__block-content"
      >
        {{ t(`frontendExperience.${key}.content`) }}
      </p>
      <p
        v-if="
          t(`frontendExperience.${key}.content1`) !==
          `frontendExperience.${key}.content1`
        "
        class="experience__block-content"
      >
        {{ t(`frontendExperience.${key}.content1`) }}
      </p>
      <p
        v-if="
          t(`frontendExperience.${key}.content2`) !==
          `frontendExperience.${key}.content2`
        "
        class="experience__block-content"
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

<style lang="scss" scoped>
.experience {
  padding: 0 2rem 2rem 2rem;
  background-color: #fff;
  color: #000;
  font-family: "Helvetica Neue", sans-serif;

  &__div-title {
    @media (max-width: 768px) {
      display: flex;
      justify-content: center;
    }
  }
  &__title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 2rem;
    border-bottom: 2px solid #000;
    padding-bottom: 0.5rem;
    @media (max-width: 768px) {
      text-align: center;
      width: 300px;
    }
  }

  &__block {
    margin-bottom: 2rem;

    &-title {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    &-content {
      font-size: 1rem;
      line-height: 1.6;
      margin-bottom: 0.5rem;
    }
  }

  &__components {
    list-style: none;
    padding-left: 1rem;
    border-left: 2px solid #000;

    &-item {
      font-size: 1rem;
      margin-bottom: 0.25rem;
    }
  }
}
</style>
