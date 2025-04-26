<template>
  <div>
    <h1>Welcome to Home</h1>
  </div>
  <ImageCardGallery />
  <div class="other__show">
    <div class="other__show--right">
      <VideoPlayer
        class="other__show--right-item"
        videoId=""
        title="Custom Title"
        linkText="Channel Link"
        linkUrl=""
      />
    </div>
    <div class="other__show--grid">
      <TransparentFolder
        :images="cityImages"
        :title="t('other.cq')"
        folderIcon="/src/assets/folder.png"
      />

      
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ImageCardGallery from "../components/card/ImageCardGallery.vue";
import VideoPlayer from "../components/card/VideoPlayer.vue";
import TransparentFolder from "../components/card/TransparentFolder.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const cityImages = ref([
  { src: "/src/assets/img/city/cq1.jpg?", alt: "城市风光1" },
  { src: "/src/assets/img/city/cq2.jpg?", alt: "城市风光2" },
  { src: "/src/assets/img/city/cq3.jpg?", alt: "城市风光3" },
]);
</script>

<style lang="scss" scoped>
.other {
  &__show {
    @media (min-width: 769px) {
      display: flex;
      flex-direction: row;
      &--right {
        width: 50%;
        &-item{
          margin-left: auto;
          margin-right: auto;
          margin-top: 5%;
        }
      }
    }
    &--right {
        &-item{
          margin-left: auto;
          margin-right: auto;
          margin-top: 5%;
        }
      }
    &--grid {
      display: flex;
      flex-wrap: wrap;
      gap: 30px;
      justify-content: center;
      padding: 20px;
    }
  }
}
</style>
