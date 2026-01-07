import * as THREE from "three";

const HeroLights = () => (
  <>
    <spotLight
      position={[-0.8, 1.5, 6]}
      angle={0.02}
      penumbra={0.2}
      intensity={60}
      color="white"
    />
    <spotLight
      position={[4, 5, 4]}
      angle={0.3}
      penumbra={0.5}
      intensity={40}
      color="#b84900"
    />
    <spotLight
      position={[-3, 5, 5]}
      angle={0.4}
      penumbra={1}
      intensity={60}
      color="#b84900"
    />
    <primitive
      object={new THREE.RectAreaLight("#b84900", 8, 3, 2)}
      position={[1, 3, 4]}
      rotation={[-Math.PI / 4, Math.PI / 4, 0]}
      intensity={15}
    />
    <pointLight position={[0, 1, 0]} intensity={10} color="#b84900" />
    <pointLight position={[1, 2, -2]} intensity={10} color="#006EB8" />
  </>
);

export default HeroLights;
