tsParticles.load("tsparticles", {

particles: {

number: {
value: 160
},

color: {
value: "#3aa3ff"
},

links: {
enable: true,
distance: 200,
color: "#3aa3ff",
opacity: 0.35,
width: 1
},

move: {
enable: true,
speed: 0.4,
outModes: {
default: "bounce"
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
distance: 120,
duration: 1
}

}

},

detectRetina: true

});