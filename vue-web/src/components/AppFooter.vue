<template>
    <footer class="app-footer">
      <div class="app-footer__container">
        <!-- 网站信息 -->
        <div class="app-footer__brand">
          <router-link to="/" class="app-footer__brand-link">{{ $t('footer.webName') }}</router-link>
          <p class="app-footer__brand-desc">{{ $t('footer.webIntroduction') }}</p>
        </div>
  
        <div>s</div>
        <!-- 社交媒体 -->
        <div class="app-footer__social">
          <h3 class="app-footer__social-title">{{ $t('footer.webFollow') }}</h3>
          <div class="app-footer__social-icons">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              target="_blank"
              class="app-footer__social-link"
            >
            <BiliIcon class="app-footer__social-icon"/>
              <span :class="`app-footer__social-icon app-footer__social-icon`">
                {{ social.name }}  
              </span>
            </a>
            
          </div>
        </div>
        <!-- 版权信息 -->
        <div class="app-footer__copyright">
          <a href="https://beian.miit.gov.cn" class="app-footer__copyright-link">渝ICP备2025056568号-1</a>
          <p>&copy; {{ currentYear }} MyApp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  import BiliIcon from '../icon/BiliIcon.vue'
  
  // 社交媒体链接
  const socialLinks = [
    { name: 'Bilibili', url: 'https://space.bilibili.com/435671813?spm_id_from=333.1007.0.0' },
  ]
  
  // 动态年份
  const currentYear = computed(() => new Date().getFullYear())
  </script>
  
  <style lang="scss">
  .app-footer {
    
    background: #1a1a1a;
    color: #fff;
    padding: 3rem 0;
    position: relative;
    z-index: 1;
    box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.2);
  
    &__container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
      display: grid;
      grid-template-columns: 1fr 2fr 1fr;
      gap: 2rem;
    }
  
    &__brand {
      &-link {
        color: #fff;
        font-size: 1.5rem;
        font-weight: bold;
        text-decoration: none;
        transition: color 0.3s;
  
        &:hover {
          color: #ccc;
        }
      }
  
      &-desc {
        font-size: 0.9rem;
        color: #999;
        margin-top: 0.5rem;
      }
    }
  
    &__links {
      display: flex;
      justify-content: space-between;
  
      &-column {
        flex: 1;
        margin: 0 1rem;
      }
  
      &-title {
        font-size: 1.2rem;
        margin-bottom: 1rem;
        color: #fff;
      }
  
      &-list {
        list-style: none;
        padding: 0;
      }
  
      &-item {
        margin-bottom: 0.5rem;
      }
  
      &-link {
        color: #999;
        text-decoration: none;
        font-size: 0.95rem;
        transition: color 0.3s;
  
        &:hover {
          color: #fff;
        }
  
        &.router-link-active {
          color: #fff;
          font-weight: bold;
        }
      }
    }
  
    &__social {
      &-title {
        font-size: 1.2rem;
        margin-top: 0;
        margin-bottom: 1rem;
        color: #fff;
      }
  
      &-icons {
        display: flex;
        gap: 1rem;
      }
  
      &-link {
        display: inline-block;
        width: 32px;
        height: 32px;
        text-decoration: none;
      }
  
      &-icon {
        display: block;
        width: 100%;
        height: 100%;
        background-size: cover;
        transition: opacity 0.3s;
        color: #565656;
        &:hover {
          opacity: 0.8;
        }
      }
    }
  
    &__copyright {
      grid-column: 1 / -1;
      text-align: center;
      padding-top: 2rem;
      border-top: 1px solid #333;
      font-size: 0.85rem;
      color: #999;
      &-link {
        color: #999;
        text-decoration: none;
        transition: color 0.3s;
  
        &:hover {
          color: #fff;
        }
      }
    }
  
    // 响应式设计
    @media (max-width: 768px) {
      &__container {
        grid-template-columns: 1fr;
        text-align: center;
      }
  
      &__links {
        flex-direction: column;
        align-items: center;
  
        &-column {
          margin: 1rem 0;
        }
      }
  
      &__social {
        &-icons {
          justify-content: center;
        }
      }
    }
  }
  </style>