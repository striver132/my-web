<template>
  <div ref="container" class="three-container"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { useRoute } from 'vue-router'
import * as THREE from 'three'

const route = useRoute()
const container = ref(null)
let scene, camera, renderer, animationFrameId
let isActive = true // 控制渲染循环

// 初始化Three.js场景
const initThree = () => {
  // 创建场景
  scene = new THREE.Scene()
  
  // 创建相机
  camera = new THREE.PerspectiveCamera(
    75,
    container.value.clientWidth / container.value.clientHeight,
    0.1,
    1000
  )
  camera.position.z = 5
  
  // 创建渲染器
  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(container.value.clientWidth, container.value.clientHeight)
  container.value.appendChild(renderer.domElement)
  
  // 添加一个示例立方体
  const geometry = new THREE.BoxGeometry()
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
  const cube = new THREE.Mesh(geometry, material)
  scene.add(cube)
  
  // 动画循环
  const animate = () => {
    if (!isActive) return // 如果不活跃，停止渲染

    animationFrameId = requestAnimationFrame(animate)
    
    // 旋转立方体
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
    
    renderer.render(scene, camera)
  }
  animate()
  
  // 处理窗口大小变化
  const handleResize = () => {
    if (!container.value) return
    
    const width = container.value.clientWidth
    const height = container.value.clientHeight
    
    camera.aspect = width / height
    camera.updateProjectionMatrix()
    renderer.setSize(width, height)
  }
  window.addEventListener('resize', handleResize)

  // 返回清理函数
  return () => {
    window.removeEventListener('resize', handleResize)
  }
}

// 监听路由变化
watch(() => route.path, () => {
  isActive = false // 路由变化时暂停渲染
  setTimeout(() => {
    isActive = true // 路由完成后恢复渲染
  }, 100)
})

// 组件挂载时初始化
onMounted(() => {
  const cleanup = initThree()
  
  // 组件卸载时清理
  onBeforeUnmount(() => {
    isActive = false
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId)
    }
    if (renderer) {
      renderer.dispose()
      renderer.forceContextLoss()
      renderer.domElement.remove()
    }
    if (scene) {
      scene.clear()
    }
    cleanup() // 清理resize监听器
  })
})
</script>

<style scoped>
.three-container {
  width: 100%;
  height: 100px;
  z-index: -1;
}
  </style>
