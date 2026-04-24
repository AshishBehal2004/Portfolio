import {Canvas, useFrame } from '@react-three/fiber'
import { Stars } from "@react-three/drei";
import { motion } from "framer-motion";
import {useRef} from 'react'

function MovingStars() {
      const starsRef = useRef(null);
  
      useFrame(({ clock }) => {
          const elapsedTime = clock.getElapsedTime();
          if (starsRef.current) {
              starsRef.current.rotation.x = elapsedTime * 0.01;
              starsRef.current.rotation.y = elapsedTime * 0.01;
          }
      });
  
      return <Stars ref={starsRef} radius={50} count={5000} factor={4} fade />;
  }
export default function Hero() {
  
  return (
    <div>
      <h1>Hero</h1>
      <div className="App">
            <motion.section className="relative overflow-hidden px-4 py-12 text-gray-200 min-h-screen bg-black">
                <div className="absolute inset-0 z-0">
                    <Canvas>
                        <MovingStars />
                    </Canvas>
                </div>
                
            </motion.section>
        </div>
    </div>
  );
}