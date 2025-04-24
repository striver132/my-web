<template>
  <div class="about">
    <section class="about__profile">
      <ProfileCard
        :images="profileImages"
        v-model:currentImageIndex="activeImageIndex"
        :bio="bio"
        :skills="skills"
      />
      <WildCard
        :title="t('about.Educational__Experience')"
        :content="t('about.content')"
        :tags="courseTags"
        :images="EduImages"
        imageAlt="Project Thumbnail"
        :blueBorder="false"
        :dotCount="3"
      />
      <WildCard
        :title="t('about.Project__Experience')"
        :content="t('about.content2')"
        :tags="experiencesTags"
        :images="ProjectImages"
        imageAlt="Project Thumbnail"
        :blueBorder="false"
        :dotCount="2"
      />
      <div class="about__experience-title">
        <h1>{{ t('frontendExperience.Experience') }}</h1>
      </div>
      <FrontendExperience/>
      <SmartCatProject/>
    </section>
  </div>
</template>

<script setup>
import ProfileCard from "../components/ProfileCardAlt.vue";
import WildCard from "../components/card/WildCard.vue";
import FrontendExperience from "../components/FrontendExperience.vue";
import SmartCatProject from "../components/SmartCatProject.vue";
import { useI18n } from "vue-i18n";
import { ref, computed } from "vue";

const profileImages = [
  "/src/assets/img/me2.jpg",
  "/src/assets/img/me1.jpg",
  "/src/assets/img/me1.jpg",
  "/src/assets/img/me2.jpg",
];

const EduImages = [
  "/src/assets/img/logo-school.png",
  "/src/assets/img/school.jpg",
  "/src/assets/img/school-map.jpg",
];

const ProjectImages = [
  "https://web-data-1352125514.cos.ap-chongqing.myqcloud.com/logo%2F1.png",
  "/src/assets/img/project2-logo.jpg"
];

const activeImageIndex = ref(0);

const { t } = useI18n();

// 添加 skills 数据
const skills = ["Vue.js", "JavaScript", "HTML/CSS", "Node.js", "Git"];

// 添加 bio 数据
const bio = computed(() => t("about.self__introduction"));

const courseTags = computed(() => {
  const tags = [];
  for (let i = 0; i < 13; i++) {  // 因为major__course从0到12共13个课程
    tags.push(t(`about.major__course.${i}`));
  }
  return tags;
});
const experiencesTags = computed(() => {
  const tags = [];
  for (let i = 0; i < 9; i++) {  // 因为major__course从0到12共13个课程
    tags.push(t(`frontendExperience.experienceTags.${i}`));
  }
  return tags;
});
</script>
<style lang="scss" scoped>
  .about {
    width: 100%;
    height: 100%;
    
    &__experience-title{
      text-align: center;
      h1{
        font-size: 2.5rem;
      }
    }
  }
</style>
