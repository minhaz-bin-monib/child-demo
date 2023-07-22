import { useCallback } from "react";
import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

const Particle = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
      
    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: "#fff"
                  },
                  particles: {
                    color: { value: "#ffebf1" },
                    move: {
                      direction: "bottom",
                      enable: true,
                      outModes: "out",
                      speed: 2
                    },
                    number: {
                      density: {
                        enable: true,
                        area: 800
                      },
                      value: 400
                    },
                    opacity: {
                      value: 0.7
                    },
                    shape: {
                      type: "circle"
                    },
                    size: {
                      value: 10
                    },
                    wobble: {
                      enable: true,
                      distance: 10,
                      speed: 10
                    },
                    zIndex: {
                      value: { min: 0, max: 1 }
                    }
                  }
            }}
        />
    );
};

export default Particle;