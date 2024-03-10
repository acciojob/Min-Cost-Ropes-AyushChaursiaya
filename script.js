// function mincost(arr) { 
// //write your code here
// // return the min cost
//   arr.sort((a, b) => a - b);

// 	let cost = 0;
// 	for (let i = 0; i < arr.length; i++) {
// 		const min1 = arr.shift();
// 		const min2 = arr.shift();

// 		const currentCost = min1 + min2;

// 		cost += currentCost;

// 		arr.push(currentCost);
// 	}
// 	return cost;
// 	 arr.sort((a, b) => a - b);
// }

// console.log(mincost([4, 3, 2, 6]));
// console.log(mincost([1, 2, 3, 4, 5]));
// // module.exports=mincost;

function mincost(arr) {
    // Sort the array of rope lengths in non-decreasing order
    arr.sort((a, b) => a - b);

    let cost = 0;

    // Continue until there is only one rope left
    while (arr.length > 1) {
        // Extract the two shortest ropes from the sorted array
        const min1 = arr.shift();
        const min2 = arr.shift();

        // Calculate the cost of connecting these two ropes
        const currentCost = min1 + min2;

        // Add the current cost to the total cost
        cost += currentCost;

        // Insert the newly formed rope back into the sorted array
        // This maintains the sorted order
        arr.push(currentCost);

        // Re-sort the array to ensure the next two shortest ropes are at the beginning
        arr.sort((a, b) => a - b);
    }

    return cost;
}

// Test cases
console.log(mincost([4, 3, 2, 6])); // Output: 29
console.log(mincost([1, 2, 3, 4, 5])); // Output: 33
