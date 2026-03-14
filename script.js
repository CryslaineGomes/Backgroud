tsParticles.load("tsparticles", {

fpsLimit: 60,

particles: {

number: {
value: 90,
density: {
enable: true,
area: 1000
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
default: "bounce"   // não cria novas partículas
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