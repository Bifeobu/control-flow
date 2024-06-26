// ~Part 1: Growing Plants~
const PI = 3.1415;
const radius = 5;
const area = (PI * radius * radius)

console.log(area)

const minSpace = 0.8

console.log(area / minSpace)

const plants = 20;

const after1 = plants * 2;
const after2 = after1 * 2;
const after3 = after2 * 2;
// "after#" meaning after each week

console.log(after1)
console.log(after2)
console.log(after3)

// Week 1
if (after1 > (.8 * area)) {
    console.log("Pruned")
} else if (after1 >= (.5 * area)) {
    console.log("Monitored")
} else if (after1 < (.5 * area)) {
    console.log("Planted")
}

// Week 2
if (after2 > (.8 * area)) {
    console.log("Pruned")
} else if (after2 >= (.5 * area)) {
    console.log("Monitored")
} else if (after2 < (.5 * area)) {
    console.log("Planted")
}

// Week 3
if (after3 > (.8 * area)) {
    console.log("Pruned")
} else if (after3 >= (.5 * area)) {
    console.log("Monitored")
} else if (after3 < (.5 * area)) {
    console.log("Planted")
}

// ~Part 2: Thinking Bigger~
let p = 100;
for (i = 1 ; i < 10 ; i++) {
    p = 2 *(p);
    console.log(p)
}

console.log(radius * 51200)

// ~Part 3: Errors in Judgement
try {
    if (radius < 0) {
        console.log("Negative!");
    } else {
        throw "Error: Plant Space Exceeded";
    }
} catch (error) {
    console.log(error);
}