import { useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useRef, useMemo, Suspense } from "react";
import * as Three from "three";
// import {motion} from 'framer-motion/three'
// import { scale } from "framer-motion";
import { useFBX, useGLTF } from '@react-three/drei'

const ModalObject = (props) => {
  const { overallScale = 1 } = props;

  const modelRef = useRef(null);

  const scaleTracker = useRef(overallScale * 0.1);

  useFrame(() => {
    if (!modelRef.current) return;


    if (scaleTracker.current < overallScale) {
      scaleTracker.current += (overallScale - scaleTracker.current) * 0.1;
      modelRef.current.scale.setScalar(scaleTracker.current);
    }
  });

  const fbx = useFBX('/models/b.fbx');
  return (
    <primitive ref={modelRef} {...props} object={fbx} />
  );
};
export default ModalObject;
