/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 BlueFlower.gltf
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/BlueFlower.gltf')
  return (
    <group {...props} dispose={null} scale={15}>
      <group rotation={[1.689, 0, 0]} scale={[3.344, 4.89, 4.826]}>
        <mesh geometry={nodes.Plane005_1.geometry} material={materials['white.001']} />
        <mesh geometry={nodes.Plane005_2.geometry} material={materials.black} />
        <mesh geometry={nodes.Plane005_3.geometry} material={materials['Blue Flower']} />
      </group>
    </group>
  )
}

useGLTF.preload('/BlueFlower.gltf')
