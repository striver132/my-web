<template>
  <div class="folder-gallery">
    <div
      class="folder-gallery__container"
      :class="{ 'folder-gallery__container--open': isOpen }"
      @click="toggleFolder"
    >
      <!-- 文件夹背景 -->
      <div class="folder-gallery__background"></div>

      <!-- 文件夹内容 - 图片以层叠方式展示 -->
      <div class="folder-gallery__content">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="folder-gallery__item"
          :style="{
            transform: `rotate(${getRandomRotation(index)}deg) 
                         translateX(${getRandomOffset(index)}px)
                         translateY(${getRandomOffsetY(index)}px)`,
            zIndex: images.length - index,
          }"
        >
          <img
            :src="image.src"
            :alt="image.alt || '图片'"
            class="folder-gallery__image"
          />
        </div>
      </div>

      <!-- 文件夹图标/装饰 -->
      <div class="folder-gallery__decorations">
        <div v-if="folderIcon" class="folder-gallery__icon">
          <img :src="folderIcon" alt="文件夹图标" />
        </div>
        <div
          v-for="(decoration, index) in decorations"
          :key="index"
          class="folder-gallery__decoration"
          :style="{
            top: `${decoration.top || 0}px`,
            right: `${decoration.right || 0}px`,
            bottom: `${decoration.bottom || 0}px`,
            left: `${decoration.left || 0}px`,
          }"
        >
          <img :src="decoration.src" :alt="decoration.alt || '装饰'" />
        </div>
      </div>

      <!-- 文件夹标题 -->
      <div v-if="title" class="folder-gallery__title">{{ title }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// 定义组件属性
const props = defineProps({
  // 图片数组，每个对象包含src和alt属性
  images: {
    type: Array,
    default: () => [],
  },
  // 文件夹标题
  title: {
    type: String,
    default: "",
  },
  // 文件夹图标
  folderIcon: {
    type: String,
    default: "",
  },
  // 装饰元素数组，每个对象包含src、alt和位置信息
  decorations: {
    type: Array,
    default: () => [],
  },
});

// 文件夹状态
const isOpen = ref(false);

// 切换文件夹打开/关闭状态
const toggleFolder = () => {
  isOpen.value = !isOpen.value;
};

// 生成随机旋转角度，使图片看起来更自然
const getRandomRotation = (index) => {
  // 使用索引确保每次渲染相同图片的角度一致
  let deg = 0;
  switch (index) {
    case 0:
      deg = -10;
      break;
    case 1:
      deg = 0;
      break;
    case 2:
      deg = 10;
      break;
    default:
      deg = 0;
      break;
  }
  return deg;
};

// 生成随机偏移量，使图片看起来更自然
const getRandomOffset = (index) => {
  let deg = 0;
  switch (index) {
    case 0:
      deg = -30;
      break;
    case 1:
      deg = 20;
      break;
    case 2:
      deg = 90;
      break;
    default:
      deg = 0;
      break;
  }
  return deg;
};
const getRandomOffsetY = (index) => {
  let deg = 0;
  switch (index) {
    case 0:
      deg = -10;
      break;
    case 1:
      deg = -20;
      break;
    case 2:
      deg = -10;
      break;
    default:
      deg = 0;
      break;
  }
  return deg;
};
</script>

<style lang="scss" scoped>
.folder-gallery {
  // 文件夹组件主容器
  &__container {
    position: relative;
    width: 280px;
    height: 200px;
    cursor: pointer;
    perspective: 1000px;
    transition: transform 0.3s ease;

    // 打开状态的文件夹
    &--open {
      .folder-gallery__content {
        transform: translateY(-20px) translateZ(20px);
      }

      .folder-gallery__item {
        opacity: 1;
        transform: translateY(0) !important;
      }
    }
  }

  // 文件夹背景
  &__background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #f8f8f8;
    border-radius: 12px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    z-index: 1;
  }

  // 文件夹内容区域
  &__content {
    position: absolute;
    top: 20px;
    left: 20px;
    right: 20px;
    bottom: 20px;
    z-index: 2;
    transition: transform 0.4s ease;
    &:hover {
      z-index: 11 !important;
    }
  }

  // 单个图片项
  &__item {
    position: absolute;
    width: 40%;
    height: 40%;
    top: 10%;
    left: 10%;
    transition: all 0.4s ease;
    opacity: 0.9;
    &:hover {
      z-index: 10 !important;
      transform: scale(1.1) !important;
      opacity: 1;
    }
  }

  // 图片样式
  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border: 2px solid white;
  }

  // 装饰元素容器
  &__decorations {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
    pointer-events: none;
  }

  // 文件夹图标
  &__icon {
    position: absolute;
    top: 10%;
    left: 10%;
    width: 70%;
    height: 70%;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      opacity: 0.98;
    }
  }

  // 装饰元素
  &__decoration {
    position: absolute;
    width: 30px;
    height: 30px;
    z-index: 1;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  // 文件夹标题
  &__title {
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: 14px;
    font-weight: bold;
    color: #333;
    z-index: 3;
    padding: 4px 8px;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 4px;
  }
}
</style>
