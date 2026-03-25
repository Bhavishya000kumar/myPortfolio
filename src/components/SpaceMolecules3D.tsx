import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, Float, Sparkles } from "@react-three/drei";
import * as THREE from "three";

// A single abstract molecule structure (connected atoms)
const Molecule = ({ position, rotationSpeed, scale, color }: { position: [number, number, number], rotationSpeed: number, scale: number, color: string }) => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = clock.elapsedTime * rotationSpeed;
      groupRef.current.rotation.y = clock.elapsedTime * rotationSpeed * 1.5;
      groupRef.current.rotation.z = clock.elapsedTime * rotationSpeed * 0.5;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1.5} floatIntensity={1.5} position={position}>
      <group ref={groupRef} scale={scale}>
        {/* Core Atom */}
        <mesh>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.2} roughness={0.2} metalness={0.8} />
        </mesh>
        
        {/* Orbital Atom 1 */}
        <mesh position={[1.5, 1.5, 0]}>
          <sphereGeometry args={[0.25, 32, 32]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.8} />
        </mesh>
        {/* Bond 1 */}
        <mesh position={[0.75, 0.75, 0]} rotation={[0, 0, -Math.PI / 4]}>
          <cylinderGeometry args={[0.05, 0.05, 2.1, 8]} />
          <meshStandardMaterial color={color} transparent opacity={0.6} />
        </mesh>

        {/* Orbital Atom 2 */}
        <mesh position={[-1.2, 0.8, 1]}>
          <sphereGeometry args={[0.3, 32, 32]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.8} />
        </mesh>
        {/* Bond 2 */}
        <mesh position={[-0.6, 0.4, 0.5]} rotation={[0, -Math.PI / 4, Math.PI / 6]}>
          <cylinderGeometry args={[0.05, 0.05, 1.8, 8]} />
          <meshStandardMaterial color={color} transparent opacity={0.6} />
        </mesh>

        {/* Orbital Atom 3 */}
        <mesh position={[0, -1.8, -0.5]}>
          <sphereGeometry args={[0.2, 32, 32]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.8} />
        </mesh>
        {/* Bond 3 */}
        <mesh position={[0, -0.9, -0.25]} rotation={[Math.PI / 6, 0, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 1.9, 8]} />
          <meshStandardMaterial color={color} transparent opacity={0.6} />
        </mesh>
      </group>
    </Float>
  );
};

// Constellation Lines (Connecting random points in space)
const Constellation = () => {
  const points = useMemo(() => {
    const pts = [];
    for (let i = 0; i < 40; i++) {
      pts.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20
        )
      );
    }
    return pts;
  }, []);

  const lineGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry().setFromPoints(points);
    // Connect some vertices to form a web
    const indices = [];
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        if (points[i].distanceTo(points[j]) < 6) {
          indices.push(i, j);
        }
      }
    }
    geo.setIndex(indices);
    return geo;
  }, [points]);

  const groupRef = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.elapsedTime * 0.02;
      groupRef.current.rotation.x = clock.elapsedTime * 0.01;
    }
  });

  return (
    <group ref={groupRef}>
      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial color="#3b82f6" transparent opacity={0.15} />
      </lineSegments>
      {points.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshBasicMaterial color="#60a5fa" transparent opacity={0.6} />
        </mesh>
      ))}
    </group>
  );
};

export const SpaceMolecules3D = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-background/80">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 60 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={typeof window !== "undefined" ? Math.min(2, window.devicePixelRatio) : 1}
        performance={{ min: 0.5 }}
      >
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={2} color="#8b5cf6" />
        
        <group>
          {/* Deep Space Background */}
          <Stars radius={100} depth={50} count={6000} factor={5} saturation={0} fade speed={1.5} />
          
          {/* Molecules */}
          <Molecule position={[-6, 3, -5]} rotationSpeed={0.2} scale={1.5} color="#3b82f6" />
          <Molecule position={[7, -2, -8]} rotationSpeed={0.15} scale={2} color="#8b5cf6" />
          <Molecule position={[-4, -5, -4]} rotationSpeed={0.3} scale={1.2} color="#10b981" />
          <Molecule position={[5, 6, -6]} rotationSpeed={0.25} scale={1.8} color="#06b6d4" />
          
          {/* Constellation Web */}
          <Constellation />

          {/* Glowing Ambient Particles */}
          <Sparkles count={200} scale={30} size={1.5} color="#a8a29e" speed={0.2} opacity={0.4} />
          <Sparkles count={100} scale={30} size={2.5} color="#8b5cf6" speed={0.4} opacity={0.6} />
        </group>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.8}
          maxPolarAngle={Math.PI / 2 + 0.3}
          minPolarAngle={Math.PI / 2 - 0.3}
        />
      </Canvas>
    </div>
  );
};
