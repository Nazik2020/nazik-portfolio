import * as THREE from "three";
import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import {
  BallCollider,
  Physics,
  RigidBody,
  CylinderCollider,
  RapierRigidBody,
} from "@react-three/rapier";

// Tech List with Logo Icons (DevIcon) and Brand Colors
const techList = [
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "#3776AB" },
  { name: "Power BI", icon: null, color: "#F2C811" }, // No official simple icon on devicon
  { name: "Tableau", icon: null, color: "#E97627" },
  { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", color: "#150458" },
  { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg", color: "#013243" },
  { name: "Matplotlib", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg", color: "#11557c" }, // White logo needing dark bg? adjusting logic below
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", color: "#4479A1" },
  { name: "SQL", icon: null, color: "#00758F" },
  { name: "R", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg", color: "#276DC3" },
  { name: "Jupyter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg", color: "#F37626" },
  { name: "Anaconda", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/anaconda/anaconda-original.svg", color: "#44A833" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", color: "#F05032" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", color: "#181717" },
  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", color: "#007ACC" },
  { name: "Google Colab", icon: null, color: "#F9AB00" },
  { name: "scikit-learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg", color: "#F7931E" },
  { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "#61DAFB" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "#3178C6" },
  { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg", color: "#092E20" },
  { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", color: "#777BB4" },
  { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", color: "#0078D4" },
];

// Determine valid image URLs for loading
const imageUrls = techList.map(t => t.icon).filter(url => url !== null) as string[];

// Helper to create a texture with the logo/text "stamped" on the front
const createDecalTexture = (image: HTMLImageElement | null, text: string, color: string) => {
  const canvas = document.createElement("canvas");
  // 2:1 aspect ratio for equirectangular projection (covers whole sphere)
  canvas.width = 1024;
  canvas.height = 512;
  const context = canvas.getContext("2d");

  if (context) {
    // 1. Fill entire ball with white
    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, canvas.width, canvas.height);

    // 2. Determine "front" area
    // For standard UV mapping, the center of the image maps to the "front" (or back, depending on rotation).
    // Safest is center: x=512, y=256.

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    if (image) {
      // Draw Logo Image
      // Scale it down so it doesn't wrap around the poles
      // 250px is about 1/4 of width (90 degrees), perfect for a "spot" logo
      const size = 250;
      context.drawImage(image, centerX - size / 2, centerY - size / 2, size, size);
    } else {
      // Draw Text
      context.fillStyle = color;
      context.textAlign = "center";
      context.textBaseline = "middle";

      // Large, clear font
      // 140px on 512px height is roughly equivalent to previous ratios but higher res
      const fontSize = text.length > 8 ? 120 : 160;
      context.font = `bold ${fontSize}px Arial`;

      if (text.length > 12) {
        context.font = "bold 100px Arial";
      }

      context.fillText(text, centerX, centerY);
    }
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

const TechStackContent = ({ isActive }: { isActive: boolean }) => {
  // Load images with cross-origin for canvas manipulation
  const loadedTextures = useLoader(THREE.TextureLoader, imageUrls, (loader) => {
    loader.setCrossOrigin("anonymous");
  });

  // Map textures to tech list
  const materials = useMemo(() => {
    let imgIndex = 0;

    return techList.map((tech) => {
      let texture;

      if (tech.icon) {
        // Get the raw image from the loaded texture
        const img = loadedTextures[imgIndex].image;
        texture = createDecalTexture(img, tech.name, tech.color);
        imgIndex++;
      } else {
        // Text fallback
        texture = createDecalTexture(null, tech.name, tech.color);
      }

      return new THREE.MeshPhysicalMaterial({
        map: texture,
        color: "#ffffff",
        metalness: 0.1,
        roughness: 0.1,
        clearcoat: 0.5,
      });
    });
  }, [loadedTextures]);

  return (
    <Physics gravity={[0, 0, 0]}>
      <Pointer isActive={isActive} />
      {/* Map through tech list to create a sphere for each tool */}
      {techList.map((_, i) => (
        <SphereGeo
          key={i}
          vec={new THREE.Vector3()}
          scale={[0.8, 1, 0.9, 1.1, 0.8][Math.floor(Math.random() * 5)]}
          r={THREE.MathUtils.randFloatSpread}
          material={materials[i]}
          isActive={isActive}
        />
      ))}
    </Physics>
  );
};

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

        {/* Render content inside Suspense for useLoader */}
        <TechStackContent isActive={isActive} />

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
