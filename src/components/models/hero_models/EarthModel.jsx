import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function EarthModel(props) {
  const { nodes, materials } = useGLTF("/models/earth.glb");

  return (
    <group {...props} dispose={null}>
      {/* Render all meshes from the earth.glb model */}
      {Object.entries(nodes).map(([nodeName, node]) => {
        if (node.geometry) {
          const materialKey = node.material?.name || "default";
          const material = materials[materialKey] || materials.default;

          return (
            <mesh
              key={nodeName}
              geometry={node.geometry}
              material={material}
              position={node.position}
              rotation={node.rotation}
              scale={node.scale}
            />
          );
        }
        return null;
      })}
    </group>
  );
}

useGLTF.preload("/models/earth.glb");
