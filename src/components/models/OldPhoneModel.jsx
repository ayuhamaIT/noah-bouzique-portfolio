import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const PhoneModel = ({ mouseX, mouseY }) => {
  const group = useRef();
  const { scene } = useGLTF("/models/old_phone.glb");

  useFrame(() => {
    if (group.current) {
      // Rotation basée sur la position de la souris
      group.current.rotation.y = mouseX * 0.5;
      group.current.rotation.x = mouseY * 0.5;
    }
  });
  // Activer les ombres sur tous les meshes
  scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
  return (
    <primitive
      ref={group}
      object={scene.clone()}
      scale={0.005}
      position={[0, -0.2, 0]}
    />
  );
};

const OldPhoneModel = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;

        // Normaliser entre -1 et 1
        setMouseX((x - 0.5) * 2);
        setMouseY((y - 0.5) * 2);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 2.5], fov: 50 }}
        style={{ width: "100%", height: "100%" }}
        shadows
      >
        <ambientLight intensity={0.5} />
        {/* Lumière directionnelle réaliste pour les ombres */}
        <directionalLight
          position={[8, 12, 8]}
          intensity={1.8}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <PhoneModel mouseX={mouseX} mouseY={mouseY} />
        {/* Plan pour recevoir l'ombre */}
        <mesh
          receiveShadow
          position={[0, -1.2, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <planeGeometry args={[15, 15]} />
          <shadowMaterial transparent opacity={0.5} />
        </mesh>
      </Canvas>
    </div>
  );
};

export default OldPhoneModel;
