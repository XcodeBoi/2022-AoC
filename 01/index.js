// get input
const input = process.argv[2];


const elves = input
    .split("\n")
    .reduce((elves, item) => {
        if (item == "") {
            elves.push([])
        } else {
            elves.at(-1).push(item)
        }; return elves;
    },[[]])
    .map(inventory => inventory.reduce((allItems, item) => allItems + parseInt(item), 0))

// part one - who has the highest calories

const highestCalElf = elves
    .reduce((highest, current) => (current > highest) ? current : highest, 0);

console.log(highestCalElf)

// part two - top 3 calorie elves

// wow typed arrays so god damn fast by comparison
let highest3 = new Float64Array(elves)
    .sort()
    .slice(-3)
    .reduce((totalCalories, currentElf) => totalCalories + currentElf, 0);

console.log(highest3)
