const notes = ['Meeting Notes', 'Grocery List'];

// adding directly to original list of notes : mutable
// notes.push('Workout Plans');
// console.log(notes);

// immutability

// adding new note using spread operator
const addNotes = [...notes, 'Workout Plans'];

// console.log(addNotes);

// updating note content
const newNotes = notes.map((note) => note === 'Grocery List' ? 'Shopping List': note);

// console.log(notes);
// console.log(newNotes);

// in object using spread operator
const user = {
    name: 'John',
    age: 29
}

// user.age = 30;

// using spread operator
const newUser = {
    ...user,
    age: 30
}

console.log(user);
console.log(newUser);