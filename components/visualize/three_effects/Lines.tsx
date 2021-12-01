import { FC, useMemo, useRef } from 'react';

import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Lines: FC<{ currentNoLines: number, maxNoLines: number, tempBoxes: THREE.Object3D, speed: number }> = ({ currentNoLines, maxNoLines, tempBoxes, speed }) => {
    const material = useMemo(() => new THREE.MeshLambertMaterial({ color: 'blue' }), []);
    const boxesGeometry = new THREE.BoxBufferGeometry(0.01, 0.01, 10);
    const ref = useRef<THREE.InstancedMesh>();

    const maxVal = 10, minVal = -50;
    const maxStartValX = 20, minStartValX = 10;
    const maxY = 20, minY = 10;

    const points = useMemo<[number, number, number][]>(() => {
        const _points: [number, number, number][] = [];
        for (let i = 0; i < maxNoLines; i++) {
            let radiusStartX = Math.random() * (maxStartValX - minStartValX) + minStartValX;
            let angleStartX = Math.random() * Math.PI * 2

            let radiusY = Math.random() * (maxY - minY) + minY;
            let angleY = Math.random() * Math.PI * 2

            let startX = radiusStartX * Math.cos(angleStartX)
            let y = radiusY * Math.sin(angleY)

            let z = Math.floor(Math.random() * (maxVal - minVal)) + minVal;
            _points.push([startX, y, z])

        }
        return _points;
    }, [maxNoLines, minVal]);

    useFrame(({ clock }) => {
        let counter = 0;
        const t = clock.oldTime * 0.001;
        for (let x = 0; x < currentNoLines; x++) {
            let id = counter++;
            points[x][2] -= (0.1 + (Math.max(0, speed) * 0.005))
            const point = points[x]
            tempBoxes.position.set(point[0], point[1], point[2]);

            tempBoxes.updateMatrix();

            if (points[x][2] < -50 || points[x][2] > 50) {
                let radiusStartX = Math.random() * (maxStartValX - minStartValX) + minStartValX;
                let angleStartX = Math.random() * Math.PI * 2

                let radiusY = Math.random() * (maxY - minY) + minY;
                let angleY = Math.random() * Math.PI * 2

                let startX = radiusStartX * Math.cos(angleStartX)
                let y = radiusY * Math.sin(angleY)

                let z = Math.floor(Math.random() * (maxVal - minVal)) + minVal;
                points[x] = [startX, y, z]
            }

            if (ref.current) {
                ref.current.setMatrixAt(id, tempBoxes.matrix);
            }
        }
        if (ref.current) {
            ref.current.instanceMatrix.needsUpdate = true;
        }
    });

    return <instancedMesh ref={ref} args={[boxesGeometry, material, maxNoLines]} />;
};

export default Lines;