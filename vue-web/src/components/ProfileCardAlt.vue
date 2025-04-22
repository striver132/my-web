<template>
  <div class="profile-card">
    <div class="profile-card__container">
      <div class="profile-card__content-wrapper">
        <!-- 左侧图片部分 -->
        <div class="profile-card__image-section">
          <div class="profile-card__image-container">
            <img
              v-if="currentImage"
              :src="currentImage"
              alt="Profile"
              class="profile-card__image"
            />
            <div v-else class="profile-card__image-placeholder"></div>
          </div>

          <div class="profile-card__dots">
            <div
              v-for="(image, index) in images"
              :key="index"
              class="profile-card__dot"
              @click="handleImageChange(index)"
              :class="{ 'profile-card__dot--active': currentImageIndex === index }"
            ></div>
          </div>
        </div>

        <!-- 右侧内容部分 -->
        <div class="profile-card__text-section">
          <h2 class="profile-card__title">{{ $t('about.About__Me') }}</h2>

          <div class="profile-card__content">
            <p class="profile-card__text">
              {{ $t('about.self__introduction') }}
            </p>

            <div class="profile-card__skills">
              <span
                v-for="(skill, index) in skills"
                :key="index"
                class="profile-card__skill"
              >
                {{ skill }}
              </span>
            </div>
            <div class="profile-card__button">
              <button>Hire Me</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  images: {
    type: Array,
    default: () => [],  // 默认空数组
  },
  currentImageIndex: {
    type: Number,
    default: 0
  },
  bio: {
    type: String,
    default:
      "I am a passionate designer and developer with a focus on creating clean, minimal, and functional user experiences.",
  },
  skills: {
    type: Array,
    default: () => ["Design", "Development", "UI/UX", "Photography"],
  },
  blueBorder: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits(['update:currentImageIndex']);

// 处理图片切换
const handleImageChange = (index) => {
  emit('update:currentImageIndex', index);
};

// 获取当前显示的图片
const currentImage = computed(() => 
  props.images[props.currentImageIndex] || ''
);
</script>

<style lang="scss" scoped>
// Variables
$color-black: #000;
$color-white: #fff;
$color-gray-light: #f2f2f2;
$color-gray: #666;
$color-gray-dark: #333;
$border-radius: 4px;
$transition-speed: 0.3s;

// Breakpoints
$tablet: 768px;
$desktop: 1024px;

// Block
.profile-card {
  width: 100%;
  max-width: 1200px; // 增加最大宽度以适应桌面端
  margin: 0 auto;
  font-family: "Inter", "Helvetica Neue", Arial, sans-serif;
  position: relative;

  // Elements
  &__container {
    background-color: $color-gray-light;
    border-radius: $border-radius;
    overflow: hidden;
    padding: 30px;
    margin: 20px;
  }

  &__content-wrapper {
    display: flex;
    flex-direction: column;

    @media (min-width: $tablet) {
      flex-direction: row;
      gap: 40px;
      align-items: flex-start;
    }
  }

  &__image-section {
    @media (min-width: $tablet) {
      flex: 0 0 40%;
      max-width: 400px;
    }
  }

  &__text-section {
    @media (min-width: $tablet) {
      flex: 1;
      padding-top: 20px;
    }
  }

  &__image-container {
    width: 100%;
    aspect-ratio: 1 / 1;
    margin-bottom: 20px;
    overflow: hidden;
    border-radius: 8px; // 添加圆角
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); // 添加阴影
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform $transition-speed ease;

    &:hover {
      transform: scale(1.05);
    }
  }

  &__image-placeholder {
    width: 100%;
    height: 100%;
    background-color: $color-black;
  }

  &__dots {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-bottom: 20px;

    @media (min-width: $tablet) {
      margin-bottom: 30px;
    }
  }

  &__dot {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: $color-gray;
    transition: all $transition-speed ease;
    cursor: pointer;

    &:hover {
      background-color: $color-black;
      transform: scale(1.2);
    }

    &--active {
      background-color: $color-black;
      transform: scale(1.2);
    }
  }

  &__title {
    font-size: 2rem;
    font-weight: 700;
    margin: 0 0 20px;
    color: $color-black;

    @media (min-width: $tablet) {
      font-size: 2.5rem;
      text-align: left;
    }
  }

  &__content {
    @media (min-width: $tablet) {
      text-align: left;
    }
  }

  &__text {
    font-size: 1rem;
    line-height: 1.6;
    margin: 0 0 20px;
    color: $color-gray-dark;

    @media (min-width: $tablet) {
      font-size: 1.1rem;
      line-height: 1.8;
    }
  }

  &__skills {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 20px;
    @media (min-width: $tablet) {
      gap: 12px;
    }
  }

  &__button {
    position: absolute;
    bottom: 0.5%;
    right: 10%;
    @media (min-width: $tablet) {
        bottom: 5%;
        right: 10%;
    }
    button {
      padding: 10px 20px;
      background-color: $color-black;
      color: $color-white;
      border: none;
      border-radius: 4px;
      font-size: 1rem;
      font-weight: 500;
      cursor: pointer;
      transition: all $transition-speed ease;

      &:hover {
        background-color: $color-gray-dark;
        transform: translateY(-2px);
      }
    }

  }

  &__skill {
    font-size: 0.875rem;
    padding: 8px 16px;
    background-color: $color-white;
    color: $color-black;
    border-radius: 20px;
    display: inline-block;
    transition: all $transition-speed ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }

    @media (min-width: $tablet) {
      font-size: 1rem;
      padding: 10px 20px;
    }
  }
}
</style>
