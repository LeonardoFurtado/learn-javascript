const school = "Ferrari"

console.log(school.charAt()); // gets the first char
console.log(school.charAt(0));
console.log(school.charAt(5));
console.log(school.charAt(8)); // don't thow error

console.log(school.substring(2)); // print starting at 2(including 2)
console.log(school.substring(0, 3)); // start at 0,  going to 2, dont include 3

console.log('School :'.concat(school));