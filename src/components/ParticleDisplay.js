import React from "react";

import Particles from "react-particles-js";

export const ParticleDisplay = () => {
	return (
		<Particles
			params={{
				particles: {
					number: {
						value: 100
					},
					size: {
						value: 3
					},
					color: "#FFF",
					density: {
						enable: true
					},
					move: {
						random: true,
						speed: 1,
						out_mode: "out"
					},
					lineLinked: {
						color: "#aaaaaa"
					}
				},
				interactivity: {
					events: {
						onhover: {
							enable: true,
							mode: "grab"
						},
						onclick: {
							enable: true,
							mode: "repulse"
						}
					}
				}
			}}
			style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%" }}
		/>
	);
};
