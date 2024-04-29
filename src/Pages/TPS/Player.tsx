import { useKeyboardControls } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"

import { useRef } from "react"
import { Vector3 } from "three"
// import { Raycaster } from "three";
import { Controls } from "./Tps"

const speed = 5
const jumpSpeed = 5
const jumpCoolDown = 400

export const Player = () => {
  //   const [sphereRef, api] = useSphere(() => ({
  //     mass: 100,
  //     fixedRotation: true,
  //     position: [0, 1, 0],
  //     args: 0.2,
  //     material: {
  //       friction: 0
  //     }
  //   }));
  //   const pressed = useKeyboardInput(["w", "a", "s", "d", " "]);
  //   const pressedMouse = useMouseInput();

  //   const input = useVariable(pressed);
  //   const mouseInput = useVariable(pressedMouse);

  const { camera, scene } = useThree()

  const state = useRef({
    timeToShoot: 0,
    timeTojump: 0,
    vel: [0, 0, 0],
    jumping: false,
  })
  const forwardPressed = useKeyboardControls<Controls>((state) => state.forward)
  const altPressed = useKeyboardControls<Controls>((state) => state.view)
  const backPressed = useKeyboardControls<Controls>((state) => state.back)
  const leftPressed = useKeyboardControls<Controls>((state) => state.left)
  const rightPressed = useKeyboardControls<Controls>((state) => state.right)

  //   useEffect(() => {
  //     api.velocity.subscribe((v) => (state.current.vel = v));
  //   }, [api]);

  useFrame(() => {
    // const { w, s, a, d } = input.current;
    // const space = input.current[" "];

    let velocity = new Vector3(0, 0, 0)
    let cameraDirection = new Vector3()
    camera.getWorldDirection(cameraDirection)

    let forward = new Vector3()
    forward.setFromMatrixColumn(camera.matrix, 0)
    forward.crossVectors(camera.up, forward)

    let right = new Vector3()
    right.setFromMatrixColumn(camera.matrix, 0)

    let [horizontal, vertical] = [0, 0]

    if (forwardPressed) {
      vertical += 1
    }
    if (backPressed) {
      vertical -= 1
    }
    if (leftPressed) {
      horizontal += 1
    }
    if (rightPressed) {
      horizontal -= 1
    }

    if (horizontal !== 0 && vertical !== 0) {
      velocity
        .add(forward.clone().multiplyScalar(speed * vertical))
        .add(right.clone().multiplyScalar(speed * horizontal))
      velocity.clampLength(-5, 5)
    } else if (horizontal !== 0) {
      velocity.add(right.clone().multiplyScalar(speed * horizontal))
    } else if (vertical !== 0) {
      velocity.add(forward.clone().multiplyScalar(speed * vertical))
    }

    // api.velocity.set(velocity.x, state.current.vel[1], velocity.z);
    // camera.position.set(
    //   sphereRef.current.position.x,
    //   sphereRef.current.position.y + 1,
    //   sphereRef.current.position.z
    // );

    // if (state.current.jumping && state.current.vel[1] < 0) {
    //   const raycaster = new Raycaster(
    //     sphereRef.current.position,
    //     new Vector3(0, -1, 0),
    //     0,
    //     0.2
    //   );
    //   const intersects = raycaster.intersectObjects(scene.children);
    //   if (intersects.length !== 0) {
    //     state.current.jumping = false;
    //   }
    // }

    // if (space && !state.current.jumping) {
    //   const now = Date.now();
    //   if (now > state.current.timeTojump) {
    //     state.current.timeTojump = now + jumpCoolDown;
    //     state.current.jumping = true;
    //     api.velocity.set(state.current.vel[0], jumpSpeed, state.current.vel[2]);
    //   }
    // }
  })

  return (
    <>
      <mesh>
        <sphereBufferGeometry args={[1, 32, 32]} />
        <meshPhongMaterial color={"hotpink"} />
      </mesh>
    </>
  )
}
