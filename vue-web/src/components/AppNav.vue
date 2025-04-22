<template>
  <header class="app-navbar">
    <div class="app-navbar__container">
      <!-- Logo -->
      <div class="app-navbar__logo">
        <router-link to="/" class="app-navbar__logo-link">
          M7
          <img
            src="../assets/img/logo1.png"
            alt="logo"
            class="app-navbar__logo-img"
          />
        </router-link>
      </div>

      <!-- 导航链接（桌面端） -->
      <nav class="app-navbar__nav">
        <ul class="app-navbar__nav-list">
          <li
            v-for="item in navItems"
            :key="item.key"
            class="app-navbar__nav-item"
          >
            <router-link :to="item.path" class="app-navbar__nav-link">{{
              t(item.key)
            }}</router-link>
          </li>
          <li class="app-navbar__nav-item-toggle">
            <select v-model="locale" @change="changeLanguage">
              <option v-for="lang in languages" :key="lang" :value="lang">
                {{ lang.toUpperCase() }}
              </option>
            </select>
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
      <div
        class="app-navbar__mobile-menu"
        :class="{ 'app-navbar__mobile-menu--open': isMenuOpen }"
      >
        <ul class="app-navbar__mobile-list">
          <li
            v-for="item in navItems"
            :key="item.key"
            class="app-navbar__mobile-item"
          >
            <router-link
              :to="item.path"
              class="app-navbar__mobile-link"
              @click="toggleMenu"
              >{{ t(item.key) }}</router-link
            >
          </li>
          <li class="app-navbar__mobile-item">
            <select v-model="locale" @change="changeLanguage">
              <option v-for="lang in languages" :key="lang" :value="lang">
                {{ lang.toUpperCase() }}
              </option>
            </select>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";

const { locale, t } = useI18n();

// 支持的语言列表
const languages = ["zh", "en", "jp"];

// 初始化语言，从 localStorage 读取
onMounted(() => {
  const savedLocale = localStorage.getItem("i18n");
  if (savedLocale && languages.includes(savedLocale)) {
    locale.value = savedLocale;
  } else {
    locale.value = "zh"; // 默认语言
  }
});

// 语言切换
const changeLanguage = () => {
  localStorage.setItem("i18n", locale.value);
};

// 导航数据，使用翻译键
const navItems = [
  { key: "nav.home", path: "/" },
  { key: "nav.about", path: "/about" },
  { key: "nav.services", path: "/services" },
  { key: "nav.contact", path: "/contact" },
];

// 控制移动端菜单的开关
const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
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
      left: 20px;
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
    &-item-toggle {
      margin-left: 2rem;
      color: #fbfbfb;
      text-decoration: none;
      font-size: 1rem;
      transition: color 0.3s;
      border-radius: 5px;
      background: #181818;
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
      content: "";
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
