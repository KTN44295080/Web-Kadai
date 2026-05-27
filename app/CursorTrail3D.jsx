"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const TRAIL_LENGTH = 26;
const SPLASH_LENGTH = 18;
const INK_COLORS = [0x008ea5, 0x8ac83f, 0xd43d79, 0xd7aa43];

function createInkTexture() {
  const size = 256;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  const center = size / 2;

  ctx.clearRect(0, 0, size, size);

  const gradient = ctx.createRadialGradient(center, center, 4, center, center, center * 0.96);
  gradient.addColorStop(0, "rgba(255,255,255,0.62)");
  gradient.addColorStop(0.36, "rgba(255,255,255,0.34)");
  gradient.addColorStop(0.68, "rgba(255,255,255,0.12)");
  gradient.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = gradient;
  ctx.beginPath();

  const points = 72;
  for (let i = 0; i <= points; i += 1) {
    const angle = (i / points) * Math.PI * 2;
    const wobble =
      0.84 +
      Math.sin(angle * 3.1) * 0.08 +
      Math.sin(angle * 7.3 + 0.9) * 0.05 +
      Math.cos(angle * 11.7) * 0.035;
    const radius = center * wobble;
    const x = center + Math.cos(angle) * radius;
    const y = center + Math.sin(angle) * radius;

    if (i === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  }

  ctx.closePath();
  ctx.fill();

  for (let i = 0; i < 18; i += 1) {
    const angle = (i / 18) * Math.PI * 2 + Math.sin(i) * 0.42;
    const distance = center * (0.58 + (i % 5) * 0.075);
    const radius = 9 + (i % 4) * 5;
    const x = center + Math.cos(angle) * distance;
    const y = center + Math.sin(angle) * distance;
    const dot = ctx.createRadialGradient(x, y, 1, x, y, radius);
    dot.addColorStop(0, "rgba(255,255,255,0.22)");
    dot.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = dot;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;
  return texture;
}

export default function CursorTrail3D() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!canvas) {
      return undefined;
    }

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.65));
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, window.innerWidth / window.innerHeight, 0.1, 160);
    camera.position.z = 54;

    const texture = createInkTexture();
    const group = new THREE.Group();
    scene.add(group);

    const trail = Array.from({ length: TRAIL_LENGTH }, (_, index) => {
      const material = new THREE.SpriteMaterial({
        map: texture,
        color: INK_COLORS[index % INK_COLORS.length],
        transparent: true,
        opacity: 0,
        depthWrite: false,
      });
      const sprite = new THREE.Sprite(material);
      sprite.visible = false;
      sprite.userData.seed = index * 0.37;
      group.add(sprite);
      return sprite;
    });

    const splashes = Array.from({ length: SPLASH_LENGTH }, (_, index) => {
      const material = new THREE.SpriteMaterial({
        map: texture,
        color: INK_COLORS[index % INK_COLORS.length],
        transparent: true,
        opacity: 0,
        depthWrite: false,
      });
      const sprite = new THREE.Sprite(material);
      sprite.visible = false;
      sprite.userData = {
        active: false,
        start: 0,
        duration: 920,
        baseScale: 1,
        spin: 1,
      };
      group.add(sprite);
      return sprite;
    });

    const target = new THREE.Vector3(0, 0, 0);
    const lastTarget = new THREE.Vector3(0, 0, 0);
    const positions = Array.from({ length: TRAIL_LENGTH }, () => new THREE.Vector3(0, 0, 0));
    let pointerActive = false;
    let hasPointer = false;
    let splashIndex = 0;
    let idleTimer = 0;
    let frameId = 0;

    const resize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight, false);
    };

    const toWorld = (clientX, clientY) => {
      const distance = camera.position.z;
      const viewportHeight = 2 * Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2) * distance;
      const viewportWidth = viewportHeight * camera.aspect;
      return new THREE.Vector3(
        (clientX / window.innerWidth - 0.5) * viewportWidth,
        -(clientY / window.innerHeight - 0.5) * viewportHeight,
        0,
      );
    };

    const setTargetFromPointer = (event) => {
      lastTarget.copy(target);
      target.copy(toWorld(event.clientX, event.clientY));
      pointerActive = true;
      hasPointer = true;

      window.clearTimeout(idleTimer);
      if (event.pointerType !== "mouse") {
        idleTimer = window.setTimeout(() => {
          pointerActive = false;
        }, 180);
      }
    };

    const emitSplash = (event) => {
      setTargetFromPointer(event);

      for (let i = 0; i < 4; i += 1) {
        const splash = splashes[splashIndex % splashes.length];
        splashIndex += 1;
        splash.position.copy(target);
        splash.position.x += (i - 1.5) * 0.28;
        splash.position.y += Math.sin(i * 1.8) * 0.2;
        splash.position.z = 1.4 + i * 0.08;
        splash.scale.setScalar(1.2 + i * 0.22);
        splash.material.color.setHex(INK_COLORS[(splashIndex + i) % INK_COLORS.length]);
        splash.material.opacity = 0.16;
        splash.material.rotation = event.timeStamp * 0.001 + i * 0.8;
        splash.visible = true;
        splash.userData.active = true;
        splash.userData.start = performance.now();
        splash.userData.duration = 820 + i * 130;
        splash.userData.baseScale = 1.4 + i * 0.42;
        splash.userData.spin = i % 2 === 0 ? 1 : -1;
      }
    };

    const hideTrail = () => {
      pointerActive = false;
      trail.forEach((sprite) => {
        sprite.visible = false;
        sprite.material.opacity = 0;
      });
    };

    const animate = (time) => {
      if (hasPointer) {
        positions[0].lerp(target, pointerActive ? 0.25 : 0.08);

        for (let index = 1; index < positions.length; index += 1) {
          positions[index].lerp(positions[index - 1], 0.22);
        }
      }

      const travel = Math.min(1, target.distanceTo(lastTarget) * 0.08);

      trail.forEach((sprite, index) => {
        const visible = hasPointer && (pointerActive || index < 14);
        const fade = Math.max(0, 1 - index / TRAIL_LENGTH);
        const pulse = 1 + Math.sin(time * 0.002 + sprite.userData.seed * 8) * 0.08;
        const width = (1.05 + fade * 1.95 + travel * 0.8) * pulse;
        const height = width * (0.58 + (index % 4) * 0.08);

        sprite.visible = visible;
        sprite.position.copy(positions[index]);
        sprite.position.z = -index * 0.12;
        sprite.scale.set(width, height, 1);
        sprite.material.opacity = visible ? Math.max(0.01, (reduceMotion ? 0.07 : 0.105) * fade) : 0;
        sprite.material.rotation = time * 0.00035 * (index % 2 === 0 ? 1 : -1) + sprite.userData.seed;
      });

      splashes.forEach((splash) => {
        if (!splash.userData.active) {
          return;
        }

        const progress = Math.min(1, (performance.now() - splash.userData.start) / splash.userData.duration);
        const eased = 1 - Math.pow(1 - progress, 3);
        const scale = splash.userData.baseScale * (1 + eased * 2.8);
        splash.scale.set(scale, scale * 0.72, 1);
        splash.material.opacity = Math.max(0, (reduceMotion ? 0.12 : 0.18) * Math.pow(1 - progress, 1.8));
        splash.material.rotation += 0.006 * splash.userData.spin;

        if (progress >= 1) {
          splash.userData.active = false;
          splash.visible = false;
          splash.material.opacity = 0;
        }
      });

      renderer.render(scene, camera);
      frameId = window.requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", setTargetFromPointer, { passive: true });
    window.addEventListener("pointerdown", emitSplash, { passive: true });
    window.addEventListener("pointerleave", hideTrail);
    frameId = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.clearTimeout(idleTimer);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", setTargetFromPointer);
      window.removeEventListener("pointerdown", emitSplash);
      window.removeEventListener("pointerleave", hideTrail);
      texture.dispose();
      trail.forEach((sprite) => sprite.material.dispose());
      splashes.forEach((sprite) => sprite.material.dispose());
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="cursorTrailCanvas" aria-hidden="true" />;
}
