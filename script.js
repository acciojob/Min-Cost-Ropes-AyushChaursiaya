function mincost(arr) {
    // Sorting the array initially
    arr.sort((a, b) => a - b);
    
    let totalCost = 0;

    // Keep merging the two smallest ropes until only one rope left
    while (arr.length > 1) {
        // Get the two smallest ropes
        const smallest1 = arr.shift();
        const smallest2 = arr.shift();
        
        // Merge them
        const merged = smallest1 + smallest2;
        
        // Add the cost of merging to the total cost
        totalCost += merged;
        
        // Insert the merged rope back to the array
        // Maintain the sorted order
        let i = 0;
        while (i < arr.length && arr[i] < merged) {
            i++;
        }
        arr.splice(i, 0, merged);
    }

    return totalCost;
}

// Test cases
console.log(mincost([4, 3, 2, 6])); // Output: 29
console.log(mincost([1, 2, 3, 4, 5])); // Output: 33
