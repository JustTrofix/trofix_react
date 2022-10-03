import React from "react";
import { Particles } from '@blackbox-vision/react-particles';
import ParticleConfig from "./particle-config"

export default function ParticleBackground() {
    return (
        <Particles params={ParticleConfig}
        
        />
    );
}