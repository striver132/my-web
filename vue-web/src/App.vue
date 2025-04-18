<template>
  <div id="app">
    <AppNavbar />
    <main class="app-main">
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import AppNavbar from './components/AppNav.vue'
import AppFooter from './components/AppFooter.vue'
</script>
<style lang="scss">
.app-main {
  min-height: calc(100vh - 200px); /* 确保内容区域占满剩余空间 */
  padding: 2rem;
}
</style>