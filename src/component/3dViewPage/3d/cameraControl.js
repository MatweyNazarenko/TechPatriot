import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as Three from "three";

const cameraControl = (props) => {
  const {
    activeCameraPreset = null,
    cameraDistance = 5,
    controlRef,
    onCameraPresetHandled,
  } = props;

  const { camera } = useThree();
  const targetCamPos = useRef(null);
  const targetControls = useRef(new Three.Vector3(0, 0, 0));

  useEffect(() => {
    if (!activeCameraPreset || !camera) return;

    const dist = cameraDistance || 5;
    targetControls.current.set(0, 0, 0);

    switch (activeCameraPreset) {
      case "front":
        return (targetCamPos.current = new Three.Vector3(0, 0.2, dist * 1.05));
        break;
      case "top":
        targetCamPos.current = new Three.Vector3(0.001, dist * 1.15, 0.001);
        break;
      case "side":
        targetCamPos.current = new Three.Vector3(dist * 1.05, 0.2, 0);
        break;
      case "reset":
        targetCamPos.current = new Three.Vector3(
          dist * 0.65,
          dist * 0.55,
          dist * 0.75,
        );
        break;
      default:
        break;
    }
    if (onCameraPresetHandled) {
        onCameraPresetHandled();
    }
  }, [activeCameraPreset, cameraDistance, camera, onCameraPresetHandled]);

  useFrame(()=>{
    if(targetCamPos.current && camera && controlRef.current){
        camera.position.lerp(targetCamPos.current, 0.08);
        controlRef.current.target.lerp(targetControls.current, 0.08);

        if(camera.position.distanceTo(targetCamPos.current < 0.02)){
            camera.position.copy(targetCamPos.current);
            controlRef.current.target.copy(targetControls.current);

            targetCamPos.current = null;
        }
    }


  });

};
