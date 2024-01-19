# LinkedList Implementation

This project implements a simple LinkedList data structure in JavaScript, consisting of two classes: `LinkedList` and `Node`. These classes allow you to create and manipulate a linked list, a linear collection of elements.

## Classes

### 1. LinkedList Class / Factory

The `LinkedList` class represents the full list and includes the following methods:

- **`append(value)`**: Adds a new node containing the given value to the end of the list.
- **`prepend(value)`**: Adds a new node containing the given value to the start of the list.
- **`size()`**: Returns the total number of nodes in the list.
- **`getHead()`**: Returns the first node in the list.
- **`getTail()`**: Returns the last node in the list.
- **`at(index)`**: Returns the node at the given index.
- **`pop()`**: Removes the last element from the list.
- **`contains(value)`**: Returns `true` if the passed-in value is in the list and otherwise returns `false`.
- **`find(value)`**: Returns the index of the node containing the value, or `null` if not found.
- **`toString()`**: Represents the LinkedList objects as strings in the format: `(value) -> (value) -> (value) -> null`.

### 2. Node Class / Factory

The `Node` class represents individual nodes within the linked list and contains a `value` property and a link to the `nextNode`, both set as `null` by default.

This implementation was created as part of an assignment for [The Odin Project](https://www.theodinproject.com/), a free and open-source curriculum for learning web development.

Feel free to explore and modify the code to suit your needs. Happy coding!
