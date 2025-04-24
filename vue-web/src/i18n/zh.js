export default {
  nav: {
    home: "主页",
    about: "关于",
    skills: "技能",
    portfolio: "项目集",
    contact: "联系方式",
    blog: "博客",
    other:"其他",
  },

  motto: "光波残影，不过瞬间；黑暗振动，永恒无边。",

  Frontend__Developer: "前端开发者",
  profileText:
    "我是一名大三学生，热爱前端开发，熟练掌握 HTML、CSS、JavaScript 以及 Vue.js 等技术，曾参与多个项目实践，具备良好的编码能力和团队协作精神。",
  Skills: "技能",
  Works: "作品",
  project1: "个人网站",
  project1__description: "记录个人成长的网站",
  project2: "灵猫智慧+",
  project2__description:
    "基于ResNet50架构和微调deepseek模型的一站式猫咪服务APP",

  about: {
    About__Me: "关于我",
    self__introduction:
      "你好！我是一名充满热情的前端开发者，目前是一名大三学生。我热衷于将创意转化为优雅的代码，专注于创建直观且用户友好的web应用。\n\n在技术方面，我熟悉HTML、CSS和JavaScript，并且在Vue.js框架上有扎实的开发经验。我善于运用现代化的开发工具，确保代码的质量和可维护性。\n\n除了技术能力，我也非常注重团队协作。我相信良好的沟通和积极的态度是项目成功的关键。在校期间，我参与过多个团队项目，这些经历让我深刻理解了协作开发的重要性。\n\n我始终保持学习的热情，紧跟前端技术的发展趋势。",
    Educational__Experience: "教育经历",
    content: "重庆工程学院，软件工程专业，2022年9月 - 2026年6月​​",
    major__course: {
      0: "客户端软件开发技术",
      1: "前端框架开发技术",
      2: "UI设计",
      3: "大数据可视化技术",
      4: "框架程序设计",
      5: "软件测试技术",
      6: "人机交互界面技术",
      7: "数据结构与算法",
      8: "Web程序设计",
      9: "操作系统",
      10: "数据库原理及应用",
      11: "面向对象程序设计",
      12: "大学计算机基础",
    },

    Project__Experience: "项目",
    content2: "制作个人网站",
    content3:"团队项目-灵猫智慧+"
  },

  frontendExperience: {
    Experience: "项目经验",
    experienceTags:{
      0: "Vue 3",
      1: "Vite",
      2: "Vue Router",
      3: "I18n",
      4: "SCSS",
      5: "Three.js",
      6: "Git",
      7: "响应式设计",
      8: "Lazy Loading",
    },
    title: "个人网站开发经验（Vue 3 + Vite）",
    spaDevelopment: {
      title: "单页应用开发（SPA）",
      content:
        "基于 Vue 3 框架构建高性能单页应用，熟练使用 Composition API 与 <script setup> 语法，提高代码可读性和开发效率。",
    },
    i18nSupport: {
      title: "国际化支持（i18n）",
      content:
        "集成 vue-i18n 实现中英文多语言切换，统一管理语言包与翻译资源，提升用户体验的全球化适配能力。",
    },
    responsiveAndComponents: {
      title: "响应式设计与组件化开发",
      content:
        "使用 SCSS 实现响应式布局，适配多种屏幕尺寸。开发多个复用组件，提升项目模块化程度与维护性：",
      components: {
        imageCardGallery: "ImageCardGallery：支持无限滚动与拖拽的图片卡片画廊",
        profileCardAlt: "ProfileCardAlt：展示个人信息与技能标签的简介卡片",
        glowingWave: "GlowingWave：实现动态发光波浪效果的视觉组件",
        threeScene: "ThreeScene：基于 Three.js 的 3D 模型展示组件",
      },
    },
    routingAndState: {
      title: "路由与状态管理",
      content1: "使用 vue-router 实现多页面导航（首页、关于、服务、联系）。",
      content2: "使用 ref 与 computed 管理组件状态，响应用户操作变化。",
    },
    interaction: {
      title: "交互体验优化",
      content:
        "实现拖拽、滚轮滚动、触摸滑动等多种交互方式，提升用户参与感与操作流畅性。",
    },
    threeD: {
      title: "3D 图形渲染",
      content:
        "基于 Three.js 加载与渲染 3D 模型，掌握 WebGL 基础，增强页面视觉表现力。",
    },
    performance: {
      title: "性能优化实践",
      content:
        "通过懒加载（import()）优化路由组件首屏加载速度，使用 CSS 动效提升页面流畅性与用户体验。",
    },
    tooling: {
      title: "构建与开发工具链",
      content:
        "使用 Vite 快速构建开发环境，配置 .gitignore 与 extensions.json，规范化开发流程与团队协作。",
    },
    versionControl: {
      title: "版本控制与协作",
      content:
        "使用 Git 进行代码版本管理，遵循清晰的提交规范与分支策略，保障项目迭代稳定性。",
    },
  },


  smartCat:{
    projectTitle: "项目经验总结",
    projectName: "项目名称：FelixAI 电商平台",
    projectDescription: "FelixAI 是一款基于 Vue 3 构建的电商平台，涵盖商品浏览、购物车管理、订单支付、地址管理等完整购物流程。平台集成多个功能模块，致力于提供流畅、高效的用户体验。",
    techStack: {
      title: "技术栈",
      0: "前端框架：Vue 3（Composition API + Script Setup）",
      1: "UI 组件库：Vant",
      2: "路由管理：Vue Router",
      3: "状态管理：Pinia",
      4: "样式方案：SCSS（模块化 Scoped 样式）",
      5: "数据交互：Axios（RESTful API）"
    },
    modules: {
      title: "核心功能模块",
      0: {
        title: "地址管理模块",
        features: "功能：地址增删改查、地址选择与订单模块联动",
        highlights: {
          0:"监听动态路由参数，实现地址与订单信息同步",
          1:"弹窗与确认模态框的交互设计，增强用户体验"
        }
      },
      1: {
        title: "商品详情模块",
        features: "功能：商品图文展示、规格选择、加入购物车、立即购买",
        highlights: [
          "使用 ref 与 computed 实现响应式数据绑定",
          "借助 nextTick 优化 DOM 操作"
        ]
      },
      2: {
        title: "商品列表模块",
        features: "功能：商品分类筛选、跳转至详情页",
        highlights: [
          "使用动态路由跳转",
          "使用 ref 与事件绑定切换筛选条件"
        ]
      },
      3: {
        title: "购物车模块",
        features: "功能：商品展示与管理、生成订单、选择支付方式",
        highlights: [
          "onMounted 加载购物车数据",
          ""
        ]
      },
      4: {
        title: "订单管理模块",
        features: "功能：订单状态筛选、支付、收货、评价、删除",
        highlights: [
          "使用 v-if 动态展示订单状态",
          "优化异步操作与错误处理"
        ]
      }
    },
    highlights: {
      title: "项目亮点",
      modular: "模块化开发：结构清晰、组件复用率高",
      ux: "用户体验优化：丰富的动态交互和移动端友好设计",
      performance: "性能优化：使用异步加载、onMounted 和 nextTick",
      i18n: "国际化支持：中国省市区三级联动"
    },
    contribution: {
      title: "个人贡献",
      points: [
        "独立开发地址模块，实现完整功能",
        "优化商品详情交互逻辑",
        "实现订单支付及状态管理功能",
        "编写模块化 SCSS 样式，提升可维护性"
      ]
    },
    result: {
      title: "项目成果",
      points: [
        "项目成功上线，反馈积极",
        "开发效率提升，复用率明显提高",
        "积累 Vue 3 项目实战经验"
      ]
    },
    metrics: {
      title: "可量化成果",
      reuse: "代码复用率提升：30%",
      speed: "页面加载速度优化：减少 20%",
      satisfaction: "用户满意度：90% 正面反馈"
    },
    keywords: {
      title: "技术关键词",
      list: "Vue 3、Composition API、Vant、SCSS、Vue Router、Pinia、Axios、RESTful API、动态路由、模态框、条件渲染、异步加载"
    }
  },

  footer: {
    webName: "我的网站",
    webIntroduction:
      "一个记录个人成长、兴趣和想法的在线空间，包括技术笔记、生活随笔和项目分享。",
    webFollow: "关注我",
  },
};
