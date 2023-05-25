import { useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import * as THREE from "three"

export const Explosion = ({ color, position }) => {
  const groupRef = useRef();
  const blocks = useRef([]);

  // Function to create a child block with a random position and rotation
  const createBlock = () => {
    const block = new THREE.Mesh(
      new THREE.BoxGeometry(.5, .5, .5),
      new THREE.MeshBasicMaterial({ color })
    );
    block.position.x = Math.random() * 2 - 1;
    block.position.y = Math.random() * 2 - 1;
    block.position.z = Math.random() * 2 - 1;
    block.rotation.x = Math.random() * Math.PI;
    block.rotation.y = Math.random() * Math.PI;
    block.rotation.z = Math.random() * Math.PI;
    groupRef.current.add(block);
    blocks.current.push(block);
  };

  const explode = () => {
    blocks.current.forEach((block) => {
      const velocity = new THREE.Vector3(
        Math.random() * 2 - 1,
        Math.random() * 2 - 1,
        Math.random() * 2 - 1
      );
      block.velocity = velocity.multiplyScalar(0.1);
    });
  };

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x += 0.01;
      groupRef.current.rotation.y += 0.01;

      blocks.current.forEach((block) => {
        if (block.velocity) {
          block.position.add(block.velocity);
          block.rotation.x += 0.01;
          block.rotation.y += 0.01;
          block.rotation.z += 0.01;
        }
      });
    }
  });

  useEffect(() => {
    for (let i = 0; i < 10; i++) {
      createBlock();
    }
    explode();
  }, []);

  return (
      <group ref={groupRef} position={position}>
      </group>
  )
}