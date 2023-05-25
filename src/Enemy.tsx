import { RigidBody } from "@react-three/rapier"
import { useState } from "react";
import { Explosion } from "./Explosion";
import { Vector3 } from "three"

export const Enemy = ({ position, color } : { position: number[], color: string }) => {
  const [explode, setExplode] = useState<boolean>(false);

  const onCollisionExit = () => {
    setExplode(true);
    setTimeout(() => {
      setExplode(false);
    }, 2000);
  }

  return (
    explode ? <Explosion color={color} position={position}/> : 
    <RigidBody colliders="cuboid" type="fixed" position={new Vector3(position[0], position[1], position[2])} restitution={1} onCollisionExit={onCollisionExit}>
      <mesh>
        <boxGeometry args={[2.5, 1, 1]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </RigidBody> 
  )
}