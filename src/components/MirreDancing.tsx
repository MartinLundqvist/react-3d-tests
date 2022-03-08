/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import modelFile from '../assets/MirreRumba.glb';
import { Vector3 } from '@react-three/fiber';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { AnimationClip, Bone, MeshStandardMaterial, SkinnedMesh } from 'three';

type ActionName = 'Armature|mixamo.com|Layer0';

interface GLTFActions extends AnimationClip {
  name: ActionName;
}

type GLTFResult = GLTF & {
  nodes: {
    Wolf3D_Body: SkinnedMesh;
    Wolf3D_Hair: SkinnedMesh;
    Wolf3D_Outfit_Bottom: SkinnedMesh;
    Wolf3D_Outfit_Footwear: SkinnedMesh;
    Wolf3D_Outfit_Top: SkinnedMesh;
    EyeLeft: SkinnedMesh;
    EyeRight: SkinnedMesh;
    Wolf3D_Head: SkinnedMesh;
    Wolf3D_Teeth: SkinnedMesh;
    Hips: Bone;
  };
  materials: {
    ['Wolf3D_Body.001']: MeshStandardMaterial;
    ['Wolf3D_Hair.001']: MeshStandardMaterial;
    ['Wolf3D_Outfit_Bottom.001']: MeshStandardMaterial;
    ['Wolf3D_Outfit_Footwear.001']: MeshStandardMaterial;
    ['Wolf3D_Outfit_Top.001']: MeshStandardMaterial;
    ['Wolf3D_Eye.001']: MeshStandardMaterial;
    ['Wolf3D_Skin.001']: MeshStandardMaterial;
    ['Wolf3D_Teeth.001']: MeshStandardMaterial;
  };
  animations: GLTFActions[];
};

interface IModelProps {
  position: Vector3;
}

export default function Model({ position }: IModelProps) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(modelFile) as GLTFResult;
  const { actions } = useAnimations<GLTFActions>(animations, group);

  useEffect(() => {
    actions['Armature|mixamo.com|Layer0']?.play();
  });

  console.log(actions);

  return (
    <group position={position} dispose={null}>
      <group ref={group} dispose={null}>
        <primitive object={nodes.Hips} />
        <skinnedMesh
          geometry={nodes.Wolf3D_Body.geometry}
          material={materials['Wolf3D_Body.001']}
          skeleton={nodes.Wolf3D_Body.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Hair.geometry}
          material={materials['Wolf3D_Hair.001']}
          skeleton={nodes.Wolf3D_Hair.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
          material={materials['Wolf3D_Outfit_Bottom.001']}
          skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
          material={materials['Wolf3D_Outfit_Footwear.001']}
          skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Top.geometry}
          material={materials['Wolf3D_Outfit_Top.001']}
          skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
        />
        <skinnedMesh
          name='EyeLeft'
          geometry={nodes.EyeLeft.geometry}
          material={nodes.EyeLeft.material}
          skeleton={nodes.EyeLeft.skeleton}
          morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
        />
        <skinnedMesh
          name='EyeRight'
          geometry={nodes.EyeRight.geometry}
          material={nodes.EyeRight.material}
          skeleton={nodes.EyeRight.skeleton}
          morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
        />
        <skinnedMesh
          name='Wolf3D_Head'
          geometry={nodes.Wolf3D_Head.geometry}
          material={materials['Wolf3D_Skin.001']}
          skeleton={nodes.Wolf3D_Head.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
        />
        <skinnedMesh
          name='Wolf3D_Teeth'
          geometry={nodes.Wolf3D_Teeth.geometry}
          material={materials['Wolf3D_Teeth.001']}
          skeleton={nodes.Wolf3D_Teeth.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
        />
      </group>
    </group>
  );
}

useGLTF.preload(modelFile);
