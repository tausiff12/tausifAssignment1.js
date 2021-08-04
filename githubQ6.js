const set = new Set(['Beethoven', 'Mozart', 'Chopin', 'Chopin'])

console.log(set)
var b = set.delete('Beethoven');
console.log(b);
console.log(set);

//o/p
// Set(3) { 'Beethoven', 'Mozart', 'Chopin' }
// true
// Set(2) { 'Mozart', 'Chopin' }