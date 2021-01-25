const values = [1, 2, 3, 4, 5]

console.log("Array lenght: ", values.length);

console.log(values[5]); //undefined
console.log(values[0]);

values.push({one: 1}, false)
console.log(values);

delete values[0]
console.log(values);

values.pop()
console.log(values);
values[0] = "one"
console.log(values); 

values.pop(3)
console.log(values); 
 
array = [1, 2, 3, 4, 5, 6 ,7]


array.forEach(
    element =>{
        console.log(`${element + array[0]}`);
        }
    )
