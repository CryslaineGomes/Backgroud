tsParticles.load("tsparticles", {

particles: {

number: {
value: 140,
density: {
enable: true,
area: 800
}
},

color: {
value: "#3aa3ff"
},

links: {
enable: true,
distance: 180,
color: "#3aa3ff",
opacity: 0.4,
width: 1
},

move: {
enable: true,
speed: 0.35,
direction: "none",
random: false,
straight: false,
outModes: {
default: "out"
}
},

size: {
value: 2
},

opacity: {
value: 0.6
}

},

interactivity: {

events: {
onHover: {
enable: true,
mode: "repulse"
}
},

modes: {

repulse: {
distance: 140,
duration: 0.8
}

}

},

fpsLimit: 60,
detectRetina: true

});