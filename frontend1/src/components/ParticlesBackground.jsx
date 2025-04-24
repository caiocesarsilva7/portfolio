import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticlesBackground = () => {
  const particlesInit = async (engine) => {
    await loadFull(engine); // Carrega todos os recursos do tsparticles
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "transparent", // Fundo transparente
          },
        },
        particles: {
          number: {
            value: 200, // Quantidade de partículas
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: "#2ecc71", // Cor das partículas (verde do seu tema)
          },
          shape: {
            type: "circle", // Formato: círculo
          },
          opacity: {
            value: 0.5, // Transparência
          },
          size: {
            value: { min: 1, max: 3 }, // Tamanho aleatório entre 1px e 3px
          },
          move: {
            enable: true,
            speed: 1, // Velocidade de movimento
            direction: "none",
            random: false,
            straight: false,
            outModes: {
              default: "out",
            },
          },
          // Interatividade com o mouse
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse", // Partículas são repelidas ao passar o mouse
              },
            },
          },
        },
      }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1, // Garante que fique atrás do conteúdo
      }}
    />
  );
};

export default ParticlesBackground;