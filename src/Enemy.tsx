import { RigidBody } from "@react-three/rapier"
import { useState } from "react";
import { Explosion } from "./Explosion";

export const Enemy = ({ position, color }) => {
  const [explode, setExplode] = useState<boolean>(false);

  const onCollisionExit = () => {
    setExplode(true);
    setTimeout(() => {
      setExplode(false);
    }, 2000);
  }

  return (
    explode ? <Explosion color={color} position={position}/> : 
    <RigidBody colliders="cuboid" type="fixed" position={position} restitution={1} onCollisionExit={onCollisionExit}>
      <mesh>
        <boxGeometry args={[2.5, 1, 1]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </RigidBody> 
  )
}