import React, { Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, Stage, Html } from '@react-three/drei';
import { STLLoader } from 'three-stdlib';

interface STLViewerProps {
  url: string;
}

const Model = ({ url }: { url: string }) => {
  const geom = useLoader(STLLoader, url);
  return (
    <mesh geometry={geom}>
      <meshStandardMaterial color="#a0a0a0" roughness={0.3} metalness={0.7} />
    </mesh>
  );
};

export const STLViewer: React.FC<STLViewerProps> = ({ url }) => {
  return (
    <div style={{ width: '100%', height: '100%', minHeight: '300px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
      <Canvas shadows camera={{ position: [0, 0, 100], fov: 50 }}>
        <Suspense fallback={<Html center><div style={{ color: '#e0e0e0', fontFamily: 'monospace' }}>LOADING_3D_MODEL...</div></Html>}>
          <Stage environment="city" intensity={0.5}>
            <Model url={url} />
          </Stage>
        </Suspense>
        <OrbitControls makeDefault autoRotate autoRotateSpeed={2} />
      </Canvas>
    </div>
  );
};
