const names = ['riyan', 'himel', 'fariya', 'Abdullah al mamun', 'Fariya islam'];
const human = {
    name: "fariya",
    hobby: "nothing",
    gun: ['cute', 'overthinker', 'beautiful', 'Good decition maker']
}

const advanceHuman = {
    ...human,
    fan: 'Korean oppa',
    closedPeoples: [...names]

}

// Destructure
const { hobby, gun } = human;

console.log(advanceHuman);