import { useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import { BoxGeometry, MeshBasicMaterial, Group, Mesh, Vector3 } from "three"

export const Explosion = ({ color, position }: { color: string, position: number[] }) => {
  const groupRef = useRef<Group>(null!);
  const blocks = useRef<any[]>([]);

  // Function to create a child block with a random position and rotation
  const createBlock = () => {
    const block = new Mesh(
      new BoxGeometry(.5, .5, .5),
      new MeshBasicMaterial({ color })
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
    blocks.current.forEach((block : any) => {
      const velocity = new Vector3(
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
      <group ref={groupRef} position={new Vector3(position[0], position[1], position[2])}>
      </group>
  )
}