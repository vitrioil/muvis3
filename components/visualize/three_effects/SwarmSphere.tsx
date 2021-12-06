import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { FC, useRef, useMemo } from 'react';

const SwarmSphere: FC<{ count: number, speedVol: number }> = ({ count, speedVol }) => {
    const mesh = useRef<THREE.InstancedMesh>()
    const { size, viewport } = useThree()
    const aspect = size.width / viewport.width

    const dummy = useMemo(() => new THREE.Object3D(), [])
    // Generate some random positions, speed factors and timings
    const particles = useMemo(() => {
        const temp = []
        for (let i = 0; i < count; i++) {
            const u = Math.random();
            let x = Math.random() * 2 - 1;
            let y = Math.random() * 2 - 1;
            let z = Math.random() * 2 - 1;

            const magnitude = Math.sqrt(x * x + y * y + z * z);
            x /= magnitude;
            y /= magnitude;
            z /= magnitude;

            let c = Math.cbrt(u);

            temp.push({ x: x * c, y: y * c, z: z * c });
        }
        return temp
    }, [count])
    // The innards of this hook will run every frame
    useFrame((state) => {
        // Makes the light follow the mouse
        // if(light.current) {
        //   light.current.position.set(mouse.current[0] / aspect, -mouse.current[1] / aspect, 0)
        // }
        // Run through the randomized data to calculate some movement
        // console.log(speedVol)
        particles.forEach((particle, i) => {
            let { x, y, z } = particle

            let increase = Math.random() * speedVol / 100;
            dummy.position.set(
                x * increase,
                y * increase,
                z * increase
            )
            dummy.updateMatrix()
            // And apply the matrix to the instanced item
            if (mesh.current) {
                mesh.current.setMatrixAt(i, dummy.matrix)
            }
        })
        if (mesh.current) {
            mesh.current.instanceMatrix.needsUpdate = true
        }
    })
    return (
        <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
            <dodecahedronBufferGeometry attach="geometry" args={[0.01, 0]} />
            <meshPhongMaterial attach="material" color="red" />
        </instancedMesh>
    )
}

export default SwarmSphere;