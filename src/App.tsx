import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import LunkanModel from './components/Lunkan3d';
import MirreModel from './components/MirreRumba';
import DoggeModel from './components/DoggePunching';

export default function App() {
  return (
    <Canvas camera={{ position: [2, 0, 12.25], fov: 15 }}>
      <ambientLight intensity={1.25} />
      <ambientLight intensity={0.1} />
      <directionalLight intensity={0.4} />
      <Suspense fallback={null}>
        <LunkanModel position={[-1, -0.9, 0]} />
        <MirreModel position={[0.2, -0.9, 0]} />
        <DoggeModel position={[1.2, -0.9, 0]} />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
