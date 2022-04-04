const names = ['riyan', 'himel', 'fariya', 'Abdullah al mamun', 'Fariya islam'];
// map && filter && reducer
names.map((name, index) => {
    // console.log(name + index);
})

// 

const result = names.filter(name =>  name.length >8);
console.log(result);

// Reducer sum
const incomes = [1100, 45333, 001];
const total = incomes.reduce((sum,item) => sum+item);
console.log(total);


