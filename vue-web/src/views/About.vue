<template>
  <div class="about">
    <section class="about__profile">
      <ProfileCard
        imageUrl=""
        bio="Frontend developer with 5 years of experience specializing in Vue.js and modern CSS."
        :skills="['Vue.js', 'SCSS', 'JavaScript', 'UI Design']"
      />
      <WildCard
        title="My Latest Project"
        content="This is a description of my latest project, showcasing my skills in web development."
        :tags="['Web Development', 'Vue 3', 'SASS']"
        imageUrl="https://web-data-1352125514.cos.ap-chongqing.myqcloud.com/logo%2F1.png"
        imageAlt="Project Thumbnail"
        :blueBorder="false"
        :dotCount="3"
      />
    </section>
  </div>
</template>

<script setup>
import ProfileCard from "../components/ProfileCardAlt.vue";
import WildCard from "../components/card/WildCard.vue";
</script>
