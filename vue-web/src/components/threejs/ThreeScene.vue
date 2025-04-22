<template>
  <div ref="container" class="three-container"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from "vue";
import { useRoute } from "vue-router";
import * as THREE from "three";
// 首先在文件顶部导入 GLTFLoader
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

import { Reflector } from 'three/examples/jsm/objects/Reflector.js';

const route = useRoute();
const container = ref(null);
let scene, camera, renderer, animationFrameId;
let isActive = true; // 控制渲染循环

// 初始化Three.js场景
const initThree = () => {
  // 创建场景
  scene = new THREE.Scene();
  // 创建相机
  camera = new THREE.PerspectiveCamera(
    75,
    container.value.clientWidth / container.value.clientHeight,
    0.1,
    1000
  );
  camera.position.z = 5;

  // 创建渲染器
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(container.value.clientWidth, container.value.clientHeight);
  container.value.appendChild(renderer.domElement);

  // 1. 环境光（AmbientLight）- 均匀照亮场景中的所有物体
  const ambientLight = new THREE.AmbientLight(0xffffff, 1.9); // 颜色, 强度
  scene.add(ambientLight);
  // 创建 GLTFLoader 实例
  const loader = new GLTFLoader();
  // 加载模型
  loader.load(
    // 模型路径
    "/models/model2.glb",

    // 加载成功的回调
    (gltf) => {
      console.log("模型加载成功:", gltf);

      // 获取模型
      const model = gltf.scene;

      // 调整模型大小
      model.scale.set(1.3, 1.3, 1.3);

      // 调整模型位置
      model.position.set(0, 0, 0);

      // 调整模型旋转
      model.rotation.set(0, 0, 0);

      // 添加模型到场景
      scene.add(model);

      // 修改动画循环函数
      const animate = () => {
        if (!isActive) return; // 如果不活跃，停止渲染

        // 添加旋转动画
        model.rotation.y += 0.01; // 可以调整这个值来改变旋转速度
        model.rotation.x += 0.01;
        animationFrameId = requestAnimationFrame(animate);
        renderer.render(scene, camera);
      };

      // 开始动画
      animate();
    }
  );

  // 创建纹理加载器
  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load(
    "/img3d/vue.png",
    (texture) => {
      console.log("纹理加载成功");
      texture.encoding = THREE.sRGBEncoding;
    },
    undefined,
    (error) => {
      console.error("纹理加载失败", error);
    }
  );

  const texture2 = textureLoader.load(
    "/img3d/js.png",
    (texture) => {
      console.log("纹理加载成功");
      texture.encoding = THREE.sRGBEncoding;
    },
    undefined,
    (error) => {
      console.error("纹理加载失败", error);
    }
  );

  const texture3 = textureLoader.load(
    "/img3d/HTML.png",
    (texture) => {
      console.log("纹理加载成功");
      texture.encoding = THREE.sRGBEncoding;
    },
    undefined,
    (error) => {
      console.error("纹理加载失败", error);
    }
  );

  const texture4 = textureLoader.load(
    "/img3d/css.png",
    (texture) => {
      console.log("纹理加载成功");
      texture.encoding = THREE.sRGBEncoding;
    },
    undefined,
    (error) => {
      console.error("纹理加载失败", error);
    }
  );

  // 添加物体
  const geometry = new THREE.PlaneGeometry(1, 1); // 创建一个平面，宽高为 1
  const geometry2 = new THREE.PlaneGeometry(12, 20);

  const material = new THREE.MeshPhongMaterial({

    shininess: 50,
    roughness: 0.1, // 越小越光滑
    transmission: 0.9, // 透光率
    thickness: 0.5, // 厚度
    clearcoat: 1.0, // 清漆层强度
    clearcoatRoughness: 0.1, // 清漆层粗糙度
  });

  const materialVue = new THREE.MeshBasicMaterial({
    map: texture, // 将加载的纹理赋值给 map
    transparent: true, // 如果图片有透明背景（如 PNG），需要开启 transparent
    side: THREE.DoubleSide, // 可选：让材质双面可见
    blending: THREE.MultiplyBlending, // 使用乘法混合模式
    opacity: 1, // 设置整体透明度
  });

  const materialJs = new THREE.MeshBasicMaterial({
    map: texture2, // 将加载的纹理赋值给 map
    transparent: true, // 如果图片有透明背景（如 PNG），需要开启 transparent
    side: THREE.DoubleSide, // 可选：让材质双面可见
    blending: THREE.MultiplyBlending, // 使用乘法混合模式
    opacity: 1, // 设置整体透明度
  });

  const materialHTML = new THREE.MeshBasicMaterial({
    map: texture3, // 将加载的纹理赋值给 map
    transparent: true, // 如果图片有透明背景（如 PNG），需要开启 transparent
    side: THREE.DoubleSide, // 可选：让材质双面可见
    blending: THREE.MultiplyBlending, // 使用乘法混合模式
    opacity: 1, // 设置整体透明度
  });

  const materialcss = new THREE.MeshBasicMaterial({
    map: texture4, // 将加载的纹理赋值给 map
    transparent: false, // 如果图片有透明背景（如 PNG），需要开启 transparent
    side: THREE.DoubleSide, // 可选：让材质双面可见
    blending: THREE.MultiplyBlending, // 使用乘法混合模式
    opacity: 1, // 设置整体透明度
  });

  const plan = new THREE.Mesh(geometry2, material);
  const cube2 = new THREE.Mesh(geometry, materialVue);
  const cube3 = new THREE.Mesh(geometry, materialJs);
  const cube4 = new THREE.Mesh(geometry, materialcss);
  const cube5 = new THREE.Mesh(geometry, materialHTML);
  const cube6 = new THREE.Mesh(geometry, materialHTML);
  plan.position.set(0, -1, 0);
  plan.rotation.set(-1, 0, 0);
  cube2.position.x = 2;
  cube3.position.x = -2;
  cube4.position.x = 4;
  cube5.position.set(-4, 0, 0);
  cube6.position.set(-4, 1, -1.5);
  scene.add(plan);
  scene.add(cube2);
  scene.add(cube3);
  scene.add(cube4);
  scene.add(cube5);
  scene.add(cube6);

  
  // 动画循环
  const animate = () => {
    if (!isActive) return; // 如果不活跃，停止渲染

    animationFrameId = requestAnimationFrame(animate);

    renderer.render(scene, camera);
  };
  animate();

  // 处理窗口大小变化
  const handleResize = () => {
    if (!container.value) return;

    const width = container.value.clientWidth;
    const height = container.value.clientHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  };
  window.addEventListener("resize", handleResize);

  // 返回清理函数
  return () => {
    window.removeEventListener("resize", handleResize);
  };
};

// 监听路由变化
watch(
  () => route.path,
  () => {
    isActive = false; // 路由变化时暂停渲染
    setTimeout(() => {
      isActive = true; // 路由完成后恢复渲染
    }, 100);
  }
);

// 组件挂载时初始化
onMounted(() => {
  const cleanup = initThree();

  // 组件卸载时清理
  onBeforeUnmount(() => {
    isActive = false;
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }
    if (renderer) {
      renderer.dispose();
      renderer.forceContextLoss();
      renderer.domElement.remove();
    }
    if (scene) {
      scene.clear();
    }
    cleanup(); // 清理resize监听器
  });
});
</script>

<style scoped>
.three-container {
  width: 100%;
  height: 400px;
  z-index: -1;
}
</style>
