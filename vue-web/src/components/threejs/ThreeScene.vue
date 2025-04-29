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
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

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
  camera.position.y = 2.5;
  camera.position.x = 0;

  // 创建渲染器
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(container.value.clientWidth, container.value.clientHeight);
  renderer.setClearColor(0x000000, 1); // 背景为黑色
  container.value.appendChild(renderer.domElement);

  // 添加轨道控制器
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.screenSpacePanning = false;
  controls.minDistance = 1;
  controls.maxDistance = 5;
  controls.maxPolarAngle = Math.PI / 2.5;

  // 1. 环境光（AmbientLight）- 均匀照亮场景中的所有物体
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // 更亮的环境光
  scene.add(ambientLight);

  // 添加方向光
  const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 0.1);
  directionalLight.position.set(5, 5, 5);
  scene.add(directionalLight);

// 创建一个正面平行光
const frontLight = new THREE.DirectionalLight(0xffffff, 1.5); // 颜色和强度
frontLight.position.set(0, 2, 5); // 在摄像机前方稍高一点
frontLight.target.position.set(0, 1, 0); // 指向场景中心（或你的模型中心）
scene.add(frontLight);
scene.add(frontLight.target);

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
      model.position.set(0, 1, -1);

      // 调整模型旋转
      model.rotation.set(0, 0, 0);

      // 添加模型到场景
      scene.add(model);

      // 修改动画循环函数
      const animate = () => {
        if (!isActive) return; // 如果不活跃，停止渲染
        model.rotation.y += 0.01; // 每帧旋转0.01弧度
        controls.update(); // 更新控制器
        animationFrameId = requestAnimationFrame(animate);
        renderer.render(scene, camera);
      };

      // 开始动画
      animate();
    }
  );
// 在地面上方添加一个朝下的白色大平面
const whitePlaneGeo = new THREE.PlaneGeometry(100, 200);
const whitePlaneMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
const whitePlane = new THREE.Mesh(whitePlaneGeo, whitePlaneMat);
whitePlane.position.set(0, 10, 0); // y=10
whitePlane.rotation.x = Math.PI / 2; // 朝下
scene.add(whitePlane);
// 创建玻璃反射地面
const groundGeo = new THREE.PlaneGeometry(40, 205);
const groundMirror = new Reflector(groundGeo, {
  clipBias: 0.003,
  textureWidth: container.value.clientWidth * window.devicePixelRatio,
  textureHeight: container.value.clientHeight * window.devicePixelRatio,
  color: 0xffffff, // 地面为白色
  recursion: 1,
  // blur 参数需要 ReflectorBlur（可选，见下方扩展）
});
groundMirror.position.set(0, 0, 0);
groundMirror.rotation.x = -Math.PI / 2;
scene.add(groundMirror);

// 1. 创建主图标
const iconTexture = new THREE.TextureLoader().load(
  '/img3d/css.png',
);
const iconMaterial = new THREE.MeshPhongMaterial({ map: iconTexture, transparent: true,side: THREE.DoubleSide });
const iconPlane = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), iconMaterial);
iconPlane.position.set(-3, 1, 0); 
scene.add(iconPlane);



// 3. 创建vue图标
const iconVueTexture = new THREE.TextureLoader().load(
'/img3d/vue.png',
)
const iconVueMaterial = new THREE.MeshPhongMaterial({map:iconVueTexture,transparent:true,side: THREE.DoubleSide})
const iconVuePlan = new THREE.Mesh(new THREE.PlaneGeometry(0.9,0.9),iconVueMaterial)
iconVuePlan.position.set(3,1,0)
scene.add(iconVuePlan)



// 4. 创建js图标
const iconJsTexture = new THREE.TextureLoader().load(
  '/img3d/js.png',
)
const iconJsMaterial = new THREE.MeshPhongMaterial({map:iconJsTexture,transparent:true,side: THREE.DoubleSide})
const iconJsPlan = new THREE.Mesh(new THREE.PlaneGeometry(0.9,0.9),iconJsMaterial)
iconJsPlan.position.set(1.5,1,0)
scene.add(iconJsPlan)



// 5. 创建html图标
const iconHtmlTexture = new THREE.TextureLoader().load(
  '/img3d/HTML.png',
)
const iconHtmlMaterial = new THREE.MeshPhongMaterial({map:iconHtmlTexture,transparent:true,side: THREE.DoubleSide})
const iconHtmlPlan = new THREE.Mesh(new THREE.PlaneGeometry(0.9,0.9),iconHtmlMaterial)
iconHtmlPlan.position.set(-1.5,1,0)
scene.add(iconHtmlPlan)


// 6. 创建curosr图标
const iconCursorTexture = new THREE.TextureLoader().load(
  '/img3d/cursor-ai.png',
)
const iconCursorMaterial = new THREE.MeshPhongMaterial({map:iconCursorTexture,transparent:true,side: THREE.DoubleSide})
const iconCursorPlan = new THREE.Mesh(new THREE.PlaneGeometry(0.9,0.9),iconCursorMaterial)
iconCursorPlan.position.set(-3.5,1,-2.5)
scene.add(iconCursorPlan)

// 7. 创建git图标
const iconGitTexture = new THREE.TextureLoader().load(
  '/img3d/git.png',
)
const iconGitMaterial = new THREE.MeshPhongMaterial({map:iconGitTexture,transparent:true,side: THREE.DoubleSide})
const iconGitPlan = new THREE.Mesh(new THREE.PlaneGeometry(0.9,0.9),iconGitMaterial)
iconGitPlan.position.set(-1.5,1,-2.5)
scene.add(iconGitPlan)
//8.创建vscode图标
const iconVscodeTexture = new THREE.TextureLoader().load(
  '/img3d/vscode.png',
)
const iconVscodeMaterial = new THREE.MeshPhongMaterial({map:iconVscodeTexture,transparent:true,side: THREE.DoubleSide})
const iconVscodePlan = new THREE.Mesh(new THREE.PlaneGeometry(0.9,0.9),iconVscodeMaterial)
iconVscodePlan.position.set(0,1,-3.5)
// scene.add(iconVscodePlan)
//9.创建Google图标
const iconGoogleTexture = new THREE.TextureLoader().load(
  '/img3d/google.png',
)
const iconGoogleMaterial = new THREE.MeshPhongMaterial({map:iconGoogleTexture,transparent:true,side: THREE.DoubleSide})
const iconGooglePlan = new THREE.Mesh(new THREE.PlaneGeometry(0.9,0.9),iconGoogleMaterial)
iconGooglePlan.position.set(1.5,1,-2.5)
scene.add(iconGooglePlan)
//10.创建MySQL图标
const iconMysqlTexture = new THREE.TextureLoader().load(
  '/img3d/mysql.png',
)
const iconMysqlMaterial = new THREE.MeshPhongMaterial({map:iconMysqlTexture,transparent:true,side: THREE.DoubleSide})
const iconMysqlPlan = new THREE.Mesh(new THREE.PlaneGeometry(0.9,0.9),iconMysqlMaterial)
iconMysqlPlan.position.set(3,1,-2.5)
scene.add(iconMysqlPlan)







  // // 创建纹理加载器
  // const textureLoader = new THREE.TextureLoader();
  // const texture = textureLoader.load(
  //   "/img3d/vue.png",
  //   (texture) => {
  //     console.log("纹理加载成功");
  //     texture.encoding = THREE.sRGBEncoding;
  //   },
  //   undefined,
  //   (error) => {
  //     console.error("纹理加载失败", error);
  //   }
  // );

  // const texture2 = textureLoader.load(
  //   "/img3d/js.png",
  //   (texture) => {
  //     console.log("纹理加载成功");
  //     texture.encoding = THREE.sRGBEncoding;
  //   },
  //   undefined,
  //   (error) => {
  //     console.error("纹理加载失败", error);
  //   }
  // );

  // const texture3 = textureLoader.load(
  //   "/img3d/HTML.png",
  //   (texture) => {
  //     console.log("纹理加载成功");
  //     texture.encoding = THREE.sRGBEncoding;
  //   },
  //   undefined,
  //   (error) => {
  //     console.error("纹理加载失败", error);
  //   }
  // );

  // const texture4 = textureLoader.load(
  //   "/img3d/css.png",
  //   (texture) => {
  //     console.log("纹理加载成功");
  //     texture.encoding = THREE.sRGBEncoding;
  //   },
  //   undefined,
  //   (error) => {
  //     console.error("纹理加载失败", error);
  //   }
  // );

  // // 添加物体
  // const geometry = new THREE.PlaneGeometry(1, 1); // 创建一个平面，宽高为 1
  // const geometry2 = new THREE.PlaneGeometry(12, 20);

  // const material = new THREE.MeshPhongMaterial({

  //   shininess: 50,
  //   roughness: 0.1, // 越小越光滑
  //   transmission: 0.9, // 透光率
  //   thickness: 0.5, // 厚度
  //   clearcoat: 1.0, // 清漆层强度
  //   clearcoatRoughness: 0.1, // 清漆层粗糙度
  // });

  // const materialVue = new THREE.MeshPhongMaterial({
  //   // map: texture, // 将加载的纹理赋值给 map
  //   // transparent: true, // 如果图片有透明背景（如 PNG），需要开启 transparent
  //   side: THREE.DoubleSide, // 可选：让材质双面可见
  //   opacity: 1, // 设置整体透明度
  // });

  // const materialJs = new THREE.MeshBasicMaterial({
  //   map: texture2, // 将加载的纹理赋值给 map
  //   transparent: true, // 如果图片有透明背景（如 PNG），需要开启 transparent
  //   side: THREE.DoubleSide, // 可选：让材质双面可见
  //   blending: THREE.MultiplyBlending, // 使用乘法混合模式
  //   opacity: 1, // 设置整体透明度
  // });

  // const materialHTML = new THREE.MeshBasicMaterial({
  //   map: texture3, // 将加载的纹理赋值给 map
  //   transparent: true, // 如果图片有透明背景（如 PNG），需要开启 transparent
  //   side: THREE.DoubleSide, // 可选：让材质双面可见
  //   blending: THREE.MultiplyBlending, // 使用乘法混合模式
  //   opacity: 1, // 设置整体透明度
  // });

  // const materialcss = new THREE.MeshBasicMaterial({
  //   map: texture4, // 将加载的纹理赋值给 map
  //   transparent: false, // 如果图片有透明背景（如 PNG），需要开启 transparent
  //   side: THREE.DoubleSide, // 可选：让材质双面可见
  //   blending: THREE.MultiplyBlending, // 使用乘法混合模式
  //   opacity: 1, // 设置整体透明度
  // });

  // // const plan = new THREE.Mesh(geometry2, material);
  // const cube2 = new THREE.Mesh(geometry, materialVue);
  // const cube3 = new THREE.Mesh(geometry, materialJs);
  // const cube4 = new THREE.Mesh(geometry, materialcss);
  // const cube5 = new THREE.Mesh(geometry, materialHTML);
  // const cube6 = new THREE.Mesh(geometry, materialHTML);
  // const cube7 = new THREE.Mesh(geometry, materialHTML);
  // // plan.position.set(0, -1, 0);
  // // plan.rotation.set(-1, 0, 0);
  // groundMirror.position.set(0, -2, 0);
  // groundMirror.rotation.x = -Math.PI / 2.5;

  // cube2.position.x = 2;
  // cube3.position.x = -2;
  // cube4.position.x = 4;
  // cube5.position.set(-4, 0, 0);
  // cube6.position.set(-4, 1, -1.5);
  // cube7.position.set(-4, 2, -3);
  // // scene.add(plan);
  // scene.add(cube2);
  // scene.add(cube3);
  // scene.add(cube4);
  // scene.add(cube5);
  // scene.add(cube6);
  // scene.add(cube7);
  // scene.add(groundMirror);
  // 动画循环
  const animate = () => {
    if (!isActive) return; // 如果不活跃，停止渲染

    controls.update(); // 更新控制器
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
