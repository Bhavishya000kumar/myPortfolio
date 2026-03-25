import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Html, Sparkles } from "@react-three/drei";
import * as THREE from "three";
import { Leaf, Hexagon, Component, TerminalSquare } from "lucide-react";

// Central glowing core
const CoreSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  // Breathing effect
  useFrame(({ clock }) => {
    if (meshRef.current) {
      const scale = 1 + Math.sin(clock.elapsedTime * 2) * (hovered ? 0.08 : 0.03);
      meshRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshStandardMaterial
          color={hovered ? "#8b5cf6" : "#3b82f6"} // Blue to Purple
          emissive={hovered ? "#a78bfa" : "#60a5fa"}
          emissiveIntensity={hovered ? 2 : 1}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
      {/* Glow layer */}
      <mesh>
        <sphereGeometry args={[1.65, 32, 32]} />
        <meshBasicMaterial
          color="#3b82f6"
          transparent
          opacity={0.15}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      <pointLight color="#8b5cf6" intensity={10} distance={10} />
      <Sparkles count={40} scale={5} size={2} color="#8b5cf6" speed={0.4} opacity={0.5} />
    </group>
  );
};

// Orbiting Icon Component
interface OrbitingIconProps {
  radius: number;
  speed: number;
  angleOffset: number;
  icon: React.ReactNode;
  label: string;
  color: string;
}

const OrbitingIcon = ({ radius, speed, angleOffset, icon, label, color }: OrbitingIconProps) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      const t = clock.elapsedTime * speed + angleOffset;
      groupRef.current.position.x = Math.cos(t) * radius;
      groupRef.current.position.z = Math.sin(t) * radius;
      groupRef.current.position.y = Math.sin(t * 2) * 0.5; // Slight bobbing
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={3} rotationIntensity={0.8} floatIntensity={0.8}>
        <Html transform center className="pointer-events-none">
          <div className="flex flex-col items-center justify-center gap-2">
            <div 
              className="w-16 h-16 rounded-2xl glass-panel flex items-center justify-center relative overflow-hidden backdrop-blur-md"
              style={{
                background: `linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0))`,
                border: `1px solid ${color}40`,
                boxShadow: `0 0 20px ${color}20`,
              }}
            >
              <div 
                className="absolute inset-0 opacity-20"
                style={{ background: color, filter: "blur(20px)" }}
              />
              <div className="relative z-10" style={{ color: color }}>
                {icon}
              </div>
            </div>
          </div>
        </Html>
      </Float>
    </group>
  );
};

// Background Floating Wireframes
const AbstractShape = ({ position, rotationSpeed, scale, color }: { position: [number, number, number], rotationSpeed: number, scale: number, color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.elapsedTime * rotationSpeed;
      meshRef.current.rotation.y = clock.elapsedTime * rotationSpeed * 1.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={2} floatIntensity={3} position={position}>
      <mesh ref={meshRef} scale={scale}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color={color} wireframe emissive={color} emissiveIntensity={0.4} transparent opacity={0.3} />
      </mesh>
    </Float>
  );
};

export const MernStack3D = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={typeof window !== "undefined" ? Math.min(2, window.devicePixelRatio) : 1}
        performance={{ min: 0.5 }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#8b5cf6" />
        
        <group position={[3, 0, 0]} rotation={[0.2, 0, 0]}>
          <CoreSphere />
          
          {/* Orbiting Elements */}
          {/* MongoDB */}
          <OrbitingIcon
            radius={4}
            speed={0.4}
            angleOffset={0}
            icon={<Leaf size={32} />}
            label="MongoDB"
            color="#10b981"
          />
          
          {/* Express */}
          <OrbitingIcon
            radius={4}
            speed={0.4}
            angleOffset={Math.PI / 2}
            icon={<TerminalSquare size={32} />}
            label="Express.js"
            color="#e5e7eb"
          />
          
          {/* React */}
          <OrbitingIcon
            radius={4}
            speed={0.4}
            angleOffset={Math.PI}
            icon={<Component size={32} />}
            label="React"
            color="#3b82f6"
          />
          
          {/* Node.js */}
          <OrbitingIcon
            radius={4}
            speed={0.4}
            angleOffset={(3 * Math.PI) / 2}
            icon={<Hexagon size={32} />}
            label="Node.js"
            color="#22c55e"
          />
          
          {/* Dynamic Background Wireframes */}
          <AbstractShape position={[-6, 4, -4]} rotationSpeed={0.2} scale={1.5} color="#8b5cf6" />
          <AbstractShape position={[5, -5, -6]} rotationSpeed={0.15} scale={2} color="#3b82f6" />
          <AbstractShape position={[-8, -3, -8]} rotationSpeed={0.3} scale={1.2} color="#10b981" />
          <AbstractShape position={[7, 6, -5]} rotationSpeed={0.25} scale={1.8} color="#e5e7eb" />
          
          {/* Background Grid Particles */}
          <Sparkles count={150} scale={25} size={1} color="#4ade80" speed={0.3} opacity={0.3} />
          <Sparkles count={100} scale={25} size={1.5} color="#3b82f6" speed={0.4} opacity={0.2} />
          <Sparkles count={50} scale={25} size={2} color="#8b5cf6" speed={0.5} opacity={0.4} />
          
        </group>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1.2}
          maxPolarAngle={Math.PI / 2 + 0.3}
          minPolarAngle={Math.PI / 2 - 0.3}
        />
      </Canvas>
    </div>
  );
};
