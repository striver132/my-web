<template>
    <div class="corner-light-container" :style="{ width: width + 'px', height: height + 'px' }">
      <svg 
        :width="width" 
        :height="height" 
        viewBox="0 0 400 400" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <!-- Gradient definitions for the glow effect -->
        <defs>
          <radialGradient id="cornerGlow" cx="0%" cy="0%" r="100%" fx="0%" fy="0%">
            <stop offset="0%" stop-color="white" stop-opacity="0.9" />
            <stop offset="30%" stop-color="white" stop-opacity="0.5" />
            <stop offset="70%" stop-color="rgba(255,255,255,0.2)" stop-opacity="0.2" />
            <stop offset="100%" stop-color="rgba(255,255,255,0)" stop-opacity="0" />
          </radialGradient>
          
          <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
          </filter>
        </defs>
        
        <!-- Background -->
        <rect width="100%" height="100%" fill="black" />
        
        <!-- Corner light effect -->
        <g :transform="`translate(${position.x}, ${position.y})`">
          <!-- Main glow -->
          <path 
            :d="cornerPath" 
            fill="url(#cornerGlow)"
            filter="url(#blur)"
          />
          
          <!-- Brighter center -->
          <circle 
            cx="0" 
            cy="0" 
            r="10" 
            fill="white" 
            filter="url(#blur)"
          />
        </g>
      </svg>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue'
  
  // Props
  const props = defineProps({
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 400
    },
    cornerPosition: {
      type: String,
      default: 'top-left',
      validator: (value) => ['top-left', 'top-right', 'bottom-left', 'bottom-right'].includes(value)
    },
    intensity: {
      type: Number,
      default: 1.0
    }
  })
  
  // Computed position based on corner selection
  const position = computed(() => {
    switch (props.cornerPosition) {
      case 'top-left':
        return { x: 0, y: 0 }
      case 'top-right':
        return { x: props.width, y: 0 }
      case 'bottom-left':
        return { x: 0, y: props.height }
      case 'bottom-right':
        return { x: props.width, y: props.height }
      default:
        return { x: 0, y: 0 }
    }
  })
  
  // Generate the corner path
  const cornerPath = computed(() => {
    const size = Math.max(props.width, props.height) * 0.8
    
    let path = ''
    
    switch (props.cornerPosition) {
      case 'top-left':
        path = `M 0,0 L ${size},0 Q ${size/2},${size/2} 0,${size} Z`
        break
      case 'top-right':
        path = `M 0,0 L 0,${size} Q ${-size/2},${size/2} ${-size},0 Z`
        break
      case 'bottom-left':
        path = `M 0,0 L ${size},0 Q ${size/2},${-size/2} 0,${-size} Z`
        break
      case 'bottom-right':
        path = `M 0,0 L 0,${-size} Q ${-size/2},${-size/2} ${-size},0 Z`
        break
    }
    
    return path
  })
  
  // Animation state
  const animationActive = ref(true)
  const animationIntensity = ref(props.intensity)
  
  // Subtle breathing animation effect
  onMounted(() => {
    let direction = 1
    const animate = () => {
      if (animationActive.value) {
        animationIntensity.value += 0.01 * direction
        
        if (animationIntensity.value > 1.2) {
          direction = -1
        } else if (animationIntensity.value < 0.8) {
          direction = 1
        }
        
        requestAnimationFrame(animate)
      }
    }
    
    animate()
  })
  </script>
  
  <style scoped>
  .corner-light-container {
    position: relative;
    overflow: hidden;
    background-color: black;
  }
  </style>