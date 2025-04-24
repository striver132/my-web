<template>
  <div class="smart-cat">
    <!-- 项目标题和描述 -->
    <section class="project-header">
      <h1>{{ t('smartCat.projectTitle') }}</h1>
      <h2>{{ t('smartCat.projectName') }}</h2>
      <p>{{ t('smartCat.projectDescription') }}</p>
    </section>

    <!-- 技术栈 -->
    <section class="tech-stack">
      <h3>{{ t('smartCat.techStack.title') }}</h3>
      <div class="tech-grid">
        <div class="tech-item" v-for="(value, key) in techStackItems" :key="key">
          {{ t(`smartCat.techStack.${key}`) }}
        </div>
      </div>
    </section>

    <!-- 核心功能模块 -->
    <section class="modules">
      <h3>{{ t('smartCat.modules.title') }}</h3>
      <div class="module-grid">
        <div v-for="(module, key) in moduleItems" :key="key" class="module-card">
          <h4>{{ t(`smartCat.modules.${key}.title`) }}</h4>
          <p>{{ t(`smartCat.modules.${key}.features`) }}</p>
          <ul>
            <li v-for="(highlight, index) in 2" 
                :key="index">
              {{ t(`smartCat.modules.${key}.highlights.${index}`) }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 项目亮点 -->
    <section class="highlights">
      <h3>{{ t('smartCat.highlights.title') }}</h3>
      <div class="highlight-grid">
        <div v-for="(value, key) in highlightItems" :key="key" class="highlight-item">
          {{ t(`smartCat.highlights.${value}`) }}
        </div>
      </div>
    </section>

    <!-- 个人贡献和项目成果 -->
    <div class="results-container">
      <section class="contribution">
        <h3>{{ t('smartCat.contribution.title') }}</h3>
        <ul>
          <li v-for="(point, index) in 4" 
              :key="index">
            {{ t(`smartCat.contribution.points.${index}`)}}
          </li>
        </ul>
      </section>

      <section class="metrics">
        <h3>{{ t('smartCat.metrics.title') }}</h3>
        <div class="metrics-grid">
          <div class="metric-item">
            <span>{{ t('smartCat.metrics.reuse') }}</span>
          </div>
          <div class="metric-item">
            <span>{{ t('smartCat.metrics.speed') }}</span>
          </div>
          <div class="metric-item">
            <span>{{ t('smartCat.metrics.satisfaction') }}</span>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const techStackItems = ['frontend', 'ui', 'router', 'state', 'style', 'api'];
const moduleItems = ['address', 'productDetail', 'productList', 'cart', 'order'];
const highlightItems = ['modular', 'ux', 'performance', 'i18n'];
</script>

<style lang="scss" scoped>
.smart-cat {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  color: #333;
  background: #fff;

  @media (prefers-color-scheme: dark) {
    color: #fff;
    background: #1a1a1a;
  }

  section {
    margin-bottom: 3rem;
    padding: 1.5rem;
    border: 1px solid #ddd;
    border-radius: 8px;

    @media (prefers-color-scheme: dark) {
      border-color: #333;
    }
  }

  h1, h2, h3, h4 {
    margin-bottom: 1rem;
    font-weight: 600;
  }

  .project-header {
    text-align: center;
    
    h1 {
      font-size: 2.5rem;
    }
    
    h2 {
      font-size: 1.8rem;
      color: #666;
      @media (prefers-color-scheme: dark) {
        color: #aaa;
      }
    }
  }

  .tech-grid, .highlight-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
    
    > div {
      padding: 1rem;
      background: #f5f5f5;
      border-radius: 4px;
      
      @media (prefers-color-scheme: dark) {
        background: #2a2a2a;
      }
    }
  }

  .module-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;

    .module-card {
      padding: 1.5rem;
      background: #f8f8f8;
      border-radius: 8px;
      transition: transform 0.2s;

      @media (prefers-color-scheme: dark) {
        background: #2a2a2a;
      }

      &:hover {
        transform: translateY(-5px);
      }

      ul {
        list-style-type: none;
        padding-left: 0;
        
        li {
          margin: 0.5rem 0;
          padding-left: 1rem;
          border-left: 3px solid #666;
          
          @media (prefers-color-scheme: dark) {
            border-left-color: #aaa;
          }
        }
      }
    }
  }

  .results-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  .metrics-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;

    .metric-item {
      padding: 1rem;
      text-align: center;
      background: #f0f0f0;
      border-radius: 4px;
      
      @media (prefers-color-scheme: dark) {
        background: #2a2a2a;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 1rem;
    
    section {
      padding: 1rem;
    }

    .project-header {
      h1 {
        font-size: 2rem;
      }
      
      h2 {
        font-size: 1.5rem;
      }
    }
  }
}
</style>