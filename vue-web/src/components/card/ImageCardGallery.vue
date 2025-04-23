<template>
  <div 
    class="gallery"
    @mouseenter="isHovering = true"
    @mouseleave="handleMouseLeave"
    @wheel="handleWheel"
    @mousedown="startDrag"
    @mouseup="stopDrag"
    @mousemove="onDrag"
    @touchstart="startTouch"
    @touchmove="onTouch"
    @touchend="stopTouch"
    ref="galleryRef"
  >
    <div 
      class="gallery__container" 
      :style="{ transform: `translateX(${position}px)` }"
      :class="{ 
        'gallery__container--dragging': isDragging || isTouching,
        'gallery__container--smooth': !isDragging && !isTouching 
      }"
    >
      <!-- 克隆前面的卡片放在末尾，实现无限滚动效果 -->
      <div 
        v-for="(card, index) in displayCards" 
        :key="`card-${index}`"
        class="gallery__card"
        :class="{ 'gallery__card--active': activeIndex === getOriginalIndex(index) }"
        @click="setActiveCard(getOriginalIndex(index))"
      >
        <div class="gallery__card-inner">
          <div class="gallery__card-image">
            <img :src="card.image" :alt="card.title">
          </div>
          <div class="gallery__card-content">
            <h3 class="gallery__card-title">{{ card.title }}</h3>
            <p class="gallery__card-description">{{ card.description }}</p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="gallery__indicators">
      <span 
        v-for="(card, index) in cards" 
        :key="`indicator-${index}`"
        class="gallery__indicator"
        :class="{ 'gallery__indicator--active': activeIndex === index }"
        @click="setActiveCard(index)"
      ></span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';

// 卡片数据
const cards = [
  {
    title: "城市建筑",
    description: "现代都市的黑白视角",
    image: "/placeholder.svg?height=400&width=300"
  },
];

// 为了实现无限滚动，我们在前后各复制一组卡片
const displayCards = computed(() => {
  return [...cards, ...cards, ...cards];
});

const galleryRef = ref(null);
const isHovering = ref(false);
const isDragging = ref(false);
const position = ref(0);
const startX = ref(0);
const startPosition = ref(0);
const activeIndex = ref(0);

// 卡片和容器尺寸
const cardWidth = ref(300);
const cardGap = ref(20);
const totalWidth = computed(() => cards.length * (cardWidth.value + cardGap.value));

// 获取原始卡片索引（处理循环）
const getOriginalIndex = (index) => {
  return index % cards.length;
};

// 设置活动卡片
const setActiveCard = (index) => {
  activeIndex.value = index;
  scrollToCard(index);
};

// 滚动到指定卡片
const scrollToCard = (index) => {
  // 计算目标位置，考虑到中间组的偏移
  const middleGroupOffset = -totalWidth.value;
  const targetPosition = middleGroupOffset - (index * (cardWidth.value + cardGap.value));
  
  // 使用 CSS transition 类来控制动画
  const container = galleryRef.value?.querySelector('.gallery__container');
  if (container) {
    container.style.transition = 'transform 0.5s ease';
    position.value = targetPosition;
    
    // 动画结束后移除 transition
    setTimeout(() => {
      container.style.transition = 'none';
      checkBoundary();
      container.style.transition = 'transform 0.5s ease';
    }, 500);
  }
};

// 处理滚轮事件
const handleWheel = (e) => {
  if (!isHovering.value) return;
  
  e.preventDefault();
  
  const container = galleryRef.value?.querySelector('.gallery__container');
  if (container) {
    container.style.transition = 'none';
  }
  
  // 根据滚轮方向调整滚动位置
  const delta = e.deltaY || e.deltaX;
  const direction = delta > 0 ? -1 : 1;
  
  position.value += direction * 40;
  checkBoundary();
  updateActiveCard();
};

// 开始拖拽
const startDrag = (e) => {
  isDragging.value = true;
  startX.value = e.clientX;
  startPosition.value = position.value;
  document.body.style.cursor = 'grabbing';
  
  const container = galleryRef.value?.querySelector('.gallery__container');
  if (container) {
    container.style.transition = 'none';
  }
};

// 停止拖拽
const stopDrag = () => {
  if (isDragging.value) {
    isDragging.value = false;
    document.body.style.cursor = 'default';
    
    const container = galleryRef.value?.querySelector('.gallery__container');
    if (container) {
      container.style.transition = 'transform 0.5s ease';
    }
    
    updateActiveCard();
  }
};

// 拖拽中
const onDrag = (e) => {
  if (!isDragging.value) return;
  
  const dx = e.clientX - startX.value;
  position.value = startPosition.value + dx;
  checkBoundary();
};

// 添加触摸相关的状态
const isTouching = ref(false);
const touchStartX = ref(0);
const touchStartY = ref(0);
const isScrollingVertically = ref(false);

// 开始触摸
const startTouch = (e) => {
  isTouching.value = true;
  isScrollingVertically.value = false;
  touchStartX.value = e.touches[0].clientX;
  touchStartY.value = e.touches[0].clientY;
  startPosition.value = position.value;
  
  const container = galleryRef.value?.querySelector('.gallery__container');
  if (container) {
    container.style.transition = 'none';
  }
};

// 触摸移动
const onTouch = (e) => {
  if (!isTouching.value) return;
  
  const touchX = e.touches[0].clientX;
  const touchY = e.touches[0].clientY;
  
  // 计算水平和垂直方向的移动距离
  const deltaX = touchX - touchStartX.value;
  const deltaY = touchY - touchStartY.value;
  
  // 如果是第一次移动，判断滑动方向
  if (!isScrollingVertically.value && Math.abs(deltaY) > Math.abs(deltaX)) {
    isScrollingVertically.value = true;
    isTouching.value = false;
    return;
  }
  
  // 如果是垂直滚动，不处理横向滑动
  if (isScrollingVertically.value) return;
  
  // 阻止页面滚动
  e.preventDefault();
  
  // 更新位置
  position.value = startPosition.value + deltaX;
  checkBoundary();
};

// 结束触摸
const stopTouch = () => {
  if (isTouching.value) {
    isTouching.value = false;
    
    const container = galleryRef.value?.querySelector('.gallery__container');
    if (container) {
      container.style.transition = 'transform 0.5s ease';
    }
    
    updateActiveCard();
  }
};

// 检查边界并实现无限滚动
const checkBoundary = () => {
  const middleGroupOffset = -totalWidth.value;
  
  if (position.value > 0) {
    // 添加弹性效果
    if (isTouching.value || isDragging.value) {
      position.value = position.value * 0.3; // 减缓超出边界时的移动
    } else {
      const offset = position.value % totalWidth.value;
      position.value = middleGroupOffset + offset;
    }
  }
  
  if (position.value < -2 * totalWidth.value) {
    if (isTouching.value || isDragging.value) {
      const overScroll = position.value + 2 * totalWidth.value;
      position.value = -2 * totalWidth.value + overScroll * 0.3;
    } else {
      const offset = position.value % totalWidth.value;
      position.value = middleGroupOffset + offset;
    }
  }
};

// 根据滚动位置更新活动卡片
const updateActiveCard = () => {
  if (!galleryRef.value) return;
  
  // 计算当前位置相对于中间组的偏移
  const middleGroupOffset = -totalWidth.value;
  const relativePosition = position.value - middleGroupOffset;
  
  // 计算最接近中心的卡片索引
  const index = Math.round(Math.abs(relativePosition) / (cardWidth.value + cardGap.value));
  activeIndex.value = index % cards.length;
};

// 初始化位置到中间组的开始
onMounted(() => {
  position.value = -totalWidth.value;
  
  // 监听窗口大小变化
  window.addEventListener('resize', updateActiveCard);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateActiveCard);
});

const handleMouseLeave = () => {
  isHovering.value = false;
  stopDrag();
};
</script>

<style lang="scss" scoped>
.gallery {
  $this: &;
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 40px 0;
  background-color: #121212;
  touch-action: pan-y pinch-zoom; // 允许垂直滚动和缩放
  
  &__container {
    display: flex;
    transition: none;
    padding: 20px 60px;
    
    &--smooth {
      transition: transform 0.5s ease;
    }
    
    &--dragging {
      transition: none;
      cursor: grabbing;
    }
  }
  
  &__card {
    flex: 0 0 auto;
    width: 300px;
    height: 450px;
    margin-right: 20px;
    border-radius: 8px;
    overflow: hidden;
    transition: all 0.3s ease;
    cursor: grab;
    position: relative;
    background-color: #1a1a1a;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    
    &:hover {
      transform: translateY(-10px);
    }
    
    &--active {
      transform: scale(1.05) translateY(-15px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
      
      #{$this}__card-title {
        color: #ffffff;
      }
    }
    
    &-inner {
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    
    &-image {
      height: 70%;
      overflow: hidden;
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: grayscale(100%) contrast(120%);
        transition: all 0.5s ease;
      }
    }
    
    &-content {
      padding: 20px;
      background-color: #1a1a1a;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    
    &-title {
      font-size: 1.5rem;
      font-weight: 700;
      margin: 0 0 10px;
      color: #e0e0e0;
    }
    
    &-description {
      font-size: 0.9rem;
      color: #a0a0a0;
      margin: 0;
    }
  }
  
  &__indicators {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
  }
  
  &__indicator {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #4a4a4a;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &--active {
      background-color: #ffffff;
      transform: scale(1.2);
    }
  }
}

// 全局样式
body {
  margin: 0;
  padding: 0;
  font-family: 'Arial', sans-serif;
  color: #e0e0e0;
  background-color: #121212;
}

// 响应式调整
@media (max-width: 768px) {
  .gallery {
    padding: 20px 0;
    
    &__container {
      padding: 10px 30px;
    }
    
    &__card {
      width: 250px; // 移动端卡片宽度可以适当调小
      height: 375px;
    }
  }
}
</style>
