/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 wallsPillars.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/wallsPillars.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-5.669, 1.976, 42.462]} rotation={[Math.PI, -1.563, Math.PI]} scale={[2.319, 1.849, 2.073]}>
        <mesh geometry={nodes.Object_14.geometry} material={materials['Pillars.003']} position={[0, 0.012, 0]} />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.104}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.body_lp_body_0.geometry} material={materials.body} position={[69.016, -303.111, -12.339]} rotation={[0, 0.024, -1.529]} scale={[1.55, 1.5, 1.65]} />
          </group>
        </group>
      </group>
      <group position={[-2.488, 2.099, 50.2]} rotation={[Math.PI, 0, -Math.PI / 2]} scale={[2, 1, 0.961]}>
        <mesh geometry={nodes['F-material052'].geometry} material={materials['walls.009']} />
        <mesh geometry={nodes['F-material052_1'].geometry} material={materials['board.003']} />
        <mesh geometry={nodes['F-material052_2'].geometry} material={materials['walls.010']} />
      </group>
      <mesh geometry={nodes['F-material023'].geometry} material={materials['walls.009']} position={[5.064, 2.099, 45.587]} rotation={[0, 1.567, 1.571]} scale={[2, 1, 0.512]} />
    </group>
  )
}

useGLTF.preload('/wallsPillars.glb')
