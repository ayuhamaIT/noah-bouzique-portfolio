import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";

import { EarthModel } from "./EarthModel";
import HeroLights from "./HeroLights";
import Particles from "./Particles";
import { Suspense } from "react";

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      <ambientLight intensity={0.5} color="#b84900" />
      <OrbitControls
        enablePan={false} 
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={5} 
        minPolarAngle={Math.PI / 5} 
        maxPolarAngle={Math.PI / 2} 
      />

      <Suspense fallback={null}>
        <HeroLights />
        <Particles count={100} />
        <group
          scale={isMobile ? 0.3 : 0.4}
          position={[0, 0, 0]}
          rotation={[0.6, -0.3, 0]}
        >
          <EarthModel />
        </group>
      </Suspense>
    </Canvas>
  );
};

export default HeroExperience;
