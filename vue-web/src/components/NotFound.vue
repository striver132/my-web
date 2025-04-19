<template>
    <div class="error-page">
      <div class="error-page__container">
        <div class="error-page__content">
          <h1 class="error-page__title">404</h1>
          <div class="error-page__line"></div>
          <p class="error-page__message">页面未找到</p>
          <p class="error-page__description">
            您访问的页面不存在或已被移除
          </p>
          <button class="error-page__button" @click="goHome">
            返回首页
          </button>
        </div>
        
        <div class="error-page__decoration">
          <div class="error-page__decoration-item error-page__decoration-item--circle"></div>
          <div class="error-page__decoration-item error-page__decoration-item--square"></div>
          <div class="error-page__decoration-item error-page__decoration-item--triangle">
            <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
              <polygon points="15,0 30,30 0,30" fill="none" stroke="currentColor" />
            </svg>
          </div>
          <div class="error-page__decoration-item error-page__decoration-item--cross">
            <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
              <line x1="5" y1="5" x2="25" y2="25" stroke="currentColor" />
              <line x1="5" y1="25" x2="25" y2="5" stroke="currentColor" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  const goHome = () => {
    router.push('/');
  };
  </script>
  
  <style lang="scss" scoped>
  // Variables
  $color-black: #000;
  $color-white: #fff;
  $color-gray-light: #f5f5f5;
  $color-gray: #e0e0e0;
  $color-gray-dark: #333;
  
  // Block
  .error-page {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: $color-white;
    font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
    position: relative;
    overflow: hidden;
    
    // Elements
    &__container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      max-width: 1200px;
      padding: 2rem;
      position: relative;
      z-index: 1;
    }
    
    &__content {
      text-align: center;
      max-width: 600px;
      position: relative;
      z-index: 2;
    }
    
    &__title {
      font-size: 12rem;
      font-weight: 900;
      margin: 0;
      line-height: 1;
      color: $color-black;
      letter-spacing: -0.05em;
      
      @media (max-width: 768px) {
        font-size: 8rem;
      }
      
      @media (max-width: 480px) {
        font-size: 6rem;
      }
    }
    
    &__line {
      width: 60px;
      height: 4px;
      background-color: $color-black;
      margin: 2rem auto;
    }
    
    &__message {
      font-size: 2rem;
      font-weight: 600;
      margin: 0 0 1rem;
      color: $color-black;
      
      @media (max-width: 768px) {
        font-size: 1.5rem;
      }
    }
    
    &__description {
      font-size: 1.125rem;
      line-height: 1.6;
      margin: 0 0 2.5rem;
      color: $color-gray-dark;
      
      @media (max-width: 768px) {
        font-size: 1rem;
      }
    }
    
    &__button {
      display: inline-block;
      padding: 0.875rem 2rem;
      background-color: $color-black;
      color: $color-white;
      font-size: 1rem;
      font-weight: 500;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.3s ease;
      
      &:hover {
        background-color: $color-gray-dark;
        transform: translateY(-2px);
      }
      
      &:active {
        transform: translateY(0);
      }
    }
    
    &__decoration {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 0;
    }
    
    &__decoration-item {
      position: absolute;
      color: $color-gray;
      opacity: 0.5;
      
      // Modifiers
      &--circle {
        width: 120px;
        height: 120px;
        border: 2px solid currentColor;
        border-radius: 50%;
        top: 15%;
        right: 10%;
        
        @media (max-width: 768px) {
          width: 80px;
          height: 80px;
        }
      }
      
      &--square {
        width: 80px;
        height: 80px;
        border: 2px solid currentColor;
        bottom: 15%;
        left: 10%;
        
        @media (max-width: 768px) {
          width: 60px;
          height: 60px;
        }
      }
      
      &--triangle {
        width: 100px;
        height: 100px;
        top: 60%;
        right: 15%;
        
        @media (max-width: 768px) {
          width: 70px;
          height: 70px;
        }
      }
      
      &--cross {
        width: 60px;
        height: 60px;
        top: 25%;
        left: 15%;
        
        @media (max-width: 768px) {
          width: 40px;
          height: 40px;
        }
      }
    }
  }
  </style>