import { useFrame } from "@react-three/fiber"
import { RigidBody, RapierRigidBody } from "@react-three/rapier"
import { useRef } from "react"
import { Quaternion, Euler } from "three"

export const Paddle = () => {
  const ref = useRef<RapierRigidBody>(null!)
  useFrame(({ pointer, viewport }) => {
    ref.current.setTranslation({ x: (pointer.x * viewport.width) / 2, y: -viewport.height / 3, z: 0 }, true)
    ref.current.setRotation(new Quaternion().setFromEuler(new Euler().set(0, 0, (pointer.x * Math.PI) / 10)), true)
  });

  return (
    <>
      <RigidBody ref={ref} colliders="cuboid" type="fixed" restitution={2.1}>
        <mesh>
          <boxGeometry args={[4, 1, 1]} />
          <meshStandardMaterial color="lightblue" />
        </mesh>
      </RigidBody>
    </>
  )
}
