const colors = [
    { "name": "Black", "total_product": 1 },
    { "name": "Black", "total_product": 1 },
    { "name": "White", "total_product": 1 },
    { "name": "White", "total_product": 1 },
    { "name": "White", "total_product": 1 },
    { "name": "White", "total_product": 1 }
];

const counts = colors.reduce((acc, obj) => {
    if (!acc[obj.name]) acc[obj.name] = { name: obj.name, total_product: 0 };
    acc[obj.name].total_product++;
    return acc;
}, {});
const result = Object.values(counts);
console.log(result);