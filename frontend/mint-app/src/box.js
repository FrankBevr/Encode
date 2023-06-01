import * as THREE from 'three';
import { useRef, useEffect } from 'react';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const Box = function() {
  const boxTag = useRef()
  const signTag = useRef()


  useEffect(() => {
    let anim
    let wresize
    // let wmouse

    if (boxTag.current) {
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true })
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, boxTag.current.clientWidth / boxTag.current.clientHeight, 0.1, 500)
      camera.position.z = 0.5

      renderer.setSize(boxTag.current.clientWidth, boxTag.current.clientHeight)
      renderer.setClearColor(0x4e78f5);

      //GLB BOX
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
      scene.add(ambientLight)
      const loader = new GLTFLoader();
      loader.load('/inky2.glb', function(gltf) {
        scene.add(gltf.scene);
      }, undefined, function(error) {
        console.error(error);
      });

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.update();

      boxTag.current.innerHTML = ""
      boxTag.current.append(renderer.domElement)

      const animate = () => {
        renderer.render(scene, camera)
        controls.update();
        anim = requestAnimationFrame(animate)
      }

      // wresize = function() {
      //   camera.aspect = boxTag.current.clientWidth / boxTag.current.clientHeight
      //   camera.updateProjectionMatrix()
      //   renderer.setSize(boxTag.current.clientWidth, boxTag.current.clientHeight)
      // }
      //
      // window.addEventListener("resize", wresize)

      animate()
    }

    return () => {
      cancelAnimationFrame(anim)
      window.removeEventListener("resize", wresize)
    }
  }, [boxTag])

  return (
    <div className="cover">
      <div className="sign" ref={signTag}>
        <span>Just</span>
        <span className="amount">0.01</span>
        <span>SBY</span>
      </div>
      <div className="box" ref={boxTag}></div>
    </div>
  )
}

export default Box
