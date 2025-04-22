<template>
  <div class="card-gallery">
    <div class="card-gallery__container">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="card-gallery__card"
        :class="{ 'card-gallery__card--active': activeCard === index }"
        :style="{
          backgroundColor: card.bgColor,
          transform: getCardTransform(index),
          zIndex: getZIndex(index),
        }"
        @mouseenter="handleMouseEnter(index)"
        @mouseleave="handleMouseLeave"
      >
        <div class="card-gallery__card-content">
          <h3 class="card-gallery__title" :style="{ color: card.textColor }">
            {{ card.title }}
          </h3>
          <div
            v-if="card.subtitle"
            class="card-gallery__subtitle"
            :style="{ color: card.textColor }"
          >
            {{ card.subtitle }}
          </div>
          <div v-if="card.image" class="card-gallery__image-container">
            <img :src="card.image" alt="" class="card-gallery__image" />
          </div>
          <div v-if="card.badge" class="card-gallery__badge">
            {{ card.badge }}
          </div>
        </div>
      </div>
    </div>

    <div class="card-gallery__cta">
      
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const cards = [
  {
    title: "RISE AND SHINE",
    subtitle: "BETTER TOGETHER IN WEB3",
    bgColor: "#9590D8",
    textColor: "#0000FF",
  },
  {
    title: "KEY SOFT SKILLS*",
    subtitle: "WEB3 EDITION",
    bgColor: "#222222",
    textColor: "#FFFFFF",
  },
  {
    title: "PLACE OF INDIVIDUALS IN WEB3",
    subtitle: "OPINION EDITOR COINTELEGRAPH",
    bgColor: "#FFFF00",
    textColor: "#000000",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    title: "DEGLORIFYING CEOS",
    bgColor: "#FF3B3B",
    textColor: "#000000",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    title: "THEY FLED FROM WEB2 TO WEB3 AND NAILED IT",
    bgColor: "#FF8C00",
    textColor: "#000000",
    badge: "Θ",
  },
  {
    title: "WEB3 EMPLOYEES FROM TV SHOWS",
    bgColor: "#6A0DAD",
    textColor: "#FFFFFF",
  },
  {
    title: "WORDS BANNED FROM WEB3 WORKPLACE",
    bgColor: "#4CAF50",
    textColor: "#FFFFFF",
    badge: "5",
  },
];

const activeCard = ref(3); // Start with middle card active
const hoverCard = ref(null);
const autoplayInterval = ref(null);

const handleMouseEnter = (index) => {
  hoverCard.value = index;
  if (autoplayInterval.value) {
    clearInterval(autoplayInterval.value);
  }
};

const handleMouseLeave = () => {
  hoverCard.value = null;
  startAutoplay();
};

const getZIndex = (index) => {
  if (hoverCard.value === index) {
    return 999; // 悬停卡片最上层
  }
  return cards.length - Math.abs(index - activeCard.value);
};

const getCardTransform = (index) => {
  const offset = index - activeCard.value;
  const radius = 800; // 弧形半径
  const angleStep = 10; // 每张卡片之间的角度
  const angle = offset * angleStep; // 计算当前卡片的角度

  // 计算弧形位置
  const radian = (angle * Math.PI) / 180;
  const x = Math.sin(radian) * radius;
  const z = Math.cos(radian) * radius - radius;

  // 根据距离调整缩放
  const scale = 1 - Math.abs(offset) * 0.1;

  // 如果是当前悬停的卡片，添加上移效果
  if (hoverCard.value === index) {
    return `
      perspective(1000px) 
      translateX(${x}px) 
      translateZ(${z + 100}px) 
      translateY(-50px)
      rotateY(${angle}deg) 
      scale(${scale + 0.1})
    `;
  }

  return `
    perspective(1000px) 
    translateX(${x}px) 
    translateZ(${z}px) 
    rotateY(${angle}deg) 
    scale(${scale})
  `;
};

const startAutoplay = () => {
  autoplayInterval.value = setInterval(() => {
    activeCard.value = (activeCard.value + 1) % cards.length;
  }, 3000);
};

const resetAutoplay = () => {
  if (autoplayInterval.value) {
    clearInterval(autoplayInterval.value);
    startAutoplay();
  }
};

onMounted(() => {
  startAutoplay();
});
</script>

<style lang="scss" scoped>
.card-gallery {
  &__container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 400px;
    position: relative;
    perspective: 1000px;
    margin-bottom: 60px;
    padding: 40px 0;
  }

  &__card {
    position: absolute;
    width: 220px;
    height: 300px;
    border-radius: 16px;
    padding: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    overflow: hidden;

    &--active {
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.7);
    }

    &:hover {
      box-shadow: 0 25px 50px rgba(0, 0, 0, 0.8);
    }
  }

  &__card-content {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  &__title {
    font-size: 1.2rem;
    font-weight: bold;
    margin: 0 0 10px 0;
    line-height: 1.2;
  }

  &__subtitle {
    font-size: 0.8rem;
    margin-bottom: 10px;
  }

  &__image-container {
    margin-top: auto;
    margin-bottom: auto;
    text-align: center;
  }

  &__image {
    max-width: 80px;
    max-height: 80px;
    border-radius: 8px;
  }

  &__badge {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: white;
    color: black;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }

  &__cta {
    text-align: center;
    color: rgb(26, 26, 26);
  }

  &__cta-title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 30px;
  }

  &__social-buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
  }

  &__social-button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    color: black;
    border-radius: 30px;
    padding: 10px 20px;
    font-weight: bold;
    text-decoration: none;
    transition: all 0.3s ease;
    min-width: 150px;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 5px 15px rgba(255, 255, 255, 0.3);
    }

    &--twitter {
      &:hover {
        background-color: #1da1f2;
        color: white;
      }
    }

    &--telegram {
      &:hover {
        background-color: #0088cc;
        color: white;
      }
    }

    &--instagram {
      &:hover {
        background: linear-gradient(
          45deg,
          #f09433,
          #e6683c,
          #dc2743,
          #cc2366,
          #bc1888
        );
        color: white;
      }
    }
  }

  &__social-icon {
    margin-right: 8px;
  }
}

// Add this to your global styles or App.vue
body {
  margin: 0;
  padding: 0;
  background-color: black;
  color: white;
  font-family: Arial, sans-serif;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
