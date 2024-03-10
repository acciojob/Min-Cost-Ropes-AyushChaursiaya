function mincost(arr) { 
//write your code here
// return the min cost
  arr.sort((a, b) => a - b);

	let cost = 0;
	for (let i = 0; i < arr.length; i++) {
		const min1 = arr.shift();
		const min2 = arr.shift();

		const currentCost = min1 + min2;

		cost += currentCost;

		arr.push(currentCost);
	}
	return cost;
	 arr.sort((a, b) => a - b);
}

console.log(mincost([4, 3, 2, 6]));
console.log(mincost([1, 2, 3, 4, 5]));
// module.exports=mincost;
