tsParticles.load("tsparticles", {

fpsLimit: 60,

particles: {

number: {
value: 120,
density: {
enable: true,
area: 900
}
},

color: {
value: "#3aa3ff"
},

links: {
enable: true,
distance: 190,
color: "#3aa3ff",
opacity: 0.35,
width: 1
},

move: {
enable: true,
speed: 0.6,
direction: "none",
random: true,
straight: false,
outModes: {
default: "out"
}
},

size: {
value: 2
},

opacity: {
value: 0.5
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
duration: 1.2,
factor: 100,
speed: 0.5
}

}

},

detectRetina: true

});