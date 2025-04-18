<template>
    <header class="app-navbar">
      <div class="app-navbar__container">
        <!-- Logo -->
        <div class="app-navbar__logo">
          <router-link to="/" class="app-navbar__logo-link">M7
            <img src="../assets/img/logo1.png" alt="logo" class="app-navbar__logo-img">
          </router-link>
          
        </div>
  
        <!-- 导航链接（桌面端） -->
        <nav class="app-navbar__nav">
          <ul class="app-navbar__nav-list">
            <li v-for="item in navItems" :key="item.name" class="app-navbar__nav-item">
              <router-link :to="item.path" class="app-navbar__nav-link">{{
                item.name
              }}</router-link>
            </li>
          </ul>
        </nav>
  
        <!-- 汉堡菜单按钮（移动端） -->
        <button
          class="app-navbar__toggle"
          :class="{ 'app-navbar__toggle--active': isMenuOpen }"
          @click="toggleMenu"
        >
          <span class="app-navbar__toggle-icon"></span>
        </button>
  
        <!-- 移动端菜单 -->
        <div class="app-navbar__mobile-menu" :class="{ 'app-navbar__mobile-menu--open': isMenuOpen }">
          <ul class="app-navbar__mobile-list">
            <li v-for="item in navItems" :key="item.name" class="app-navbar__mobile-item">
              <router-link
                :to="item.path"
                class="app-navbar__mobile-link"
                @click="toggleMenu"
                >{{ item.name }}</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </header>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  // 导航数据
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ]
  
  // 控制移动端菜单的开关
  const isMenuOpen = ref(false)
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
  }
  </script>
  
  <style lang="scss">
  .app-navbar {
    background: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 1000;
  
    &__container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 1200px;
      margin: 0 auto;
      padding: 1rem 2rem;
    }
  
    &__logo {
      font-size: 1.5rem;
      font-weight: bold;
    position: relative;
      &-link {
        color: #000;
        text-decoration: none;
        transition: color 0.3s;
  
        &:hover {
          color: #666;
        }
      }
      &-img {
        position: absolute;
        width: 70px;
        height: 70px;
        top: -23px;
        left: 40px;
        border-radius: 5px;
      }
    }
  
    &__nav {
      display: flex;
  
      &-list {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
      }
  
      &-item {
        margin-left: 2rem;
      }
  
      &-link {
        color: #000;
        text-decoration: none;
        font-size: 1rem;
        transition: color 0.3s;
  
        &:hover {
          color: #666;
        }
  
        &.router-link-active {
          color: #333;
          font-weight: bold;
        }
      }
    }
  
    &__toggle {
      display: none;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.5rem;
  
      &-icon,
      &-icon::before,
      &-icon::after {
        content: '';
        display: block;
        width: 24px;
        height: 3px;
        background: #000;
        transition: transform 0.3s, opacity 0.3s;
      }
  
      &-icon {
        position: relative;
  
        &::before,
        &::after {
          position: absolute;
          left: 0;
        }
  
        &::before {
          top: -8px;
        }
  
        &::after {
          top: 8px;
        }
      }
  
      &--active {
        .app-navbar__toggle-icon {
          background: transparent;
  
          &::before {
            transform: translateY(8px) rotate(45deg);
          }
  
          &::after {
            transform: translateY(-8px) rotate(-45deg);
          }
        }
      }
    }
  
    &__mobile-menu {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: #fff;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      transform: translateY(-100%);
      opacity: 0;
      transition: transform 0.3s, opacity 0.3s;
  
      &--open {
        display: block;
        transform: translateY(0);
        opacity: 1;
      }
    }
  
    &__mobile-list {
      list-style: none;
      margin: 0;
      padding: 1rem;
    }
  
    &__mobile-item {
      margin: 1rem 0;
    }
  
    &__mobile-link {
      color: #000;
      text-decoration: none;
      font-size: 1.2rem;
      display: block;
  
      &:hover {
        color: #666;
      }
  
      &.router-link-active {
        color: #333;
        font-weight: bold;
      }
    }
  
    // 响应式设计
    @media (max-width: 768px) {
      &__nav {
        display: none;
      }
  
      &__toggle {
        display: block;
      }
    }
  }
  </style>