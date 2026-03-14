tsParticles.load("tsparticles", {

particles: {

number: {
value: 80
},

color: {
value: "#3aa3ff"
},

links: {
enable: true,
distance: 150,
color: "#3aa3ff",
opacity: 0.4,
width: 1
},

move: {
enable: true,
speed: 1
},

size: {
value: 3
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
distance: 120
}

}

}

});