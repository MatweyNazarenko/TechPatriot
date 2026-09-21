import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useMemo } from "react";
import * as Three from "three";
import {motion} from 'framer-motion/three'
import { scale } from "framer-motion";

const ModalObject = (props) => {
  const { model } = props;

  const groupRef = useRef(null),
    animRef = useRef(null);

  useFrame(() => {});

  const mainMaterial = useMemo(() => {
    switch (controlsState.shaderMode) {
      case "wireframe":
        return new THREE.MeshBasicMaterial({
          color: 0x10b981,
          wireframe: true,
        });
        break;
      case "normals":
        return new THREE.MeshNormalMaterial({
          wireframe: controlsState.wireframe,
        });
        break;
      case "clay":
        return new THREE.MeshStandardMaterial({
          color: 0xd6d3d1,
          roughness: 0.95,
          metalness: 0.02,
          wireframe: controlsState.wireframe,
        });
        break;
      case "xray":
        return new THREE.MeshPhysicalMaterial({
          color: 0x38bdf8,
          roughness: 0.1,
          metalness: 0.1,
          transmission: 0.85,
          opacity: 0.65,
          transparent: true,
          wireframe: controlsState.wireframe,
          emissive: new THREE.Color(0x0284c7),
          emissiveIntensity: 0.25,
        });
        break;
      default:
        return new THREE.MeshStandardMaterial({
          color: new THREE.Color(baseColorHex),
          roughness: roughnessVal,
          metalness: metalnessVal,
          wireframe: controlsState.wireframe,
        });
    }
  }, [
    controlsState.shaderMode,
    controlsState.wireframe,
    baseColorHex,
    roughnessVal,
    metalnessVal,
  ]);

  const boxEdges = useMemo(()=>{
    return new Three.EdgesGeometry(new Three.BoxGeometry(2.0, 2.0, 2.0, 2,2,2), 25)
  }, [])

  return(
    <motion.group
        key={model.id}
        ref={groupRef}
        position={[0,0,0]}
        initial = {{scale: overallScale * 0.1}}
        animate={{scale: overallScale}}
        transition={{
            type: 'spring',
            stiffness: 260,
            damping: 18,
            mass: 1
        }}
    >
        {model.id === 'cube' && (
          <mesh castShadow receiveShadow material={mainMaterial}>
            <boxGeometry args={[2.0, 2.0, 2.0, 2, 2, 2]} />
            <lineSegments geometry={boxEdges}>
              <lineBasicMaterial color={0x1f2422} linewidth={1.5} transparent opacity={0.85} />
            </lineSegments>
          </mesh>
        )}

    </motion.group>
  );
};

export default ModalObject;
