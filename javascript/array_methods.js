const notes = [
    {title: 'Meeting notes', content: 'Discuss project roadmap', isPinned: true},
    {title: 'Workout plans', content: 'Push day, Bench press', isPinned: false},
    {title: 'Grocery list', content: 'Buy milk, eggs, bread, coffee.', isPinned: true},
    {title: 'Recipe ideas', content: 'Pasta, Salad, Tacos', isPinned: true}
];

// map method
const noteTitles = notes.map((note, index) => `${index + 1}. ${note.title}`);

// console.log(noteTitles);

// filter method
const pinnedNotes = notes.filter((note) => note.isPinned);

// console.log(pinnedNotes);

// filter + map
const pinnedNotesTitle = notes
    .filter((note) => note.isPinned)
    .map((note) => note.title);

// console.log(pinnedNotesTit

// reduced method
const numbers = [1,2,3,4,5];

const sum = numbers.reduce((total, number) => total + number, 0);

// console.log(sum);

// total characters in content in notes array
const totalCharacters = notes.reduce((total, note) => total + note.content.length, 0);

// console.log(totalCharacters);


// perform action on each item on an array: foreach
notes.forEach((note) => console.log(note.title));
