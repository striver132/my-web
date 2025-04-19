<template>
    <div class="wave-container">
      <svg 
        :width="width" 
        :height="height" 
        viewBox="0 0 2000 200" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <!-- Gradient definition for the glow effect -->
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="white" stop-opacity="1" />
            <stop offset="100%" stop-color="white" stop-opacity="0.7" />
          </linearGradient>
        </defs>
        
        <!-- Background -->
        <rect width="100%" height="100%" fill="black" />
        
        <!-- Animated wave path -->
        <path 
          :d="wavePath" 
          fill="none" 
          stroke="url(#waveGradient)" 
          stroke-width="7"
          filter="url(#glow)"
        />
      </svg>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  
  const props = defineProps({
    width: {
      type: [Number, String],
      default: '100%'
    },
    height: {
      type: [Number, String],
      default: 200
    },
    amplitude: {
      type: Number,
      default: 50
    },
    frequency: {
      type: Number,
      default: 0.005
    },
    speed: {
      type: Number,
      default: 0.05
    }
  })
  
  const phase = ref(0)
  const wavePath = ref('')
  let animationId = null
  
  const updateWavePath = () => {
    const width = 2000
    const height = 100
    const points = []
    
    for (let x = 0; x <= width; x += 5) {
      const y = height / 2 + Math.sin((x * props.frequency) + phase.value) * props.amplitude
      points.push(`${x},${y}`)
    }
    
    // wavePath.value = `M0,${height/2} L${points.join(' L')} L${width},${height/2}`
    wavePath.value = `M${points.join(' L')}`
  }
  
  const startAnimation = () => {
    const animate = () => {
      phase.value += props.speed
      updateWavePath()
      animationId = requestAnimationFrame(animate)
    }
    animationId = requestAnimationFrame(animate)
  }
  
  const stopAnimation = () => {
    if (animationId) {
      cancelAnimationFrame(animationId)
    }
  }
  
  onMounted(() => {
    startAnimation()
  })
  
  onUnmounted(() => {
    stopAnimation()
  })
  </script>
  
  <style scoped>
  .wave-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(0, 0, 0);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
  </style>