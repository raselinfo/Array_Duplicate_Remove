const colors = [
    { "name": "Black", "total_product": 1 },
    { "name": "White", "total_product": 1 },
    { "name": "White", "total_product": 1 },
    { "name": "White", "total_product": 1 },
    { "name": "White", "total_product": 1 },
    
]

let noneDuplicate = []
let duplicate = []

for (let i = 0; i < colors.length; i++) {
    let item = colors[i]
    let index = noneDuplicate.findIndex(innerItem => {
        return item.name === innerItem.name
    })

    if (index === -1) {
        noneDuplicate.push(item)
    } else {
        duplicate.push(item)
    }
}

let result = noneDuplicate.map(item => {
    let value = duplicate.find(findItem => findItem.name === item.name)
    if (value) {
        item.total_product += 2
    }
    return item
})

console.log(result)
// console.log(duplicate)
