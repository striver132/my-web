<template>
  <div class="video-player">
    <div class="video-player__header">
      <h2 class="video-player__title">{{ title }}</h2>
      <a href="#" class="video-player__link">
        <span class="video-player__link-text">{{ linkText }}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="video-player__link-icon"
        >
          <path d="M7 7h10v10"></path>
          <path d="M7 17 17 7"></path>
        </svg>
      </a>
    </div>
    <div class="video-player__tv">
      <div class="video-player__screen">
        <iframe
          class="video-player__iframe"
          src="https://www.bilibili.com"
          title="video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div class="video-player__legs">
        <div class="video-player__leg video-player__leg--left">
        </div>
        <div class="video-player__leg video-player__leg--right">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  videoId: {
    type: String,
    default: "qwerqwerqr",
  },
  title: {
    type: String,
    default: "Design tutorials",
  },
  linkText: {
    type: String,
    default: "My Video",
  },
  linkUrl: {
    type: String,
    default: "#",
  },
});
</script>

<style lang="scss" scoped>
.video-player {
  $block: &;
  max-width: 400px;
  background-color: #f8f8f8;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }

  &__title {
    font-size: 20px;
    font-weight: 600;
    margin: 0;
    color: #333;
  }

  &__link {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #666;
    background-color: #eaeaea;
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 14px;
    transition: background-color 0.2s;

    &:hover {
      background-color: #e0e0e0;
    }

    &-text {
      margin-right: 4px;
    }

    &-icon {
      width: 14px;
      height: 14px;
    }
  }

  &__tv {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__screen {
    width: 100%;
    border: 3px solid #333;
    border-radius: 8px;
    overflow: hidden;
    position: relative;
    background-color: #000;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 2;
    &::before {
      content: "";
      display: block;
      padding-top: 56.25%; /* 16:9 Aspect Ratio */
    }
  }

  &__iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }

  &__legs {
    display: flex;
    justify-content: space-between;
    width: 70%;
    margin-top: -5px;
    z-index: 1;
  }

  &__leg {
    width: 10px;
    height: 50px;
    background: #000;

    transform: perspective(10px) rotateX(-5deg);

    &--left {
      transform: perspective(100px) rotateZ(30deg);
    }

    &--right {
      transform: perspective(100px) rotateZ(-30deg);
    }
  }
}
</style>
