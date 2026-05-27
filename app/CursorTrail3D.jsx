"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const TRAIL_LENGTH = 18;

export default function CursorTrail3D() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const supportsFinePointer = window.matchMedia("(pointer: fine)").matches;

    if (!canvas || !supportsFinePointer) {
      return undefined;
    }

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.8));
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, window.innerWidth / window.innerHeight, 0.1, 160);
    camera.position.z = 54;

    const group = new THREE.Group();
    scene.add(group);

    const keyLight = new THREE.PointLight(0xffffff, 2.6, 120);
    keyLight.position.set(0, 0, 36);
    scene.add(keyLight);
    scene.add(new THREE.AmbientLight(0xffffff, 1.4));

    const geometry = new THREE.SphereGeometry(1, 24, 24);
    const palette = [0x00b8d9, 0xb9f24a, 0xff4d8d, 0xffd166];
    const trail = Array.from({ length: TRAIL_LENGTH }, (_, index) => {
      const material = new THREE.MeshPhysicalMaterial({
        color: palette[index % palette.length],
        emissive: palette[index % palette.length],
        emissiveIntensity: 0.28,
        roughness: 0.28,
        metalness: 0.2,
        transparent: true,
        opacity: Math.max(0.08, 0.72 - index * 0.035),
      });
      const mesh = new THREE.Mesh(geometry, material);
      const scale = Math.max(0.16, 0.9 - index * 0.035);
      mesh.scale.setScalar(scale);
      mesh.visible = false;
      group.add(mesh);
      return mesh;
    });

    const target = new THREE.Vector3(0, 0, 0);
    const positions = Array.from({ length: TRAIL_LENGTH }, () => new THREE.Vector3(0, 0, 0));
    let pointerActive = false;
    let frameId = 0;

    const resize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight, false);
    };

    const setTargetFromPointer = (event) => {
      const distance = camera.position.z;
      const viewportHeight = 2 * Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2) * distance;
      const viewportWidth = viewportHeight * camera.aspect;
      target.x = (event.clientX / window.innerWidth - 0.5) * viewportWidth;
      target.y = -(event.clientY / window.innerHeight - 0.5) * viewportHeight;
      pointerActive = true;
    };

    const hideTrail = () => {
      pointerActive = false;
      trail.forEach((mesh) => {
        mesh.visible = false;
      });
    };

    const animate = (time) => {
      positions[0].lerp(target, pointerActive ? 0.34 : 0.08);

      for (let index = 1; index < positions.length; index += 1) {
        positions[index].lerp(positions[index - 1], 0.3);
      }

      trail.forEach((mesh, index) => {
        mesh.visible = pointerActive;
        mesh.position.copy(positions[index]);
        mesh.position.z = Math.sin(time * 0.003 + index * 0.52) * 1.2 - index * 0.22;
        mesh.rotation.x = time * 0.001 + index;
        mesh.rotation.y = time * 0.0014 + index * 0.4;
      });

      renderer.render(scene, camera);
      frameId = window.requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", setTargetFromPointer, { passive: true });
    window.addEventListener("pointerleave", hideTrail);
    frameId = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", setTargetFromPointer);
      window.removeEventListener("pointerleave", hideTrail);
      geometry.dispose();
      trail.forEach((mesh) => mesh.material.dispose());
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="cursorTrailCanvas" aria-hidden="true" />;
}
