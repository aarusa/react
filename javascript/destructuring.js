// Arrays

const notes = [
    {title: 'Meeting notes', content: 'Discuss project roadmap'},
    {title: 'Workout plans', content: 'Push day, Bench press'},
    {title: 'Grocery list', content: 'Buy milk, eggs, bread, coffee.'},
    {title: 'Recipe ideas', content: 'Pasta, Salad, Tacos'}
];

const [firstNote, secondNote, ...otherNotes] = notes;
// console.log(firstNote);
// console.log(secondNote.title);
// console.log(otherNotes);

// Objects

const note = {
    title: 'Meeting notes',
    content: 'Discuss project roadmap',
    isPinned: true
};

const {title, content: body} = note;
// console.log(title, body);
// console.log(
//     `
//     ${title}
//     ${body}
//     `
// );

const user = {
    name: 'Ben',
    address: {city: 'Melbourne', state: 'VIC'},
    hobbies: ['Movies', 'Sports', 'Music'],
};

// const {name, address} = user;
const {
    name,
    address,
    hobbies: [firstHobby, ...otherHobbies],
    address: {city, state},
} = user;

console.log(name);
console.log(address);
console.log(firstHobby);
console.log(otherHobbies);
console.log(city);