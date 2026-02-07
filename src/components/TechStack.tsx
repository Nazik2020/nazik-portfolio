import * as THREE from "three";
import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import {
  BallCollider,
  Physics,
  RigidBody,
  CylinderCollider,
  RapierRigidBody,
} from "@react-three/rapier";

// User's tech list
const techList = [
  "Python", "Power BI", "Tableau", "Pandas", "NumPy", "Matplotlib",
  "MySQL", "SQL", "R", "Jupyter", "Anaconda", "Git/GitHub",
  "VS Code", "Google Colab", "scikit-learn", "React Native",
  "TypeScript", "Django", "PHP", "Azure"
];

// Helper to create text texture dynamically
const createTextTexture = (text: string) => {
  const canvas = document.createElement("canvas");
  const size = 512;
  canvas.width = size;
  canvas.height = size;
  const context = canvas.getContext("2d");

  if (context) {
    const hue = Math.floor(Math.random() * 360);

    // Colorful background
    context.fillStyle = `hsl(${hue}, 40%, 25%)`;
    context.beginPath();
    context.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
    context.fill();

    // Lighter border
    context.strokeStyle = `hsl(${hue}, 60%, 60%)`;
    context.lineWidth = 15;
    context.stroke();

    // Text settings
    context.fillStyle = "#ffffff";
    context.textAlign = "center";
    context.textBaseline = "middle";

    // Responsive font size based on text length
    const fontSize = text.length > 8 ? 50 : 70;
    context.font = `bold ${fontSize}px Arial`;

    // Scale down very long text further if needed
    if (text.length > 12) {
      context.font = "bold 40px Arial";
    }

    context.fillText(text, size / 2, size / 2);
  }
  return new THREE.CanvasTexture(canvas);
};

const sphereGeometry = new THREE.SphereGeometry(1, 28, 28);

type SphereProps = {
  vec?: THREE.Vector3;
  scale: number;
  r?: typeof THREE.MathUtils.randFloatSpread;
  material: THREE.MeshPhysicalMaterial;
  isActive: boolean;
};

// Component for individual sphere
function SphereGeo({
  vec = new THREE.Vector3(),
  scale,
  r = THREE.MathUtils.randFloatSpread,
  material,
  isActive,
}: SphereProps) {
  const api = useRef<RapierRigidBody | null>(null);

  useFrame((_state, delta) => {
    if (!isActive) return;
    delta = Math.min(0.1, delta);
    const impulse = vec
      .copy(api.current!.translation())
      .normalize()
      .multiply(
        new THREE.Vector3(
          -50 * delta * scale,
          -150 * delta * scale,
          -50 * delta * scale
        )
      );

    api.current?.applyImpulse(impulse, true);
  });

  return (
    <RigidBody
      linearDamping={0.75}
      angularDamping={0.15}
      friction={0.2}
      position={[r(20), r(20) - 25, r(20) - 10]}
      ref={api}
      colliders={false}
    >
      <BallCollider args={[scale]} />
      <CylinderCollider
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, 1.2 * scale]}
        args={[0.15 * scale, 0.275 * scale]}
      />
      <mesh
        castShadow
        receiveShadow
        scale={scale}
        geometry={sphereGeometry}
        material={material}
        rotation={[0.3, 1, 1]}
      />
    </RigidBody>
  );
}

type PointerProps = {
  vec?: THREE.Vector3;
  isActive: boolean;
};

function Pointer({ vec = new THREE.Vector3(), isActive }: PointerProps) {
  const ref = useRef<RapierRigidBody>(null);

  useFrame(({ pointer, viewport }) => {
    if (!isActive) return;
    const targetVec = vec.lerp(
      new THREE.Vector3(
        (pointer.x * viewport.width) / 2,
        (pointer.y * viewport.height) / 2,
        0
      ),
      0.2
    );
    ref.current?.setNextKinematicTranslation(targetVec);
  });

  return (
    <RigidBody
      position={[100, 100, 100]}
      type="kinematicPosition"
      colliders={false}
      ref={ref}
    >
      <BallCollider args={[2]} />
    </RigidBody>
  );
}

const TechStack = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const workElem = document.getElementById("work");
      if (workElem) {
        const threshold = workElem.getBoundingClientRect().top;
        setIsActive(scrollY > threshold);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    // Add listener to nav links to re-check after scroll animation
    document.querySelectorAll(".header a").forEach((elem) => {
      const element = elem as HTMLAnchorElement;
      element.addEventListener("click", () => {
        const interval = setInterval(() => {
          handleScroll();
        }, 10);
        setTimeout(() => {
          clearInterval(interval);
        }, 1000);
      });
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Generate materials for each tech item with unique colors/text
  const materials = useMemo(() => {
    return techList.map((tech) => {
      const texture = createTextTexture(tech);
      return new THREE.MeshPhysicalMaterial({
        map: texture,
        emissive: "#ffffff",
        emissiveMap: texture,
        emissiveIntensity: 0.2,
        metalness: 0.5,
        roughness: 0.7,
        clearcoat: 0.1,
      });
    });
  }, []); // Generate once on mount

  return (
    <div className="techstack">
      <h2>My Data Stack</h2>

      {/* 3D Canvas - Visible on Mobile & Desktop */}
      <Canvas
        shadows
        gl={{ alpha: true, stencil: false, depth: false, antialias: false }}
        camera={{ position: [0, 0, 20], fov: 32.5, near: 1, far: 100 }}
        onCreated={(state) => (state.gl.toneMappingExposure = 1.5)}
        className="tech-canvas"
        style={{ position: 'relative', zIndex: 2 }}
      >
        <ambientLight intensity={1} />
        <spotLight
          position={[20, 20, 25]}
          penumbra={1}
          angle={0.2}
          color="white"
          castShadow
          shadow-mapSize={[512, 512]}
        />
        <directionalLight position={[0, 5, -4]} intensity={2} />

        <Physics gravity={[0, 0, 0]}>
          <Pointer isActive={isActive} />

          {/* Map through tech list to create a sphere for each tool */}
          {techList.map((_, i) => (
            <SphereGeo
              key={i}
              vec={new THREE.Vector3()}
              scale={[0.8, 1, 0.9, 1.1, 0.8][Math.floor(Math.random() * 5)]}
              r={THREE.MathUtils.randFloatSpread}
              material={materials[i]} // Assign specific material for this tech
              isActive={isActive}
            />
          ))}
        </Physics>

        <Environment
          files={import.meta.env.BASE_URL + "models/char_enviorment.hdr"}
          environmentIntensity={0.5}
          environmentRotation={[0, 4, 2]}
        />
        <EffectComposer enableNormalPass={false}>
          <N8AO color="#0f002c" aoRadius={2} intensity={1.15} />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default TechStack;
