/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 backRooms.glb 
*/

import { useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { MeshStandardMaterial } from "three";

interface triggerProps{
  pic : Boolean;
}

export function Backrooms(props: triggerProps) {

  const {pic} = props

  const { scene, nodes, materials }: any = useGLTF("/backRooms.glb");

  useEffect(() => {
    for (const [keys, values] of Object.entries<MeshStandardMaterial>(
      materials
    )) {
      if (keys !== "ceiling.002") {
        values.side = 0;
      }
    }

  }, [materials, nodes, scene]);

  const picture = pic ? "Notice_board.new.003" : "Notice.002"

  return (
    <group dispose={null}>
      <group position={[0.61, 0.111, 55.092]} rotation={[-Math.PI / 2, 0, -0.006]} scale={[0.005, 0.004, 0.005]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-1000, 0, -0.001]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.defaultMaterial002.geometry} material={materials['cl_body_mat.002']} rotation={[0, 0, -0.149]} />
          </group>
          <group position={[100, 0, -0.002]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.defaultMaterial001.geometry} material={materials['cl_body_mat.002']} rotation={[0, 0, -0.138]} />
          </group>
          <mesh geometry={nodes.defaultMaterial003.geometry} material={materials['cl_body_mat.002']} position={[-460, 66.507, -0.001]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
          <mesh geometry={nodes.defaultMaterial.geometry} material={materials['cl_body_mat.002']} position={[600, 0, -0.001]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        </group>
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2001.geometry} material={materials['Table.002']} position={[-3.396, -42.208, 0.064]} scale={[0.077, 0.054, 0.067]} />
      </group>
      <group position={[-3.7, 1.56, 42.449]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={[0.357, 0.339, 0.318]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group position={[0, 0, 0.001]}>
            <group position={[0, 5, 175.001]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
              <mesh geometry={nodes.Cube003_Keyboard_0.geometry} material={materials['Keyboard.003']} />
              <mesh geometry={nodes.Cube003_Monitor_0.geometry} material={materials['Monitor.003']} position={[0, -0.432, 0]} />
              <mesh geometry={nodes.Cube003_Mouse_0.geometry} material={materials['Mouse.003']} />
              <mesh geometry={nodes.Cube003_Screen_0.geometry} material={materials['Screen.003']} position={[0, -0.447, 0]} />
              <mesh geometry={nodes.Cube003_Tower_0.geometry} material={materials['Tower.003']} position={[0, -0.273, 0]} />
            </group>
          </group>
        </group>
      </group>
      <group position={[-2.768, 1.825, 42.661]} rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 0.664, 0.004]}>
            <mesh geometry={nodes.Object_4.geometry} material={materials[picture]} rotation={[Math.PI, 0, Math.PI]} />
          </group>
          <mesh geometry={nodes.Object_6.geometry} material={materials[picture]} position={[0, 0.664, -0.004]} />
        </group>
      </group>
      <group position={[-3.999, 1.116, 41.107]} rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.defaultMaterial004.geometry} material={materials['Metal.003']} />
          <mesh geometry={nodes.defaultMaterial005.geometry} material={materials['Plastic.003']} />
          <mesh geometry={nodes.defaultMaterial006.geometry} material={materials['Fabric.003']} />
        </group>
      </group>
      <mesh geometry={nodes['F-material022'].geometry} material={materials['walls.006']} position={[-9.01, 2.099, 29.268]} rotation={[-Math.PI / 2, -Math.PI / 2, 0]} scale={[2, 1, 1]} />
      <mesh geometry={nodes['F-material024'].geometry} material={materials['walls.006']} position={[-13.571, 2.099, 56.478]} rotation={[0, 0, Math.PI / 2]} scale={[2, 1, 1]} />
      <mesh geometry={nodes['F-material001'].geometry} material={materials['walls.006']} position={[-13.591, 2.099, 45.497]} rotation={[Math.PI / 2, Math.PI / 2, 0]} scale={[2, 1, 1]} />
      <mesh geometry={nodes['M-material004'].geometry} material={materials['board.003']} position={[-1.257, 2.199, 34.232]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.137, 0.083, 0.166]} />
      <mesh geometry={nodes['F-material002'].geometry} material={materials['walls.006']} position={[-4.875, 2.099, 32.206]} rotation={[-Math.PI / 2, -Math.PI / 2, 0]} scale={[2, 0.497, 0.726]} />
      <mesh geometry={nodes['F-material003'].geometry} material={materials['walls.006']} position={[-1.311, 2.099, 32.23]} rotation={[-Math.PI / 2, -Math.PI / 2, 0]} scale={[2, 0.497, 0.726]} />
      <mesh geometry={nodes['F-material004'].geometry} material={materials['walls.006']} position={[-1.65, 2.099, 31.731]} rotation={[Math.PI, -0.023, -Math.PI / 2]} scale={[2, 0.497, 0.726]} />
      <mesh geometry={nodes['F-material005'].geometry} material={materials['walls.006']} position={[-1.751, 2.099, 42.688]} rotation={[Math.PI, -0.023, -Math.PI / 2]} scale={[2, 0.497, 0.726]} />
      <mesh geometry={nodes['F-material006'].geometry} material={materials['walls.006']} position={[-4.825, 2.099, 28.687]} rotation={[Math.PI, 1.545, -1.571]} scale={[2, 0.497, 0.726]} />
      <mesh geometry={nodes['F-material007'].geometry} material={materials['walls.006']} position={[-11.317, 2.099, 24.966]} rotation={[0, 0, Math.PI / 2]} scale={[2, 1.173, 0.512]} />
      <mesh geometry={nodes['F-material008'].geometry} material={materials['walls.006']} position={[-23.304, 2.099, 37.443]} rotation={[-Math.PI / 2, -Math.PI / 2, 0]} scale={[2, 1.251, 0.512]} />
      <mesh geometry={nodes['F-material009'].geometry} material={materials['walls.006']} position={[0.289, 2.099, 62.092]} rotation={[Math.PI, 0, -Math.PI / 2]} scale={[2, 1.173, 0.512]} />
      <mesh geometry={nodes['F-material010'].geometry} material={materials['walls.006']} position={[10.979, 2.099, 49.564]} rotation={[0, 1.567, 1.571]} scale={[2, 1.251, 0.512]} />
      <mesh geometry={nodes['F-material011'].geometry} material={materials['carpet.002']} position={[0.289, 0.034, 68.85]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[2, 1.173, 0.512]} />
      <mesh geometry={nodes.P_ceiling_2x2_2001_Material_0002.geometry} material={materials['ceiling.002']} position={[-17.301, 3.891, 31.337]} rotation={[-Math.PI / 2, 0, 0]} scale={[2.337, 2.693, 1]} />
      <mesh geometry={nodes['F-material014'].geometry} material={materials['walls.007']} position={[-13.591, 2.099, 45.497]} rotation={[Math.PI / 2, Math.PI / 2, 0]} scale={[2, 1, 1]} />
      <mesh geometry={nodes.Cube005.geometry} material={materials['Notice_board.new.003']} position={[-25.155, 0.1, 62.503]} />
      <mesh geometry={nodes.Cube.geometry} material={materials['board.002']} position={[8.527, 2.018, 24.959]} rotation={[-Math.PI / 2, 0, -3.14]} scale={[1, 0.536, 1.083]} />
    </group>
  );
}

useGLTF.preload("/backRooms.glb");
