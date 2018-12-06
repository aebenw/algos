/**
It accepts two objects as arguments: the first object is the recipe
for the food, while the second object is the available ingredients.
Each ingredient's value is number representing how many units there are.

`batches(recipe, available)`
*/

// 0 batches can be made

function batches(recipe, available){
        let min = Infinity
        for(let key in recipe){
        if(!(available[key])){
            return 0
        } else if(available[key] < recipe[key]) {
            return 0
        }
        let mod = Math.floor(available[key] / recipe[key])
        min = Math.min(min, mod)
    }
    return min

}

console.log(batches(
  { milk: 100, butter: 50, flour: 5 },
  { milk: 132, butter: 48, flour: 51 }
))
console.log(batches(
  { milk: 100, flour: 4, sugar: 10, butter: 5 },
  { milk: 1288, flour: 9, sugar: 95 }
))

// 1 batch can be made
console.log(batches(
  { milk: 100, butter: 50, cheese: 10 },
  { milk: 198, butter: 52, cheese: 10 }
))

// 2 batches can be made
console.log(batches(
  { milk: 2, sugar: 40, butter: 20 },
  { milk: 5, sugar: 120, butter: 500 }
))
