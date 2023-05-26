import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'
import { Ball } from './Ball'
import { Paddle } from './Paddle'
import { Enemy } from './Enemy'
import { createStyles } from '@mantine/core'

const useStyles = createStyles((theme) => ({
  canvas: {
    [theme.fn.smallerThan('sm')]: {
      width: '100%',
      height: 300,
    },
    height: 500,
    width: '100%',
    paddingTop: 100,
  }
}));

export default function ThreeCanvas() {
  const { classes } = useStyles();
  return (
    <div className={classes.canvas} id="canvas-container">
      <Canvas camera={{ position: [0, 5, 12], fov: 50 }}>
        <ambientLight />
        <Physics gravity={[0, -30, 0]}>
          <Ball />
          <Paddle />
          <Enemy color="orange" position={[2.75, 1.5, 0]} />
          <Enemy color="hotpink" position={[-2.75, 3.5, 0]} />
        </Physics>
      </Canvas>
    </div>
  )
}
