function animals(heads, legs){
    const cows = legs/2 - heads;
    const chickens = heads - cows;
    return /\.|-/g.test (`${chickens}${cows}`)? 'No solutions':[chickens, cows]
}
console.log(animals(2,8))
