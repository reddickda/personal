import { useFrame } from "@react-three/fiber"
import { RigidBody } from "@react-three/rapier"
import { useRef } from "react"
import * as THREE from "three"

export const Paddle = () => {
  const ref = useRef()
  useFrame(({ pointer, viewport }) => {
    ref.current.setTranslation({ x: (pointer.x * viewport.width) / 2, y: -viewport.height / 3, z: 0 })
    ref.current.setRotation(new THREE.Quaternion().setFromEuler(new THREE.Euler().set(0, 0, (pointer.x * Math.PI) / 10)))
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
