/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 BeautyInBloom.gltf
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/BeautyInBloom.gltf')
  return (
    <group {...props} dispose={null} scale={20}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={10}>
        <mesh geometry={nodes.Easel_01a002__0_1.geometry} material={materials['Scene_-_Root']} />
        <mesh geometry={nodes.Easel_01a002__0_2.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Easel_01a002__0_3.geometry} material={materials['white.001']} />
      </group>
    </group>
  )
}

useGLTF.preload('/BeautyInBloom.gltf')
