let isActive = false
console.log(isActive);

isActive = true
console.log(isActive);

// booleans with numbers
isActive = 1
console.log(!isActive);
console.log(!!isActive);

console.log(!!(isActive = 0)); //false
console.log(!!(isActive = 1)); //true

console.log(!!''); // false


//falses
console.log("Falses:");
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);

console.log((!!('' || null || 0)));//false
console.log((!!('' || null || 0 || 1)));//true

let name = ''
console.log(name || "Unknown");
name = 'Leonardo'
console.log(name || "Unknown");