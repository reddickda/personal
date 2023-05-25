import { useThree } from "@react-three/fiber"
import { RigidBody, CuboidCollider } from "@react-three/rapier"
import { useRef } from "react"

export const Ball = () => {
  const ref = useRef()
  const { viewport } = useThree()
  const onCollisionEnter = () => (ref.current.setTranslation({ x: 0, y: 0, z: 0 }), ref.current.setLinvel({ x: 0, y: 10, z: 0 }))
  return (
    <>
      <RigidBody ref={ref} colliders="ball" mass={1}>
        <mesh>
          <sphereGeometry args={[0.75, 32, 32]} />
          <meshStandardMaterial />
        </mesh>
      </RigidBody>
      <RigidBody type="fixed" colliders={false} position={[0, -viewport.height, 0]} restitution={2.1} onCollisionEnter={onCollisionEnter}>
        <CuboidCollider args={[30, 0, 30]} />
      </RigidBody>
    </>
  )
}