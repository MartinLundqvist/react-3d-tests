import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Html, OrbitControls } from '@react-three/drei';
import LunkanModel from './components/Lunkan3d';
import MirreModel from './components/MirreRumba';
import DoggeModel from './components/DoggePunching';
import { PerspectiveCamera, Vector3 } from 'three';
import { Loader } from './components/Loader';

const initialPosition = {
  position: new Vector3(2, 0, 12.25),
  fov: 15,
  near: 0.1,
  far: 1000,
};

// const widthToZThresholds = {
//   815: 12.25,
//   585: 22.25,
//   450: 32.35,
//   300: 42.25,
// };

const setNewZ = (width: number): number => {
  if (width > 815) return 12.25;
  if (width > 585) return 22.25;
  if (width > 450) return 32.25;
  if (width > 300) return 42.25;
  return 50;
};

// const setNewX = (width: number): number => {
//   if (width > 815) return 2;
//   if (width > 585) return 2;
//   if (width > 450) return 1;
//   if (width > 300) return 1;
//   return 0;
// };

export default function App() {
  // const [position, setPosition] = useState(initialPosition);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const camera = useRef(new PerspectiveCamera());

  // const LunkanModel = lazy(() => import('./components/Lunkan3d'));
  // const MirreModel = lazy(() => import('./components/MirreRumba'));
  // const DoggeModel = lazy(() => import('./components/DoggePunching'));

  // useEffect(() => {
  //   const handleResize = () => {
  //     const width = window.outerWidth;
  //     const height = window.outerHeight;
  //     if (canvasRef.current) {
  //       canvasRef.current.width = width;
  //       // canvasRef.current.height = height;
  //     }

  //     const canvasHeight = canvasRef.current?.offsetHeight || 1;
  //     const canvasWidth = canvasRef.current?.offsetWidth || 1;
  //     camera.current.fov = initialPosition.fov;
  //     camera.current.aspect = canvasWidth / canvasHeight;
  //     camera.current.position.set(
  //       initialPosition.position.x,
  //       initialPosition.position.y,
  //       setNewZ(width)
  //     );
  //     camera.current.updateProjectionMatrix();
  //     // camera.current.position.z = setNewZ(width);
  //     // camera.current.updateProjectionMatrix();
  //     // console.log(camera.current.position);
  //     console.log(canvasRef.current);
  //   };

  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // });

  useEffect(() => {
    const height = canvasRef.current?.offsetHeight || 1;
    const width = canvasRef.current?.offsetWidth || 1;
    camera.current.fov = initialPosition.fov;
    camera.current.aspect = width / height;
    camera.current.position.set(
      initialPosition.position.x,
      initialPosition.position.y,
      setNewZ(width)
    );
    camera.current.updateProjectionMatrix();
    // console.log(camera.current);
  }, []);

  return (
    <Canvas id='canvas' ref={canvasRef} camera={camera.current}>
      <ambientLight intensity={1.25} />
      <ambientLight intensity={0.1} />
      <directionalLight intensity={0.4} />
      <Suspense
        fallback={
          <Html>
            <Loader />
          </Html>
        }
      >
        <LunkanModel position={[-1, -0.9, 0]} />
        <MirreModel position={[0.2, -0.9, 0]} />
        <DoggeModel position={[1.2, -0.9, 0]} />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
