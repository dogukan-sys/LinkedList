const { LinkedList } = require("./classes");

// Initialize an empty linked list
let list = new LinkedList();

// Append values to the end of the list
list.append("First");
list.append("Second");
list.append("Third");

// Prepend values to the start of the list
list.prepend("Start");

// Check the size of the list
console.log(list.size()); // Outputs: 4

// Get the first and last node in the list
console.log(list.getHead().value); // Outputs: 'Start'
console.log(list.getTail().value); // Outputs: 'Third'

// Get a node at a specific index
console.log(list.at(2).value); // Outputs: 'Second'

// Pop the last element from the list
list.pop();
console.log(list.getTail().value); // Outputs: 'Second'

// Check if a value is in the list
console.log(list.contains("First")); // Outputs: true
console.log(list.contains("NotPresent")); // Outputs: false

// Find the index of a value in the list
console.log(list.find("Second")); // Outputs: 2
console.log(list.find("NotPresent")); // Outputs: null

// Print the list
console.log(list.toString()); // Outputs: ( Start ) -> ( First ) -> ( Second ) -> null
